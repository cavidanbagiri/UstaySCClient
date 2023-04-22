<template>
    <tbody>
        
        <Get_Waiting_MTF_Table_Body_Each_Row_Comp 
        v-for="(each_item, index) in procurement_store.waiting_orders_filter"
        :each_item=each_item :index = index 
        @addChecked='addChecked' @removeChecked='removeChecked'
        />

    </tbody>
</template>

<script setup>

import Get_Waiting_MTF_Table_Body_Each_Row_Comp from './Get_Waiting_MTF_Table_Body_Each_Row_Comp.vue';

import ProcuremntStore from '../../../store/procurement_store.js';
const procurement_store = ProcuremntStore();


const addChecked = (item_id) => {
    procurement_store.checked_values.push(item_id);
}

const removeChecked = (item_id) => {
    procurement_store.checked_values = procurement_store.checked_values.filter((id)=>id !== item_id)
    // checked_values.value = checked_values.value.filter((id)=>id !== item_id)
}

</script>

<style lang="scss" scoped></style>