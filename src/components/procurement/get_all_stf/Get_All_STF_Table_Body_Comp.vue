<template>
    <tbody class="text-gray-500">
        
        <Get_All_STF_Table_Body_Each_Row_Comp 
        v-for="(each, index) in procurement_store.all_stf"
        :each=each :index = index 
        @addChecked='addChecked' @removeChecked='removeChecked'
        />

    </tbody>
</template>

<script setup>

import Get_All_STF_Table_Body_Each_Row_Comp from './Get_All_STF_Table_Body_Each_Row_Comp.vue';
import ProcuremntStore from '../../../store/procurement_store.js';
const procurement_store = ProcuremntStore();


const addChecked = (item) => {

    // Check Selecting Items Conditions
    if(item.situation ==='Processing' || item.situation === 'Received' ){
        procurement_store.toggle_createsm = true;
    }

    if(procurement_store.checked_values.length >= 1){
        procurement_store.checked_values.filter((each)=>{
            if(item.stf_num !== each.stf_num){
                procurement_store.toggle_createsm = true;
            }
            else{
                procurement_store.checked_values.push(item);
                procurement_store.toggle_createsm = false;
            }
        })
    }
    else{
        procurement_store.checked_values.push(item);
    }
    console.log('procurement store checked : ',procurement_store.checked_values);
}

const removeChecked = (item_id) => {
    procurement_store.checked_values = procurement_store.checked_values.filter((item)=>item.id !== item_id)
    procurement_store.toggle_createsm = false;
}

</script>

<style lang="scss" scoped></style>