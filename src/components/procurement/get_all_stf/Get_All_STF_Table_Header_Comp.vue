<template>
    
    <Order-Table-Header :table_headers="procurement_store.stf_table_headers" />

</template>

<script setup>

import { ref, watchEffect } from 'vue';
import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();


</script>

<style lang="scss" scoped></style>