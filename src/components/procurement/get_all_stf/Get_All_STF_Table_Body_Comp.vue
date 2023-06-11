<template>
    <tbody class="text-gray-500" style="letter-spacing: 0.3px;font-size: xx-small;">
        
        <Get_All_STF_Table_Body_Each_Row_Comp 
        v-for="(each_item, index) in procurement_store.all_stf"
        :each_item=each_item :index = index 
        @addChecked='addChecked' @removeChecked='removeChecked'
        />

    </tbody>
</template>

<script setup>

import { ref } from 'vue'
import Get_All_STF_Table_Body_Each_Row_Comp from './Get_All_STF_Table_Body_Each_Row_Comp.vue';
import ProcuremntStore from '../../../store/procurement_store.js';
const procurement_store = ProcuremntStore();

const checked_style = ref(false);

const addChecked = (item) => {
    if(procurement_store.checked_values.length >= 1){
        procurement_store.checked_values.filter((each)=>{
            if(item.stf_num !== each.stf_num){
                procurement_store.show_error_message = true;
            }
            else{
                procurement_store.checked_values.push(item);
                procurement_store.show_error_message = false;
            }
        })
    }
    else{
        procurement_store.checked_values.push(item);
    }
    console.log(procurement_store.checked_values);
}

const removeChecked = (item_id) => {
    procurement_store.checked_values = procurement_store.checked_values.filter((item)=>item.id !== item_id)
    procurement_store.show_error_message = false;
}

</script>

<style lang="scss" scoped></style>