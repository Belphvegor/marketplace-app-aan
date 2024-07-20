import './bootstrap';
import './app.min';
import './head';
import './vendor.min';

import Alpine from 'alpinejs';

const pageModules = import.meta.glob('./pages/**/*.js');

Object.entries(pageModules).forEach(([path, module]) => {
    module().then((mod) => {
        // Lakukan sesuatu dengan modul yang diimpor jika diperlukan
        console.log(`Module ${path} loaded`);
    });
});


window.Alpine = Alpine;

Alpine.start();
