import {defineConfig} from 'vite'
import {sync} from "glob";

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    build: {
        outDir: './dist',
        emptyOutDir: true,
        rollupOptions: {
            input: sync("./src/**/*.html".replace(/\\/g, "/"))
        }
    },
    server: {
        port: 8888,
    },
})
