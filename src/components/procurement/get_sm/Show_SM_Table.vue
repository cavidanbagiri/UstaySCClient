

<template>
    <div class="mt-1 shadow-md sm:rounded-lg w-full border-2 h-screen">
        <!-- Table -->
        <div class=" h-2/3 overflow-auto">
            <table class="text-left text-gray-800 dark:text-gray-400 w-full" style="font-size: xx-small;">
                <Get_SM_Header_Table />
                <tbody class="">
                    <Get_SM_Body_Table />
                </tbody>

            </table>
        </div>

    </div>
</template>

<script setup>

import { onMounted } from 'vue';

import Get_SM_Header_Table from './Get_SM_Header_Table.vue';
import Get_SM_Body_Table from './Get_SM_Body_Table.vue';

import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();

onMounted(async () => {
    await procurement_store.fetchAllSM();
})

</script>

<style scoped>



</style>