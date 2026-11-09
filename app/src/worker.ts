import { compareDatabases } from "./differ";
import { parseJson } from "./apiDumpV1";
import type { Database } from "./apiDumpV1";
import type { Diff } from "./differ";

export interface CompareRequest {
    oldFile: File;
    newFile: File;
}

export type CompareResponse =
    { ok: true; diffs: Diff[] } | { ok: false; error: string };

export interface DumpRequest {
    file: File;
}

export type DumpResponse =
    { ok: true; database: Database } | { ok: false; error: string };

export async function parseFile({ file }: DumpRequest): Promise<Database> {
    return parseJson(await file.text(), file.name);
}

export async function compareFiles({
    oldFile,
    newFile,
}: CompareRequest): Promise<Diff[]> {
    const [oldText, newText] = await Promise.all([
        oldFile.text(),
        newFile.text(),
    ]);
    return compareDatabases(
        parseJson(oldText, oldFile.name),
        parseJson(newText, newFile.name),
    );
}
