
import { createApp } from 'vue'
import App from './App.vue'

// Using Tailwind Css
import './index.css'

// Using vue-router
import router from './route/index.js';

// Import Pinia and Create instance
import { createPinia } from 'pinia';
const pinia = createPinia();

// Import Plugins
import validation from './plugins/validation'; 
import dateFormat from './plugins/date_format';
import ordertableheader from './plugins/order_table_format';

const app = createApp(App)

// Use Router
app.use(router);

// Use Pinia
app.use(pinia);

// Use Plugins
app.use(validation);
app.use(dateFormat);
app.use(ordertableheader);


app.mount('#app');
