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

// Import Directives
import font_family from './directives/table_header_font_family';

const app = createApp(App)

// Use Router
app.use(router);

// Use Pinia
app.use(pinia);

// Use Plugins
app.use(validation);

// Use Directives
// app.directive('font-size',{
//     beforeMount: (el, binding) => {
//         el.style.fontSize = binding.value+'px'
//     }
// })
app.directive('font-family',font_family);

app.mount('#app');
