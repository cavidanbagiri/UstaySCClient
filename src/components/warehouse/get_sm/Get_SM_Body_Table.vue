
<template>
    
    <Get_SM_Body_Table_Each_Row_Comp 
    v-for="(each_item, index) in warehouse_store.waiting_sms"
    :each_item="each_item" :index="index"
    @addChecked="addChecked" @removeChecked="removeChecked"
    />

</template>

<script setup>

    import Get_SM_Body_Table_Each_Row_Comp from '../get_sm/Get_SM_Body_Table_Each_Row_Comp.vue'
    import WarehouseStore from '../../../store/warehouse_store';
    const warehouse_store = WarehouseStore();

    
    const addChecked = (item) => {
        warehouse_store.checked_values.push(item);
    }
    
    // Remove Operation FIx Needed
    const removeChecked = (item) => {
        warehouse_store.checked_values = prop.checked_values.filter((each)=>each.id!=item.id)
    }

</script>

<style lang="scss" scoped>

</style>