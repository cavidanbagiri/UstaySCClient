
import { createRouter, createWebHistory } from 'vue-router';

import MTFPage from '../views/MTFPage.vue';
import HomePage from '../views/HomePage.vue';
import ProcurementPage from '../views/ProcurementPage.vue';
import WarehousePage from '../views/WarehousePage.vue';

const routes = [

    { path:'/', name:'HomePage', component:HomePage },
    { path:'/order/stf', name:'STFPage', component:MTFPage },
    { path:'/procurement', name:'ProcurementPage', component:ProcurementPage },
    { path:'/warehouse',name:'WarehousePage', component:WarehousePage},

]

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;