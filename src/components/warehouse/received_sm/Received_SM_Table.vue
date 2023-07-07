
<template>
    <div class="flex flex-col" style="display:inline-block">

        <div class="sticky h-40 top-10 bg-white">
            <div class=" sticky left-16 flex flex-col w-max bg-white"
                style="display:inline-block; width: calc(100vw - 5rem);">
                <table-sm-statistics :statistic_result="statistic_result" @fetchCurrentData="fetchCurrentData" />
                <table-filter>
                    <table-expand v-if="true" :table_headers="warehouse_store.receiving_sm_headers" />
                </table-filter>
            </div>
        </div>

        <!-- Table -->
        <div class="">
            <table class=" text-xs text-left text-gray-800 dark:text-gray-400 w-full " style="font-size: xx-small;">
                <Received_SM_Table_Header />
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
import { onMounted, ref, reactive, watchEffect } from 'vue';
import Received_SM_Table_Header from './Received_SM_Table_Header.vue';
import Received_SM_Table_Body from './Received_SM_Table_Body.vue'
import WarehouseStore from '../../../store/warehouse_store';
import IndexStore from '../../../store';

// Create variable for importing data
const index_store = IndexStore();
const warehouse_store = WarehouseStore();

// Component Variables
const get_statistic_result = ref([]);
const statistic_result = reactive({
    processing: 0,
    received: 0,
    provided:0,
    total: 0
})


onMounted(async () => {
    // Get All Waiting SMS
    await warehouse_store.fetchReceivingSM();
    // Get \Warehouse Statistics Resukt just about SM
    await warehouse_store.getStatisticResult();
    // Get Table Headers
    warehouse_store.getReceivingSMHeaders();
})

const fetchCurrentData = async (statistic_result_value) => {
  if (statistic_result_value !== 0) {
    await warehouse_store.getStatisticResultData(statistic_result_value);
  }
  else {
    await warehouse_store.getWaitingsSMS();
  }
}

watchEffect(()=>{
    get_statistic_result.value = warehouse_store.warehouse_statistic_result;
    if(get_statistic_result.value){
        for(let i of get_statistic_result.value){
            if(i.SituationModelId === 1){
                continue;
            }
            if(i.SituationModelId === 2){
                statistic_result.processing = i.count;
            }
            if(i.SituationModelId === 3){
                statistic_result.received = i.count;
            }
            statistic_result.total += Number(i.count);
        }
    }
})

const closeRowInform = () => index_store.row_inform_condition = false;



</script>

<style lang="scss" scoped></style>
