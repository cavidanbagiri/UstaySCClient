
<template>
    <div class="flex flex-col" style="display: inline-block;">

        <div class="sticky top-10 px-1 ">
            <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: calc(100vw - 5rem);">
                <!-- <div class="bg-blue-300 p-1 "> -->

                        <Show_STF_Analyz />
    
                        <Show_STF_Filter_Section />
                    
                <!-- </div> -->
            </div>
        </div>
        
        
        <div class="">
            <Show_STF_Table_Comp />
        </div>

        <table-row-inform 
        :row_inform="index_store.row_detail_data" 
        :row_inform_condition="index_store.row_inform_condition" 
        @closeRowInform="closeRowInform"
        />

        <Show_STF_Selecting_Task />

    </div>
</template>

<script setup>

import { onMounted, watchEffect } from 'vue'

import OrderStore from '../../../store/order_store';
import IndexStore from '../../../store';
import UserStore from '../../../store/user_store';
import Show_STF_Analyz from '../Show_STF_Analyz.vue';
import Show_STF_Table_Comp from './Show_STF_Table_Comp.vue';
import Show_STF_Filter_Section from './filter_section/Show_STF_Filter_Section.vue';
import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';

const order_store = OrderStore();
const user_store = UserStore();
const index_store = IndexStore();

onMounted(async () => {
    const user = user_store.GETUSERINFORM;
    await order_store.showSTF(user);
    if (order_store.table_headers.length === 0) {
        await order_store.getHeaders();
    }
})

watchEffect(async()=>{
    if(order_store.after_created === true){
        await order_store.showSTF();
        order_store.after_created=false;
    }
})

const closeRowInform = () => {
    index_store.row_inform_condition = false;
}

</script>

<style lang="scss" scoped></style>
