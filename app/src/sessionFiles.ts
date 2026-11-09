export const sessionFilesKey = 'roblox-api-diff.files.v1';
interface SavedFile { name: string; type: string; lastModified: number; data: string }
export interface SelectedFiles { oldFile: File | null; newFile: File | null }

function read(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result instanceof ArrayBuffer) resolve(reader.result);
            else reject(new Error('Could not read the selected file.'));
        };
        reader.onerror = () => reject(reader.error ?? new Error('Could not read the selected file.'));
        reader.readAsArrayBuffer(file);
    });
}

async function encode(file: File | null): Promise<SavedFile | null> {
    if (!file) return null;
    const bytes = await read(file);
    const compressed = new Uint8Array(await new Response(
        new Response(bytes).body!.pipeThrough(new CompressionStream('gzip')),
    ).arrayBuffer());
    let binary = '';
    for (let offset = 0; offset < compressed.length; offset += 8192)
        binary += String.fromCharCode(...compressed.subarray(offset, offset + 8192));
    return { name: file.name, type: file.type, lastModified: file.lastModified, data: btoa(binary) };
}

async function decode(raw: unknown): Promise<File | null> {
    if (raw === null) return null;
    if (!raw || typeof raw !== 'object') throw new Error('Invalid saved file.');
    const file = raw as Partial<SavedFile>;
    if (typeof file.name !== 'string' || typeof file.type !== 'string'
        || typeof file.lastModified !== 'number' || typeof file.data !== 'string')
        throw new Error('Invalid saved file.');
    const bytes = Uint8Array.from(atob(file.data), char => char.charCodeAt(0));
    const content = await new Response(
        new Response(bytes).body!.pipeThrough(new DecompressionStream('gzip')),
    ).arrayBuffer();
    return new File([content], file.name, { type: file.type, lastModified: file.lastModified });
}

export async function serializeFiles(files: SelectedFiles): Promise<string> {
    const [oldFile, newFile] = await Promise.all([encode(files.oldFile), encode(files.newFile)]);
    return JSON.stringify({ oldFile, newFile });
}

export async function restoreFiles(): Promise<SelectedFiles> {
    const saved = sessionStorage.getItem(sessionFilesKey);
    if (!saved) return { oldFile: null, newFile: null };
    const raw: unknown = JSON.parse(saved);
    if (!raw || typeof raw !== 'object') throw new Error('Invalid saved selections.');
    const files = raw as Record<string, unknown>;
    const [oldFile, newFile] = await Promise.all([decode(files.oldFile), decode(files.newFile)]);
    return { oldFile, newFile };
}
