
<template>
    <div class=" flex flex-col px-2 bg-white">

        <!-- If User Login -->
        <div v-if="user_store.user" class="w-full">
            <div class="flex flex-row mt-1 my-2 anim h-10 sticky top-0 bg-white w-full" v-font-family style="letter-spacing: 1px;">

                <span :class="tab_num === 0 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(0)"
                class=" text-xs text-black px-3 pb-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-plus fa-lg "></i>
                    Show MTF</span>
                <span :class="tab_num === 1 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(1)"
                class=" text-xs text-black px-3 pb-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-list fa-lg "></i>
                    Create MTF</span>
                <span :class="tab_num === 2 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(2)"
                class=" text-xs text-black px-3 pb-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i
                        class="fa-solid fa-warehouse fa-lg "></i> Show Warehouse</span>

            </div>

            <keep-alive>
                <component :is="tabs[tab_num]" />
            </keep-alive>
            
        </div>

        <div v-else>
            <span>Please Login</span>
        </div>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

// Import Components For Showing In MTF Tab
import MTF_Table_Comp from '../components/mtf_table/create_user_mtf/MTF_Table_Comp.vue';
import Show_MTF_Comp from '../components/mtf_table/show_user_mtf/Show_MTF_Comp.vue';
import Get_Warehouse_Table_Comp from '../components/warehouse/Get_Warehouse_Table_Comp.vue';

import OrderStore from '../store/order_store';
import UserStore from '../store/user_store';
const order_store = OrderStore();
const user_store = UserStore();

/******************************************************************* Work With Tabs *************************/
const tab_num = ref(0);
const changeTabe = (num) => tab_num.value = num
const tabs = ([Show_MTF_Comp, MTF_Table_Comp, Get_Warehouse_Table_Comp]);
/************************************************************************************************************/

onMounted(async () => {
    await order_store.fetchFieldsNames(1);
})


</script>

<style scoped>
.anim {
    animation: openfilter 1s ease-out;
}

@keyframes openfilter {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateY(0%);
    }
}
</style>
