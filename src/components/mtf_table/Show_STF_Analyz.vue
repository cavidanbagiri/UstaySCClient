<template>
    
    <div class="grid grid-cols-12 gap-12 justify-between mb-2">

        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:shadow-xl hover:cursor-pointer " >
            <div class="flex flex-col">
                <span class="text-gray-600 text-lg font-medium" >Total</span>
                <span class="mt-3 text-lg font-bold">{{ statistic_result.total }}</span>
            </div>
            <div class="flex items-end">
                <span class="bg-gray-100 rounded-md text-black-800 text-sm p-2 font-bold">Get Data</span>
            </div>
        </div>
        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:shadow-xl hover:cursor-pointer " >
            <div class="flex flex-col">
                <span class="text-gray-600 text-lg font-medium" >Waiting</span>
                <span class="mt-3 text-lg font-bold">{{statistic_result.waiting}}</span>
            </div>
            <div class="flex items-end">
                <span class="bg-red-100 rounded-md text-red-800 text-sm p-2 font-bold">Get Data</span>
            </div>
        </div>
        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:shadow-xl hover:cursor-pointer " >
            <div class="flex flex-col">
                <span class="text-gray-600 text-lg font-medium" >Processing</span>
                <span class="mt-3 text-lg font-bold">{{statistic_result.processing}}</span>
            </div>
            <div class="flex items-end">
                <span class="bg-blue-100 rounded-md text-blue-800 text-sm p-2 font-bold">Get Data</span>
            </div>
        </div>
        <div class=" col-span-3 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:shadow-xl hover:cursor-pointer " >
            <div class="flex flex-col">
                <span class="text-gray-600 text-lg font-medium" >Received</span>
                <span class="mt-3 text-lg font-bold">{{statistic_result.received}}</span>
            </div>
            <div class="flex items-end">
                <span class="bg-green-100 text-green-800 text-sm p-2 rounded-md font-bold">Get Data</span>
            </div>
        </div>
        

    </div>

</template>

<script setup>

import { onMounted, watchEffect, ref, reactive } from 'vue';

import OrderStore from '../../store/order_store';
import UserStore from '../../store/user_store';

const order_store = OrderStore();
const user_store = UserStore();

const get_statistic_result = ref([]);

const statistic_result = reactive({
    waiting : 0,
    processing : 0,
    received : 0,
    total : 0
})

onMounted(async () => {

    const user_id = user_store.user;
    await order_store.getUserStatisticResult(user_id.id);

})

watchEffect(() => {
    get_statistic_result.value = order_store.statistic_result;
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


</script>

<style lang="scss" scoped></style>