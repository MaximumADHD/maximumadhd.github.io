import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
    plugins: [
        react(),
    ],

    base: './',
    publicDir: false,

    build: {
        rollupOptions: {
            input: resolve(root, 'index.html')
        },
    },
});
