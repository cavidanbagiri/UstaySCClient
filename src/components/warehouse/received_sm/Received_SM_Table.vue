
<template>
    <div class="mt-1 shadow-md sm:rounded-lg w-full border-2 ">
        <div class="h-screen">
            <div class="h-2/3 overflow-auto">
                <!-- Table -->
                <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full" style="font-size: xx-small;">

                    <Received_SM_Table_Header />

                    <Received_SM_Table_Body />

                </table>
            </div>
        </div>

    </div>
</template>

<script setup>

import { onMounted } from 'vue';

import Received_SM_Table_Header from './Received_SM_Table_Header.vue';
import Received_SM_Table_Body from './Received_SM_Table_Body.vue'
import WarehouseStore from '../../../store/warehouse_store';

const warehouse_store = WarehouseStore();
onMounted(async () => {
    await warehouse_store.fetchReceivingSM();
})


</script>

<style lang="scss" scoped></style>
