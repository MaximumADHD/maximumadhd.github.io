import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import type { Diff } from '../differ';
import type { Database } from '../apiDumpV1';
import type { CompareResponse, DumpResponse } from '../worker';
import { DiffView } from './DiffView';
import { DumpView } from './DumpView';
import { restoreFiles, serializeFiles, sessionFilesKey } from '../sessionFiles';
import '../app.css';

export default function App() {
    const [oldFile, setOldFile] = useState<File | null>(null);
    const [newFile, setNewFile] = useState<File | null>(null);

    const [diffs, setDiffs] = useState<Diff[] | null>(null);
    const [dump, setDump] = useState<{ name: string; database: Database } | null>(null);

    const [busy, setBusy] = useState(false);
    const [busyLabel, setBusyLabel] = useState('');

    const [error, setError] = useState('');
    const [restoring, setRestoring] = useState(true);

    const [storageError, setStorageError] = useState('');
    const [saving, setSaving] = useState(false);

    const worker = useRef<Worker | null>(null);
    useEffect(() => () => worker.current?.terminate(), []);

    useEffect(() => {
        let cancelled = false;
        restoreFiles().then(files => {
            if (cancelled) return;
            setOldFile(files.oldFile);
            setNewFile(files.newFile);
        }).catch(error => {
            if (!cancelled) setStorageError(`Could not restore selected files: ${error instanceof Error ? error.message : String(error)}. Use Forget files to clear the saved selections.`);
        }).finally(() => {
            if (!cancelled) setRestoring(false);
        });
        return () => { cancelled = true; };
    }, []);

    useEffect(() => {
        if (restoring || storageError)
            return;

        let cancelled = false;
        setSaving(true);

        serializeFiles({ oldFile, newFile }).then(saved => {
            if (cancelled) return;
            if (oldFile || newFile) sessionStorage.setItem(sessionFilesKey, saved);
            else sessionStorage.removeItem(sessionFilesKey);
        }).catch(error => {
            if (!cancelled) setStorageError(`Could not remember selected files: ${error instanceof Error ? error.message : String(error)}. You can still compare them. Use Forget files before retrying.`);
        }).finally(() => {
            if (!cancelled) setSaving(false);
        });

        return () => { cancelled = true; };
    }, [oldFile, newFile, restoring, storageError]);

    function invalidate() {
        worker.current?.terminate();
        worker.current = null;
        setBusy(false);
        setDiffs(null);
        setDump(null);
        setError('');
    }

    function upload(event: ChangeEvent<HTMLInputElement>, side: 'old' | 'new') {
        invalidate();

        const file = event.target.files?.[0] ?? null;
        event.target.value = '';

        if (side === 'old') setOldFile(file);
        else setNewFile(file);
    }

    function launch<Response>(
        create: () => Worker,
        message: unknown,
        label: string,
        failure: string,
        handle: (response: Response) => void,
    ) {
        invalidate();
        setBusy(true);
        setBusyLabel(label);

        try {
            const task = create();
            worker.current = task;

            const finish = () => {
                task.terminate();
                worker.current = null;
                setBusy(false);
            };

            task.onmessage = (event: MessageEvent<Response>) => {
                if (worker.current !== task)
                    return;

                finish();
                handle(event.data);
            };

            task.onerror = (event) => {
                if (worker.current !== task)
                    return;

                finish();
                setError(event.message || failure);
            };
            
            task.onmessageerror = () => {
                if (worker.current !== task)
                    return;

                finish();
                setError('The result could not be read. Please try again.');
            };

            task.postMessage(message);
        } catch (error) {
            worker.current?.terminate();
            worker.current = null;

            setBusy(false);
            setError(error instanceof Error ? error.message : String(error));
        }
    }

    function compare() {
        if (!oldFile || !newFile)
            return;

        launch<CompareResponse>(
            () => new Worker(
                new URL('../compare.worker.ts', import.meta.url),
                { type: 'module' },
            ),
            { oldFile, newFile },
            'Comparing dumps…',
            'The comparison worker failed. Please try again.',
            (response) => {
                if (response.ok) setDiffs(response.diffs);
                else setError(response.error);
            },
        );
    }

    function viewDump(side: 'old' | 'new') {
        const file = side === 'old' ? oldFile : newFile;

        if (!file)
            return;

        launch<DumpResponse>(
            () => new Worker(
                new URL('../dump.worker.ts', import.meta.url),
                { type: 'module' },
            ),
            { file },
            'Parsing dump…',
            'The dump worker failed. Please try again.',
            (response) => {
                if (response.ok) setDump({ name: file.name, database: response.database });
                else setError(response.error);
            },
        );
    }
    
    return (
        <main>
            <header className="tool-header">
                <h1>MaximumADHD's Roblox API Archive</h1>
            </header>

            <section className="upload-panel" aria-label="API dump comparison">
                <div className="file-pair">
                    <label className="file-card">
                        <span className="file-title">Old API dump</span>
                        <input
                            type="file"
                            disabled={restoring}
                            accept=".json,application/json"
                            aria-label="Old API dump"
                            onChange={(e) => upload(e, 'old')}
                        />
                        <span className="choose-file">Choose JSON file</span>
                        <span className="file-name">
                            {oldFile?.name ?? 'Choose the earlier dump'}
                        </span>
                    </label>
                    <label className="file-card">
                        <span className="file-title">New API dump</span>
                        <input
                            type="file"
                            disabled={restoring}
                            accept=".json,application/json"
                            aria-label="New API dump"
                            onChange={(e) => upload(e, 'new')}
                        />
                        <span className="choose-file">Choose JSON file</span>
                        <span className="file-name">
                            {newFile?.name ?? 'Choose the later dump'}
                        </span>
                    </label>
                </div>
                <div className="actions">
                    <button
                        type="button"
                        disabled={restoring || !oldFile || !newFile || busy}
                        onClick={compare}
                    >
                        Compare dumps
                    </button>
                    <button
                        type="button"
                        disabled={restoring || !oldFile || !newFile || busy}
                        onClick={() => {
                            invalidate();
                            setOldFile(newFile);
                            setNewFile(oldFile);
                        }}
                    >
                        Swap direction
                    </button>
                    <button
                        type="button"
                        disabled={restoring || !oldFile || busy}
                        onClick={() => viewDump('old')}
                    >
                        View old dump
                    </button>
                    <button
                        type="button"
                        disabled={restoring || !newFile || busy}
                        onClick={() => viewDump('new')}
                    >
                        View new dump
                    </button>
                    <button type="button" disabled={restoring} onClick={() => {
                        invalidate();
                        setOldFile(null);
                        setNewFile(null);
                        setSaving(false);
                        try {
                            sessionStorage.removeItem(sessionFilesKey);
                            setStorageError('');
                        } catch (error) {
                            setStorageError(`Could not clear saved files: ${error instanceof Error ? error.message : String(error)}`);
                        }
                    }}>Forget files</button>
                    {busy && (
                        <button type="button" onClick={invalidate}>
                            Cancel
                        </button>
                    )}
                </div>
                <p className="help">
                    {restoring ? 'Restoring selected files…' : saving
                        ? 'Remembering selected files…'
                        : 'Selections are remembered locally for this tab, including across refreshes. Close the tab or use Forget files to discard them.'}
                </p>
                <p className="help">
                    Supports API-Dump.json and Full-API-Dump.json (the
                    Classes/Enums schema). Use the same dump type on both sides
                    to avoid differences caused by omitted APIs.
                </p>
                <p className="help">
                    Older dumps are available in the{' '}
                    <a href="https://github.com/RobloxAPI/build-archive">
                        Roblox API build archive
                    </a>
                    . Download a JSON file from a build, then select it above.
                </p>
            </section>
            <div className="status" role="status" aria-live="polite">
                {busy
                    ? busyLabel
                    : diffs !== null
                      ? diffs.length
                          ? `${diffs.length} top-level diff entries.`
                          : 'No API differences found.'
                      : dump !== null
                        ? `${dump.database.Classes.size} classes and ${dump.database.Enums.size} enums.`
                        : 'Choose an old dump and a new dump to begin.'}
            </div>
            {error && (
                <div className="error" role="alert">
                    {error}
                </div>
            )}
            {storageError && <div className="error" role="alert">{storageError}</div>}
            {diffs !== null && diffs.length > 0 && (
                <section className="diff-output" aria-label="API differences">
                    <h2>
                        {oldFile?.name} → {newFile?.name}
                    </h2>
                    <DiffView diffs={diffs} />
                </section>
            )}
            {dump !== null && (
                <section className="diff-output" aria-label="API dump">
                    <h2>{dump.name}</h2>
                    <DumpView database={dump.database} />
                </section>
            )}
        </main>
    );
}
