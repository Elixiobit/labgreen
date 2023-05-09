// import { createApp } from 'vue/dist/vue.esm-browser.js';
import { createApp } from 'vue';
import App  from './App.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../public/css/carousel.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// createApp(App).mount('#app');
const vm = createApp(App);

vm.mount('#app');