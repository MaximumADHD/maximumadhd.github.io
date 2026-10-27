import argparse
import json
import os
import re
import sys
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent
VERSION_FILE = ROOT / "version.txt"

VERSION_PATTERN = re.compile(r"\A\d+\.\d+\.\d+\.\d+\Z")
API_ROOT = "https://apis.roblox.com/cloud/v2"
TASK_TIMEOUT_SECONDS = 600

UNIVERSE_ID = 10772183580
PLACE_ID = 70880851267260
PLACE_VERSION = 5

def read_json(url: str, headers: dict[str, str] | None = None, data: bytes | None = None) -> dict:
    request = Request(url, data=data, headers=headers or {}, method="POST" if data else "GET")

    try:
        with urlopen(request, timeout=30) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except (HTTPError, URLError, TimeoutError, json.JSONDecodeError) as error:
        raise RuntimeError(f"Request failed for {url}: {error}") from error

    if not isinstance(payload, dict):
        raise RuntimeError(f"Expected a JSON object from {url}.")
    
    return payload

def create_task(source: str, api_key: str) -> str:
    url = (
        f"{API_ROOT}/universes/{UNIVERSE_ID}/places/{PLACE_ID}"
        f"/versions/{PLACE_VERSION}/luau-execution-session-tasks"
    )

    body = json.dumps({
        "script": source
    }).encode("utf-8")

    payload = read_json(
        url,

        headers = {
            "x-api-key": api_key,
            "Content-Type": "application/json"
        },

        data = body,
    )

    task_path = payload.get("path")

    if not isinstance(task_path, str) or not task_path:
        raise RuntimeError("Roblox did not return a task path.")
    
    return task_path

def wait_for_task(task_path: str, api_key: str, generator_name: str) -> str:
    task_url = f"{API_ROOT}/{task_path.lstrip('/')}?view=FULL"
    started = time.monotonic()
    deadline = started + TASK_TIMEOUT_SECONDS
    next_progress = started
    last_state = None

    while True:
        now = time.monotonic()

        if now >= deadline:
            break

        task = read_json(task_url, headers={"x-api-key": api_key})
        state = task.get("state")

        if state != last_state or now >= next_progress:
            print(f"{generator_name}: state={state or '<missing>'}, elapsed={int(now - started)}s", flush=True)
            next_progress = now + 30
            last_state = state

        if state == "COMPLETE":
            results = task.get("output", {}).get("results", [])

            if len(results) != 1 or not isinstance(results[0], str):
                raise RuntimeError(f"{generator_name} task completed without one source result.")
            
            print(f"{generator_name} completed ({len(results[0])} characters).", flush=True)
            return results[0]

        if state in {"FAILED", "CANCELLED"} or task.get("error"):
            raise RuntimeError(f"{generator_name} task failed: {task.get('error') or state}")

        time.sleep(3)

    raise RuntimeError(
        f"Timed out waiting for {generator_name} after {TASK_TIMEOUT_SECONDS} seconds. "
        f"Last state: {last_state or '<missing>'}."
    )

def main() -> int:
    api_key = os.environ.get("RBX_API_KEY")

    if not api_key:
        raise RuntimeError("RBX_API_KEY is required to read the Roblox version.")

    print("Submitting Roblox version check (HTTP timeout: 30s)...", flush=True)
    task_path = create_task("return version()", api_key)
    print(f"Task submitted; polling for up to {TASK_TIMEOUT_SECONDS} seconds...", flush=True)
    version = wait_for_task(task_path, api_key, "Version check")

    if not VERSION_PATTERN.fullmatch(version):
        raise RuntimeError(f"Luau version() returned an invalid version: {version!r}")

    current = VERSION_FILE.read_text(encoding="utf-8-sig").strip() if VERSION_FILE.exists() else ""
    changed = version != current

    print(f"Generated version: {current or '<missing>'}")
    print(f"Current version: {version}")
    print("Generation required." if changed else "Generated files are current.")

    github_output = os.environ.get("GITHUB_OUTPUT")

    if github_output:
        with open(github_output, "a", encoding="utf-8", newline="\n") as output:
            output.write(f"version={version}\n")
            output.write(f"changed={'true' if changed else 'false'}\n")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())