
<template>
    
    <Get_SM_Body_Table_Each_Row_Comp 
    v-for="(each_item, index) in procurement_store.all_sms"
    :each_item="each_item" :index="index"
    />

</template>

<script setup>

    import Get_SM_Body_Table_Each_Row_Comp from '../get_sm/Get_SM_Body_Table_Each_Row_Comp.vue'

    import ProcurementStore from '../../../store/procurement_store';
    const procurement_store = ProcurementStore();

</script>

<style lang="scss" scoped>

</style>