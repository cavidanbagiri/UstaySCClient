
<template>
    <div class="flex flex-col" style="display: inline-block;">

        <div class="sticky top-10 px-1 ">
            <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: calc(100vw - 5rem);">

                <table-stf-statistics  
                :statistic_result="order_store.statistic_result"
                @fetchCurrentData = "fetchCurrentData"
                />

                <!-- <Show_STF_Filter_Section /> -->

                <!-- <table-filter :stores="order_store" :headers="order_store.table_headers" /> -->

                <table-filter @filterFunction = "filterFunction" >
                    <table-expand v-if="true" :table_headers="order_store.table_headers" />
                </table-filter>

            </div>
        </div>

        <div class="">
            <Show_STF_Table_Comp />
        </div>

        <table-row-inform :row_inform="index_store.row_detail_data" :row_inform_condition="index_store.row_inform_condition"
            @closeRowInform="closeRowInform" />
        <Show_STF_Selecting_Task />

    </div>
</template>

<script setup>

// Import Section
import { onMounted, watchEffect,} from 'vue'
import OrderStore from '../../../store/order_store';
import IndexStore from '../../../store';
import UserStore from '../../../store/user_store';
import Show_STF_Table_Comp from './Show_STF_Table_Comp.vue';
import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';

// Create variable for importing data
const order_store = OrderStore();
const user_store = UserStore();
const index_store = IndexStore();

// Load Firstly Data
onMounted(async () => {
    // Get User Information
    const user = user_store.GETUSERINFORM;
    // Get Data For statistic result
    await order_store.getUserStatisticResult(user.id);
    // Get Data For Showing STF
    await order_store.showSTF(user);
    // Get Data For Table Headers
    if (order_store.table_headers.length === 0) {
        await order_store.getHeaders();
    }
})

// Get Filtered Data
const filterFunction = async (filtered_objects)=>{
    await order_store.getFilteredData(filtered_objects);
}

// Get Statistic Result And Show
watchEffect(async () => {
    
    // For Created STF
    if (order_store.after_created === true) {
        await order_store.showSTF();
        order_store.after_created = false;
    }
   
})

// Show Statistic Data
const fetchCurrentData = async (statistic_result_value) => {
    console.log('another work');
    if(statistic_result_value!==0){
        const data = {
            user_id : user_store.user.id,
            statistic_result_value
        }
        await order_store.fetchStatisticResult(data);
    }
    else{
        await order_store.showSTF(user_store.user);
    }
}

// Close Row Information
const closeRowInform = () => index_store.row_inform_condition = false;



</script>

<style lang="scss" scoped></style>
