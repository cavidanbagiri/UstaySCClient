
<template>
    
    <Get_SM_Body_Table_Each_Row_Comp 
    v-for="(each_item, index) in warehouse_store?.checked_values"
    :each_item="each_item" :index="index"
    />

</template>

<script setup>

    import Get_SM_Body_Table_Each_Row_Comp from './Get_SM_Body_Table_Each_Row_Comp.vue'
    import WarehouseStore from '../../../store/warehouse_store';
    const warehouse_store = WarehouseStore();


</script>

<style lang="scss" scoped>

</style>