
<template>
    
    <Received_SM_Table_Body_Each_Row 
    v-for="(each, index) in warehouse_store.received_items"
    :each="each" :index="index"
    @addChecked="addChecked" @removeChecked="removeChecked"
    />

</template>

<script setup>

    import Received_SM_Table_Body_Each_Row from './Received_SM_Table_Body_Each_Row.vue'
    import WarehouseStore from '../../../store/warehouse_store';
    const warehouse_store = WarehouseStore();

    
    const addChecked = (item) => {
        // warehouse_store.checked_values.push(item);
    }
    
    // Remove Operation FIx Needed
    const removeChecked = (item) => {
        // warehouse_store.checked_values = prop.checked_values.filter((each)=>each.id!=item.id)
    }

</script>

<style lang="scss" scoped>

</style>