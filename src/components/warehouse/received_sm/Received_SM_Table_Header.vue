
<template>
    <Order-Table-Header :table_headers="warehouse_store.receiving_sm_headers" />
</template>

<script setup>

import WarehouseStore from '../../../store/warehouse_store';
const warehouse_store = WarehouseStore();

</script>

<style lang="scss" scoped>

</style>
