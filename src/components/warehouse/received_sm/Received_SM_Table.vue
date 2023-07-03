
<template>
    <div class="flex flex-col" style="display:inline-block">

        <div class="sticky h-40 top-10 bg-white">
            <div class=" sticky left-16 flex flex-col w-max bg-white"
                style="display:inline-block; width: calc(100vw - 5rem);">
                <SM_Procurement_Analyz />
            </div>
        </div>

        <!-- Table -->
        <div class="">
            <table class=" text-xs text-left text-gray-800 dark:text-gray-400 w-full " style="font-size: xx-small;">
                <Received_SM_Table_Header />
                <Received_SM_Table_Body />
            </table>
        </div>

        <Show_STF_Selecting_Task />

        <table-row-inform 
        :row_inform="index_store.row_detail_data" 
        :row_inform_condition="index_store.row_inform_condition" 
        @closeRowInform="closeRowInform"
        />


    </div>
</template>

<script setup>

import { onMounted } from 'vue';

import Received_SM_Table_Header from './Received_SM_Table_Header.vue';
import Received_SM_Table_Body from './Received_SM_Table_Body.vue'
import WarehouseStore from '../../../store/warehouse_store';
import SM_Procurement_Analyz from '../SM_Procurement_Analyz.vue';
import IndexStore from '../../../store';
const index_store = IndexStore();
const warehouse_store = WarehouseStore();
onMounted(async () => {
    await warehouse_store.fetchReceivingSM();
    warehouse_store.getReceivingSMHeaders();
})


const closeRowInform = () => {
    index_store.row_inform_condition = false;
}



</script>

<style lang="scss" scoped></style>
