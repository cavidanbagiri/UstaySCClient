
<template>
    <div class=" flex flex-col  bg-white">

        <!-- If User Login -->
        <div v-if="user_store.user" class="bg-white">
            <div class="bg-white sticky top-0">

                <div class="flex flex-row anim h-10 bg-white items-center sticky left-16 "
                        style="letter-spacing: 1px;font-size: x-small;display: inline-block;">
                    
                        <div class="flex flex-row anim h-10 sticky top-0 bg-white w-full items-center" style="letter-spacing: 1px;font-size: x-small;">
            
                            <span :class="order_store.tab_num === 0 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(0)"
                            class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-plus fa-lg "></i>
                                Show STF</span>
                            <span :class="order_store.tab_num === 1 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(1)"
                            class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-list fa-lg "></i>
                                Create STF</span>
                            <span :class="order_store.tab_num === 2 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(2)"
                            class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i
                                    class="fa-solid fa-warehouse fa-lg "></i> Show Warehouse</span>
            
                                </div>
                        </div>
            </div>

            <keep-alive>
                <component :is="tabs[order_store.tab_num]" />
            </keep-alive>
            
        </div>

        <div v-else>
            <span>Please Login</span>
        </div>

    </div>
</template>

<script setup>

import { onMounted } from 'vue';

// Import Components For Showing In MTF Tab
import STF_Table_Comp from '../components/order/create_user_stf/STF_Table_Comp.vue';
import Show_STF_Comp from '../components/order/show_user_stf/Show_STF_Comp.vue';
import Get_Warehouse_Table_Comp from '../components/warehouse/Get_Warehouse_Table_Comp.vue';

import OrderStore from '../store/order_store';
import UserStore from '../store/user_store';
const order_store = OrderStore();
const user_store = UserStore();

/******************************************************************* Work With Tabs *************************/
// const tab_num = ref(0);
const changeTab = (num) => order_store.tab_num = num
const tabs = [Show_STF_Comp, STF_Table_Comp, Get_Warehouse_Table_Comp];
/************************************************************************************************************/

onMounted(async () => {
    await order_store.fetchFieldsNames(1);
})


</script>

<style scoped>
.anim {
    animation: openfilter 0.5s ease-out;
}

@keyframes openfilter {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0%);
    }
}
</style>
