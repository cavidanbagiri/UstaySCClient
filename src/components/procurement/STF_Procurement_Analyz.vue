<template>
    <div class="grid grid-cols-12 gap-3 justify-between mb-2 px-1">

        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md" @click="fetchCurrentData(0)">
            <div class="flex flex-col">
                <span class="text-gray-600 text-sm font-medium">Total Creating STF</span>
                <span class="mt-3 text-lg font-bold">{{ statistic_result.total }}</span>
            </div>
            <div class="flex items-end">
                <span class="bg-violet-100 rounded-sm text-violet-800 text-xs p-1 font-bold">Get Data</span>
            </div>
        </div>
        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md"  @click="fetchCurrentData(1)">
            <div class="flex flex-col">
                <span class="text-gray-600 text-sm font-medium">Waiting STF</span>
                <span class="mt-3 text-lg font-bold">{{statistic_result.waiting}}</span>
            </div>
            <div class="flex items-end">
                <span class="bg-red-100 rounded-sm text-red-800 text-xs p-1 font-bold">Get Data</span>
            </div>
        </div>
        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md"  @click="fetchCurrentData(2)">
            <div class="flex flex-col">
                <span class="text-gray-600 text-sm font-medium">Processing STF</span>
                <span class="mt-3 text-lg font-bold">{{statistic_result.processing}}</span>
            </div>
            <div class="flex items-end">
                <span class="bg-blue-100 rounded-sm text-blue-800 text-xs p-1 font-bold">Get Data</span>
            </div>
        </div>
        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md"  @click="fetchCurrentData(3)">
            <div class="flex flex-col">
                <span class="text-gray-600 text-sm font-medium">Received STF</span>
                <span class="mt-3 text-lg font-bold">{{statistic_result.received}}</span>
            </div>
            <div class="flex items-end">
                <span class="bg-green-100 rounded-sm text-green-800 text-xs p-1 font-bold">Get Data</span>
            </div>
        </div>
    </div>
</template>

<script setup>

import { reactive, onMounted, watchEffect, ref } from 'vue';

import ProcurementStore from '../../store/procurement_store.js';
const procurement_store = ProcurementStore();

onMounted(async ()=>{
    await procurement_store.getSTFStatisticsResult();
})

const get_statistic_result = ref([]);

const statistic_result = reactive({
    waiting : 0,
    processing : 0,
    received : 0,
    total : 0
})

watchEffect(()=>{
    get_statistic_result.value = procurement_store.statistic_result;
    if(get_statistic_result.value){
        for(let i of get_statistic_result.value){
            if(i.SituationModelId === 1){
                statistic_result.waiting = i.count;
            }
            if(i.SituationModelId === 2){
                statistic_result.processing = i.count;
            }
            if(i.SituationModelId === 3){
                statistic_result.received = i.count;
            }
            statistic_result.total += Number(i.count);
        }
    }
})

const fetchCurrentData = async (statistic_result_value) => {
    if(statistic_result_value!==0){
        
        await procurement_store.fetchStatisticResultData(statistic_result_value);
    }
    else{
        await procurement_store.fetchAllSTF();
    }
}

</script>

<style lang="scss" scoped></style>