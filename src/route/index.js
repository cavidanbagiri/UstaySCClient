
import { createRouter, createWebHistory } from 'vue-router';

import MTFPage from '../views/MTFPage.vue';
import HomePage from '../views/HomePage.vue';
import ProcurementPage from '../views/ProcurementPage.vue';

const routes = [

    { path:'/', name:'HomePage', component:HomePage },
    { path:'/order/mtf', name:'MTFPage', component:MTFPage },
    { path:'/procurement', name:'ProcurementPage', component:ProcurementPage },

]

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;