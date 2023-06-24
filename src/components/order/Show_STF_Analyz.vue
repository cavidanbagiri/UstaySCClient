<template>
    
    <div class="grid grid-cols-10 gap-3 justify-between sticky anim bg-white" >

        <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
         hover:shadow-xl hover:cursor-pointer "  @click = "fetchCurrentData(0)"  >
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header" >Total</span>
                <span class="bg-gray-200 rounded-md text-gray-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-gray-600 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.total }}
                </div>
                <!-- <span class="bg-gray-100 rounded-md text-black-800 p-2 analyz_get_data" >Get Data</span> -->
                <!-- <Doughnut 
                id="my-chart-id"
                :options="chartOptions"
                :data="chartData"
                /> -->
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
         hover:shadow-xl hover:cursor-pointer " @click = "fetchCurrentData(1)" >
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

        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-md 
        hover:shadow-xl hover:cursor-pointer " @click="fetchCurrentData(2)" >
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header" >Process</span>
                <span class="bg-blue-200 rounded-md text-blue-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-blue-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.processing }}
                </div>
            </div>
        </div>

        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
         shadow-md hover:shadow-xl hover:cursor-pointer "  @click="fetchCurrentData(3)"  >
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header" >Received</span>
                <span class="bg-green-200 rounded-md text-green-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-green-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ statistic_result.received }}
                </div>
            </div>
        </div>

        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
         shadow-md hover:shadow-xl hover:cursor-pointer "  @click="fetchCurrentData(4)"  >
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header" >Provide</span>
                <span class="bg-pink-200 rounded-md text-pink-800 p-2 analyz_get_data" >Get Data</span>
            </div>
            <div class="flex items-center ">
                <div class="rounded-full flex border-8 border-pink-500 w-16 h-16  items-center justify-center analyz_show_data">
                    0
                </div>
            </div>
        </div>
        

    </div>

</template>

<script setup>

import { onMounted, watchEffect, ref, reactive } from 'vue';

import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'


import OrderStore from '../../store/order_store';
import UserStore from '../../store/user_store';


const chartData= {
    labels: [ 'January', 'February', 'March' ],
    datasets: [ {
        backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
        data: [40, 20, 12]
    } ]
}
const chartOptions= {
    responsive: true
}

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
    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
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