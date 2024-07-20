import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/fonts',
            ],
            refresh: true,
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                app: 'resources/js/app.js',
            },
        },
    },
    publicDir: 'resources',
    assetsInclude: ['**/*.{ico,jpg,jpeg,png,gif,svg,webp,eot,ttf,woff,woff2,otf}'],
});
