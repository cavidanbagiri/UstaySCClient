
<template>
    <div class="flex flex-col" style="display:inline-block">

        <div class="sticky h-40 top-10 bg-white">
            <div class=" sticky left-16 flex flex-col w-max bg-white"
                style="display:inline-block; width: calc(100vw - 5rem);">
                <table-sm-statistics :statistic_result="warehouse_store.warehouse_statistic_result" @fetchCurrentData="fetchCurrentData" />
                <table-filter @filterFunction = "filterFunction">
                    <table-expand v-if="true" :table_headers="warehouse_store.receiving_sm_headers" />
                </table-filter>
            </div>
        </div>

        <!-- Table -->
        <div class="">
            <table class=" text-xs text-left text-gray-800 dark:text-gray-400 w-full " style="font-size: xx-small;">
                <Table-Header :table_headers="warehouse_store.receiving_sm_headers" />
                <Received_SM_Table_Body />
            </table>
        </div>

        <Show_STF_Selecting_Task />

        <table-row-inform 
        :row_inform="index_store.row_detail_data" 
        :row_inform_condition="index_store.row_inform_condition" 
        @closeRowInform="closeRowInform"
        />


    </div>
</template>

<script setup>

// Import Section
import { onMounted } from 'vue';
import Received_SM_Table_Body from './Received_SM_Table_Body.vue'
import WarehouseStore from '../../../store/warehouse_store';
import IndexStore from '../../../store';

// Create variable for importing data
const index_store = IndexStore();
const warehouse_store = WarehouseStore();


onMounted(async () => {
    // Get All Waiting SMS
    await warehouse_store.fetchReceivingSM();
    // Get \Warehouse Statistics Resukt just about SM
    await warehouse_store.getStatisticResult();
    // Get Table Headers
    warehouse_store.getReceivingSMHeaders();
})

// Get Filtered Data
const filterFunction = async (filtered_objects)=>{
    await warehouse_store.getFilteredDataReceivedSMS(filtered_objects);
}

const fetchCurrentData = async (statistic_result_value) => {
  if (statistic_result_value !== 0) {
    await warehouse_store.getStatisticResultData(statistic_result_value);
  }
  else {
    await warehouse_store.getWaitingsSMS();
  }
}

const closeRowInform = () => index_store.row_inform_condition = false;



</script>

<style lang="scss" scoped></style>
