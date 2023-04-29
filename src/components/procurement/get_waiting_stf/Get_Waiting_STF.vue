
<template>
  <div class="flex flex-col  my-1 py-2 px-1 text-black bg-slate-50">

    <Filter_Section_Comp />

    <Show_Waiting_STF_Table_Comp />


  </div>
</template>

<script setup>

import { onMounted } from 'vue'

import ProcurementStore  from '../../../store/procurement_store.js';

import Filter_Section_Comp from './Filter_Section_Comp.vue';
import Show_Waiting_STF_Table_Comp from './Show_Waiting_STF_Table_Comp.vue';

const procurement_store = ProcurementStore();

onMounted(async () => await procurement_store.showWaitingMTF())

</script>

<style lang="scss" scoped></style>