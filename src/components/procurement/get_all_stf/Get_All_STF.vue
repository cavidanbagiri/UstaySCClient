
<template>
  <div class="flex flex-col" style="display: inline-block;">

    <div class="h-40 sticky top-10 bg-white w-full">
      <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: calc(100vw - 5rem);">

        <table-stf-statistics :statistic_result="statistic_result" @fetchCurrentData="fetchCurrentData" />

        <!-- <Filter_Section_Comp /> -->
        <table-filter @filterFunction = "filterFunction">
          <table-expand v-if="true" :table_headers="procurement_store.stf_table_headers" />
        </table-filter>

      </div>
    </div>

    <Show_All_STF_Table_Comp />

    <Show_STF_Selecting_Task />

    <table-row-inform :row_inform="index_store.row_detail_data" :row_inform_condition="index_store.row_inform_condition"
      @closeRowInform="closeRowInform" />

  </div>
</template>

<script setup>

// Import Section
import { onMounted, watchEffect, ref, reactive } from 'vue'
import ProcurementStore from '../../../store/procurement_store.js';
import IndexStore from '../../../store';
import Show_All_STF_Table_Comp from './Show_All_STF_Table_Comp.vue';
import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';

// Create variable for importing data
const procurement_store = ProcurementStore();
const index_store = IndexStore();

// Component Variables
const get_statistic_result = ref([]);
const statistic_result = reactive({
  waiting: 0,
  processing: 0,
  received: 0,
  total: 0
})

onMounted(async () => {
  // Fetch All STF
  await procurement_store.fetchAllSTF()
  // Get Data For Statistic Result
  await procurement_store.getSTFStatisticsResult();
  // Get Data For Table Headers
  if (procurement_store.stf_table_headers.length === 0) {
    procurement_store.getSTFHeaders();
  }
}
)

// Get Filtered Data
const filterFunction = async (filtered_objects)=>{
    await procurement_store.getFilteredDataSTF(filtered_objects);
}

// After Creating SM, This code will work
watchEffect(async () => {

  // For Fetch All STF
  if (procurement_store.after_created) {
    await procurement_store.fetchAllSTF();
  }

  // For Get Statistic Result
  get_statistic_result.value = procurement_store.statistic_result;
  if (get_statistic_result.value) {
    for (let i of get_statistic_result.value) {
      if (i.SituationModelId === 1) {
        statistic_result.waiting = i.count;
      }
      if (i.SituationModelId === 2) {
        statistic_result.processing = i.count;
      }
      if (i.SituationModelId === 3) {
        statistic_result.received = i.count;
      }
      statistic_result.total += Number(i.count);
    }
  }

})

const fetchCurrentData = async (statistic_result_value) => {
  if (statistic_result_value !== 0) {
    await procurement_store.fetchStatisticResultData(statistic_result_value);
  }
  else {
    await procurement_store.fetchAllSTF();
  }
}

const closeRowInform = () => index_store.row_inform_condition = false;

</script>

<style lang="scss" scoped></style>
