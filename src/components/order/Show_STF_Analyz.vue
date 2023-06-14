<template>
    
    <div class="grid grid-cols-10 gap-12 justify-between mb-1 py-1 sticky anim bg-white" 
    v-font-family style="letter-spacing: 1px;font-size: small;">

        <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
         hover:shadow-xl hover:cursor-pointer "  @click = "fetchCurrentData(0)"  >
            <div class="flex flex-col">
                <span class="text-gray-600 text-md font-medium" >Total</span>
                <span class="mt-3 text-lg font-bold" style="font-family:Arial, Helvetica, sans-serif">{{ statistic_result.total }}</span>
            </div>
            <div class="flex items-end" style="font-size: xx-small;">
                <span class="bg-gray-100 rounded-md text-black-800 p-2 font-bold" >Get Data</span>
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
         hover:shadow-xl hover:cursor-pointer " @click = "fetchCurrentData(1)" >
            <div class="flex flex-col">
                <span class="text-gray-600 font-medium">Waiting</span>
                <span class="mt-3 text-lg font-bold" style="font-family:Arial, Helvetica, sans-serif">{{statistic_result.waiting}}</span>
            </div>
            <div class="flex items-end"  style="font-size: xx-small;">
                <span class="bg-red-100 rounded-md text-red-800 p-2 font-bold" >Get Data</span>
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-md 
        hover:shadow-xl hover:cursor-pointer " @click="fetchCurrentData(2)" >
            <div class="flex flex-col">
                <span class="text-gray-600 font-medium" >Processing</span>
                <span class="mt-3 text-lg font-bold" style="font-family:Arial, Helvetica, sans-serif">{{statistic_result.processing}}</span>
            </div>
            <div class="flex items-end" style="font-size: xx-small;">
                <span class="bg-blue-100 rounded-md text-blue-800 p-2 font-bold">Get Data</span>
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
         shadow-md hover:shadow-xl hover:cursor-pointer "  @click="fetchCurrentData(3)"  >
            <div class="flex flex-col">
                <span class="text-gray-600 font-medium" >Received</span>
                <span class="mt-3 text-lg font-bold"  style="font-family:Arial, Helvetica, sans-serif">{{statistic_result.received}}</span>
            </div>
            <div class="flex items-end" style="font-size: xx-small;">
                <span class="bg-green-100 text-green-800 p-2 rounded-md font-bold">Get Data</span>
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
         shadow-md hover:shadow-xl hover:cursor-pointer "  @click="fetchCurrentData(4)"  >
            <div class="flex flex-col">
                <span class="text-gray-600 font-medium" >Provide</span>
                <span class="mt-3 text-lg font-bold" style="font-family:Arial, Helvetica, sans-serif">0</span>
            </div>
            <div class="flex items-end" style="font-size: xx-small;">
                <span class="bg-pink-100 text-pink-800 p-2 rounded-md font-bold">Get Data</span>
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

const fetchCurrentData = async (statistic_result_value) => {
    if(statistic_result_value!==0){
        const data = {
            user_id : user_store.user.id,
            statistic_result_value
        }
        await order_store.fetchStatisticResult(data);
    }
    else{
        await order_store.showMTF(user_store.user);
    }
}


</script>

<style scoped>
.anim {
    animation: openfilter 0.5s ease-out;
}

@keyframes openfilter {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0%);
    }
}
</style>