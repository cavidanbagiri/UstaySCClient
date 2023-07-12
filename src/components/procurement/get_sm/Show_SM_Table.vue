

<template>
    <div class="mt-1 shadow-md sm:rounded-lg w-full border-2 ">
        <!-- Table -->
        <div class="">
            <table class="text-left text-gray-800 w-full">
                <Table-Header :table_headers="procurement_store.sm_table_headers" />
                <tbody class="">
                    <Get_SM_Body_Table />
                </tbody>

            </table>
        </div>

    </div>
</template>

<script setup>


import Get_SM_Body_Table from './Get_SM_Body_Table.vue';
import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();

</script>

<style scoped>

</style>