<template>
    
    <div class="flex flex-col" style="display:inline-block">

        <div class="sticky h-40 top-10 bg-white">
            <div class=" sticky left-16 flex flex-col w-max bg-white" style="display:inline-block; width: calc(100vw - 5rem);">
                
                <table-sm-statistics :statistic_result="statistic_result" @fetchCurrentData="fetchCurrentData" />

                <Filter_Section_Comp/>

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
import { onMounted, watchEffect, ref, reactive } from 'vue';
import Filter_Section_Comp from './filter_section/Filter_Section_Comp.vue';
import Show_SM_Table from './Show_SM_Table.vue';
import ProcurementStore from '../../../store/procurement_store';
import IndexStore from '../../../store';

// Create variable for importing data
const procurement_store = ProcurementStore();
const index_store = IndexStore();

// Component Variables
const get_statistic_result = ref([]);
const statistic_result = reactive({
  waiting: 0,
  processing: 0,
  received: 0,
  provided: 0,
  total: 0
})


onMounted(async()=>{
    // Fetch All SM
    await procurement_store.fetchAllSM();
    // Fetch SM Statistic Result
    await procurement_store.getSMStatisticsResult();
    // Fetch Table Headers For SM
    procurement_store.getSMHeaders();
})

watchEffect(()=>{
    get_statistic_result.value = procurement_store.sm_statistic_result;
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