import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import Store from './Store.js';

const app = createApp(App);
app.use(Store);
app.mount('#app');