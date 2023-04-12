import { createApp } from 'vue'

// Using Tailwind Css
import './index.css'

// Using vue-router
import router from './route/index.js';

// Import Pinia and Create instance
import { createPinia } from 'pinia';
const pinia = createPinia();

import App from './App.vue'

const app = createApp(App)

app.use(router);

app.use(pinia);

app.mount('#app');
