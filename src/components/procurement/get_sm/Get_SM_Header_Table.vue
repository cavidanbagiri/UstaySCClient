
<template>
   <Table-Header :table_headers="procurement_store.sm_table_headers" />
</template>

<script setup>

import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();

</script>

<style scoped>


</style>
