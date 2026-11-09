# Roblox API Diff

An additive React + TypeScript page at `/api-diff.html`. Select an old and a new
`API-Dump.json` or `Full-API-Dump.json`, then compare them locally. File reading,
validation, and comparison run in a Web Worker; no API dump is sent to a server.
Changing an input, swapping direction, or cancelling terminates the current
worker and discards its results.
Selected file contents are gzip-compressed in tab-scoped `sessionStorage` and
restored after refresh. Close the tab or click **Forget files** to discard them.
No file paths or contents are sent to a server. Browser session restoration can
also restore tab storage; use **Forget files** when explicit removal is needed.
If storage is unavailable or full, the page reports it and comparison remains
available for the current selections.

The renderer's stylesheet (`src/app.css`) includes the rules of the site's
`api-dump.css`, preserving the API Dump Tool's descriptor spans, colors, badges,
dimming, nested entries, and change lists. The surrounding upload controls have
new styles. The existing static API dump and history pages keep using the root
`api-dump.css` and are not changed.

The app also applies the existing orange symbol style to lowercase `symbol`
spans (the desktop renderer's casing differs from the stylesheet). Punctuation
in compound type expressions is tokenized separately from type names; quoted
strings and badge contents retain their own highlighting.
Numeric literals use red highlighting. String values in defaults and change lists
are double-quoted, including empty strings; serialization changes retain badge
formatting instead of being treated as strings. These are intentional presentation
improvements over the desktop HTML output.

Known tags, security, thread-safety, serialization, and capability badges have
styled tooltips on hover and keyboard focus. Escape dismisses an open tooltip.
Only one badge tooltip can be open at a time; hovering or focusing another badge
replaces it.
`None` and `Undefined` badges use gray styling. Combined read/write security and
capability labels are rendered as separate badges with independent tooltips;
shared permissions remain a single label.
Tooltips render outside the diff scroller to avoid clipping and stay within the
viewport. Tag descriptions are maintained in `src/Tooltip.tsx`; unknown tags remain
plain badges rather than receiving speculative explanations. Capability tooltips
explain the notation, not the meaning of individual capability names.

## Development

Requires Node.js 22.18 or later.

Open the site repository folder in VS Code and run `npm ci` in `app`
once to install dependencies. Then press **Ctrl+Shift+B** and run
**Website: test locally**. This default build task runs tests and the
production build in sequence, then starts the development server and opens
`http://127.0.0.1:5173` with live updates.

Individual **Website: tests**, **Website: build**, and
**Website: dev server** tasks are available through **Tasks: Run Task**.
Stop the dev server with **Tasks: Terminate Task**. Port 5173 is required;
if it is occupied, stop the existing server before starting the task.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:5173`.

```sh
npm test
npm run build
```

The production build creates `dist/api-diff.html` and hashed bundles in `dist/assets`. The Pages
workflow builds this app, builds the existing Jekyll site, then copies the app
output into `_site` before uploading the Pages artifact. Source, dependencies,
and local build output are excluded from Jekyll.

## Comparison behavior

The engine ports `ReflectionDatabase`, `ReflectionDiffer`, descriptor/type
formatting, and the three diff modifiers from
[Roblox-API-Dump-Tool](https://github.com/MaximumADHD/Roblox-API-Dump-Tool).
It handles classes, all four member types, enums, tags, legacy enum names,
security, capabilities, parameters, tuple returns, serialization, inheritance,
class renames, merged field changes, and class-wide security changes.
Comparisons do not mutate their inputs.

Like the desktop tool's file-to-file comparison, this uses the v1 `Classes` /
`Enums` schema. Separate v2 `API-Dump-2.json` enrichment is not supported. Metadata
objects in tags, property defaults, and other fields not compared by the desktop
differ do not produce changes. Its class-rename heuristic compares member names,
not complete member signatures; a matching rename can still contain member changes.
Unknown member kinds, unsupported schema values, duplicate names, and inheritance
cycles report explicit errors instead of silently producing incomplete results.

Use matching full/partial dump types on both sides. A full dump compared against
a partial dump can report removals caused by omitted non-public APIs.
Historical JSON files are available in
[RobloxAPI/build-archive](https://github.com/RobloxAPI/build-archive), under
`data/{legacy,production}/builds/{GUID}/`. Download files for local comparison;
this page does not depend on the archive or a remote API at runtime.

## Desktop parity checks

`src/__fixtures__/expected.html` was generated by the desktop tool from the
adjacent `old.json` and `new.json` files. The tests compare DOM elements, classes,
text spans, nesting, and breaks, ignoring only insignificant HTML formatting
whitespace.

For an additional archive-to-archive check, generate HTML with the desktop tool's
`-compare -old <file> -new <file> -format HTML -out <file>` command. Set
`API_DIFF_OLD`, `API_DIFF_NEW`, and `API_DIFF_EXPECTED` to the respective absolute
paths before running `npm test`. This optional test runs locally; CI always runs
the checked-in fixture and does not require the C# tool or network access.
