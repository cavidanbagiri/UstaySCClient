
<template>
    <div class="flex flex-col" style="display: inline-block;">

        <div class="sticky top-10 p-1 ">
            <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: 80%;">
                <!-- <div class="bg-blue-300 p-1 "> -->
                    <Show_STF_Analyz />

                    <Show_STF_Filter_Section />
                <!-- </div> -->
            </div>
        </div>
        
        
        <div class="">
            <Show_STF_Table_Comp />
        </div>

        <Show_STF_Row_Inform />

        <Show_STF_Selecting_Task />

    </div>
</template>

<script setup>

import { onMounted } from 'vue'

import OrderStore from '../../../store/order_store';
import UserStore from '../../../store/user_store';
import Show_STF_Analyz from '../Show_STF_Analyz.vue';
import Show_STF_Table_Comp from './Show_STF_Table_Comp.vue';
import Show_STF_Filter_Section from './filter_section/Show_STF_Filter_Section.vue';
import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';
import Show_STF_Row_Inform from './Show_STF_Row_Inform.vue';

const order_store = OrderStore();
const user_store = UserStore();

onMounted(async () => {
    const user = user_store.GETUSERINFORM;
    await order_store.showSTF(user);
    if (order_store.table_headers.length === 0) {
        await order_store.getHeaders();
    }
})

</script>

<style lang="scss" scoped></style>
