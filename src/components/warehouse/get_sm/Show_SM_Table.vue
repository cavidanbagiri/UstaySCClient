

<template>
    <div class="flex flex-col" style="display:inline-block">

        <div class="sticky h-40 top-10 bg-white">
            <div class=" sticky left-16 flex flex-col w-max bg-white"
                style="display:inline-block; width: calc(100vw - 5rem);">
                <SM_Procurement_Analyz />
                <Show_Filter_Section />
            </div>
        </div>


        <!-- <button @click="acceptedByWarehouse" v-if="warehouse_store.processing_checked_values.length"
            class="bg-red-600 p-2 px-3 text-white font-weight rounded-lg my-1">
            Accept
        </button> -->

        <!-- Table -->
        <div class="">
            <table class=" text-xs text-left text-gray-800 dark:text-gray-400 w-full " style="font-size: xx-small;">
                <Get_SM_Header_Table />
                <Get_SM_Body_Table />
            </table>
        </div>

        <Show_STF_Selecting_Task/>

    </div>
</template>

<script setup>

import { onMounted } from 'vue';

import Show_Filter_Section from './filter_section/Show_Filter_Section.vue';
import Get_SM_Header_Table from './Get_SM_Header_Table.vue';
import Get_SM_Body_Table from './Get_SM_Body_Table.vue';
import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';
import WarehouseStore from '../../../store/warehouse_store';
import UserStore from '../../../store/user_store';
import SM_Procurement_Analyz from '../SM_Procurement_Analyz.vue';

const warehouse_store = WarehouseStore();
const user_store = UserStore();

onMounted(async () => {
    await warehouse_store.getWaitingsSMS();
})


// const acceptedByWarehouse = () => {
//     warehouse_store.tab_num = 2;
// }


</script>

<style lang="scss" scoped></style>