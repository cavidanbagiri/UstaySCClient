import { createApp } from 'vue'

// Using Tailwind Css
import './index.css'

// Using vue-router
import router from './route/index.js';

import App from './App.vue'

const app = createApp(App)

app.use(router);

app.mount('#app');
