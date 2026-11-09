import { compareFiles } from './worker';
import type { CompareRequest, CompareResponse } from './worker';

self.onmessage = async (event: MessageEvent<CompareRequest>) => {
    let response: CompareResponse;

    try {
        response = { ok: true, diffs: await compareFiles(event.data) };
    } catch (error) {
        response = {
            ok: false,
            error: error instanceof Error ? error.message : String(error),
        };
    }
    
    self.postMessage(response);
};
