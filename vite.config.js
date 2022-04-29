import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react'

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
    },
    plugins: [
        createHtmlPlugin({
            inject: {
                data: {
                    title: 'LoL Pairup',
                }
            }
        }),
        react({
            include: "**/*.{jsx,tsx}"
        })
    ]
})
