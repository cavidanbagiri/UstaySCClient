<template>
    
    <div class="flex flex-col" style="display:inline-block">

        <div class="sticky h-40 top-10 bg-white">
            <div class=" sticky left-16 flex flex-col w-max bg-white" style="display:inline-block; width: calc(100vw - 5rem);">
                <SM_Procurement_Analyz/>
                <Filter_Section_Comp/>
            </div>
        </div>

        <div>
            <Show_SM_Table/>
        </div>

        <table-row-inform 
        :row_inform="index_store.row_detail_data" 
        :row_inform_condition="index_store.row_inform_condition" 
        @closeRowInform="closeRowInform"
        />


    </div>

</template>

<script setup>

import { onMounted } from 'vue';

import SM_Procurement_Analyz from '../SM_Procurement_Analyz.vue';
import Filter_Section_Comp from './filter_section/Filter_Section_Comp.vue';
import Show_SM_Table from './Show_SM_Table.vue';
import ProcurementStore from '../../../store/procurement_store';
import IndexStore from '../../../store';

const procurement_store = ProcurementStore();
const index_store = IndexStore();

onMounted(async()=>{
    await procurement_store.fetchAllSM();
    procurement_store.getSMHeaders();
})


const closeRowInform = () => {
    index_store.row_inform_condition = false;
}

</script>

<style lang="scss" scoped></style>