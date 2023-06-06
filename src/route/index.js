
import { createRouter, createWebHistory } from 'vue-router';

const OrderPage = () => import ('../views/OrderPage.vue');
const HomePage = () => import ('../views/HomePage.vue');
const ProcurementPage = () => import ('../views/ProcurementPage.vue');
const WarehousePage = () => import ('../views/WarehousePage.vue');
const WorkSpacePage = () => import ('../views/WorkSpacePage.vue');

const routes = [

    { path:'/', name:'HomePage', component:HomePage },
    { path:'/order/stf', name:'STFPage', component:OrderPage },
    { path:'/procurement', name:'ProcurementPage', component:ProcurementPage },
    { path:'/warehouse',name:'WarehousePage', component:WarehousePage},
    { path:'/workspace',name:'WorkSpacePage', component:WorkSpacePage}


]

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;