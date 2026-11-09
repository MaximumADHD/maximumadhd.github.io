import { parseFile } from './worker';
import type { DumpRequest, DumpResponse } from './worker';

self.onmessage = async (event: MessageEvent<DumpRequest>) => {
    let response: DumpResponse;

    try {
        response = { ok: true, database: await parseFile(event.data) };
    } catch (error) {
        response = {
            ok: false,
            error: error instanceof Error ? error.message : String(error),
        };
    }
    
    self.postMessage(response);
};
