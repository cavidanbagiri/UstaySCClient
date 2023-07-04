
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
import tableheader from './plugins/table_headers';
import tablerow from './plugins/table_rows';
import tableexpand from './plugins/table_expand';
import tablerowinform from './plugins/table_row_inform';
import tableinformbutton from './plugins/table_inform_button';
import tablestfstatistic from './plugins/table_stf_statistic';
import tablesmsstattistic from './plugins/table_sm_statistic';
import tablefilter from './plugins/table_filter';

const app = createApp(App)

// Use Router
app.use(router);

// Use Pinia
app.use(pinia);

// Use Plugins
app.use(validation);
app.use(dateFormat);
app.use(tableheader);
app.use(tablerow);
app.use(tableexpand);
app.use(tablerowinform);
app.use(tableinformbutton);
app.use(tablestfstatistic);
app.use(tablesmsstattistic);
app.use(tablefilter);

app.mount('#app');
