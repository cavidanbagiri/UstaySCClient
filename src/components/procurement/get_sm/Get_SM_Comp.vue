<template>
    
    <div class="flex flex-col" style="display:inline-block">

        <div class="sticky h-40 top-10 bg-white">
            <div class=" sticky left-16 flex flex-col w-max bg-white" style="display:inline-block; width: calc(100vw - 5rem);">
                
                <table-sm-statistics :statistic_result="procurement_store.sm_statistic_result" @fetchCurrentData="fetchCurrentData" />

                <table-filter @filterFunction = "filterFunction">
                    <table-expand v-if="true" :table_headers="procurement_store.sm_table_headers" />
                </table-filter>

            </div>
        </div>

        <div>
            <Show_SM_Table/>
        </div>

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
import Show_SM_Table from './Show_SM_Table.vue';
import ProcurementStore from '../../../store/procurement_store';
import IndexStore from '../../../store';

// Create variable for importing data
const procurement_store = ProcurementStore();
const index_store = IndexStore();


onMounted(async()=>{
    // Fetch All SM
    await procurement_store.fetchAllSM();
    // Fetch SM Statistic Result
    await procurement_store.getSMStatisticsResult();
    // Fetch Table Headers For SM
    procurement_store.getSMHeaders();
})

// Get Filtered Data
const filterFunction = async (filtered_objects)=>{
    await procurement_store.getFilteredDataSM(filtered_objects);
}



const fetchCurrentData = async (statistic_result_value) => {
  if (statistic_result_value !== 0) {
    await procurement_store.fetchStatisticResultDataSM(statistic_result_value);
  }
  else {
    await procurement_store.fetchAllSM();
  }
}

// Close Row Information Tab
const closeRowInform = () => index_store.row_inform_condition = false;

</script>

<style lang="scss" scoped></style>