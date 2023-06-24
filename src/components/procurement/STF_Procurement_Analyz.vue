<template>
    <div class="grid grid-cols-12 gap-3 justify-between mb-1 sticky analyz_header">

        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:cursor-pointer hover:shadow-md" @click="fetchCurrentData(0)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Total</span>
                <span class="bg-gray-200 rounded-md text-gray-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-gray-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.total }}
                </div>
            </div>
        </div>

        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:cursor-pointer hover:shadow-md"  @click="fetchCurrentData(1)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Waiting</span>
                <span class="bg-red-200 rounded-md text-red-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-red-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.waiting }}
                </div>
            </div>
        </div>
        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:cursor-pointer hover:shadow-md"  @click="fetchCurrentData(2)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Processing</span>
                <span class="bg-blue-200 rounded-md text-blue-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-blue-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.processing }}
                </div>
            </div>
        </div>
        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:cursor-pointer hover:shadow-md"  @click="fetchCurrentData(3)">
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