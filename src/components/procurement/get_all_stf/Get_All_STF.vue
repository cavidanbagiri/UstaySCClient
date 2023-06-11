
<template>
  <div class="">

    <div class="h-40 sticky top-10 bg-white w-full">
      <STF_Procurement_Analyz/>
  
      <Filter_Section_Comp /> 
    </div>

    <Show_All_STF_Table_Comp />

    <Show_STF_Selecting_Task/>

  </div>
</template>

<script setup>

import { onMounted } from 'vue'

import ProcurementStore  from '../../../store/procurement_store.js';

import Filter_Section_Comp from './filter_section/Filter_Section_Comp.vue';
import Show_All_STF_Table_Comp from './Show_All_STF_Table_Comp.vue';
import STF_Procurement_Analyz from '../STF_Procurement_Analyz.vue';
import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';

const procurement_store = ProcurementStore();

onMounted(async () => await procurement_store.fetchAllSTF())

</script>

<style lang="scss" scoped></style>
