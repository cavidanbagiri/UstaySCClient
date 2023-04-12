
import { createRouter, createWebHistory } from 'vue-router';

import MTFPage from '../views/MTFPage.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
    { path:'/', name:'HomePage', component:HomePage },
    { path:'/order/createmtf', name:'MTFPage', component:MTFPage }
]

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;