<template>
    <div class="grid grid-cols-10 gap-3 justify-between mb-1 px-1 " style="letter-spacing: 1px;font-size: small">
        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md"  @click="fetchCurrentData(2)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 tanalyz_header">Processing</span>
                <span class="bg-blue-200 rounded-md text-blue-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-blue-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.processing }}
                </div>
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md"  @click="fetchCurrentData(3)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Received</span>
                <span class="bg-green-200 rounded-md text-green-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-green-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.received }}
                </div>
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md"  @click="fetchCurrentData(3)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Provided</span>
                <span class="bg-pink-200 rounded-md text-pink-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-pink-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.provided }}
                </div>
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md"
            @click="fetchCurrentData(0)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 ">Total STF</span>
                <span class="bg-orange-200 rounded-md text-orange-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-orange-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.total }}
                </div>
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md"
            @click="fetchCurrentData(0)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 ">Total SM</span>
                <span class="bg-violet-200 rounded-md text-violet-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-violet-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.total }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { reactive, onMounted, watchEffect, ref } from 'vue';

import ProcurementStore from '../../store/procurement_store.js';
const procurement_store = ProcurementStore();

onMounted(async () => {
    await procurement_store.getSMStatisticsResult();
})

const get_statistic_result = ref([]);

const statistic_result = reactive({
    // waiting : 0,
    processing: 0,
    received: 0,
    provided:0,
    total: 0
})

watchEffect(() => {
    get_statistic_result.value = procurement_store.sm_statistic_result;
    if (get_statistic_result.value) {
        for (let i of get_statistic_result.value) {
            if (i.SituationModelId === 1) {
                // statistic_result.waiting = i.count;
                continue;
            }
            if (i.SituationModelId === 2) {
                statistic_result.processing = i.count;
            }
            if (i.SituationModelId === 3) {
                statistic_result.received = i.count;
            }
            statistic_result.total += Number(i.count);
        }
    }
})

const fetchCurrentData = async (statistic_result_value) => {
    if (statistic_result_value !== 0) {
        await procurement_store.fetchStatisticResultDataSM(statistic_result_value);
    }
    else {
        await procurement_store.fetchAllSM();
    }
}

</script>

<style lang="scss" scoped></style>