import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    root: 'public',
    build: {
        outDir: './dist',
    },
    plugins: [
        createHtmlPlugin({
            inject: {
                data: {
                    title: 'LoL Pairup',
                }
            }
        })
    ]
})
