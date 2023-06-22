
<template>
    <Get_SM_Body_Table_Each_Row_Comp 
    v-for="(each, index) in warehouse_store.waiting_sms"
    :each="each" :index="index"
    @addChecked="addChecked" @removeChecked="removeChecked"
    />

</template>

<script setup>

    import Get_SM_Body_Table_Each_Row_Comp from '../get_sm/Get_SM_Body_Table_Each_Row_Comp.vue'
    import WarehouseStore from '../../../store/warehouse_store';
    const warehouse_store = WarehouseStore();

    
    const addChecked = (item) => {
        warehouse_store.processing_checked_values.push(item);
        console.log('selecting : ',warehouse_store.processing_checked_values);
    }
    
    // Remove Operation FIx Needed
    const removeChecked = (item) => {
        warehouse_store.processing_checked_values = warehouse_store.processing_checked_values.filter((each)=>each.id !== item)
        console.log('unselecting : ',warehouse_store.processing_checked_values);
    }

</script>

<style lang="scss" scoped>

</style>