<template>
    <div class="grid grid-cols-10 gap-3 justify-between sticky anim bg-white">

        <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
            hover:shadow-xl hover:cursor-pointer " @click="fetchCurrentData(0)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Total</span>
                <span class="bg-gray-200 rounded-md text-gray-800 p-2 analyz_get_data">Get Data</span>
            </div>
            <div class="flex items-center ">
                <div
                    class="rounded-full flex border-8 border-gray-600 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ prop?.statistic_result.total }}
                </div>
            </div>
        </div>
        <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
            hover:shadow-xl hover:cursor-pointer " @click="fetchCurrentData(1)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Waiting</span>
                <span class="bg-red-200 rounded-md text-red-800 p-2 analyz_get_data">Get Data</span>
            </div>
            <div class="flex items-center ">
                <div
                    class="rounded-full flex border-8 border-red-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ prop?.statistic_result.waiting }}
                </div>
            </div>
        </div>

        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-md 
            hover:shadow-xl hover:cursor-pointer " @click="fetchCurrentData(2)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Process</span>
                <span class="bg-blue-200 rounded-md text-blue-800 p-2 analyz_get_data">Get Data</span>
            </div>
            <div class="flex items-center ">
                <div
                    class="rounded-full flex border-8 border-blue-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ prop?.statistic_result.processing }}
                </div>
            </div>
        </div>

        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
            shadow-md hover:shadow-xl hover:cursor-pointer " @click="fetchCurrentData(3)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Received</span>
                <span class="bg-green-200 rounded-md text-green-800 p-2 analyz_get_data">Get Data</span>
            </div>
            <div class="flex items-center ">
                <div
                    class="rounded-full flex border-8 border-green-500 w-16 h-16  items-center justify-center analyz_show_data">
                    {{ prop?.statistic_result.received }}
                </div>
            </div>
        </div>

        <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
            shadow-md hover:shadow-xl hover:cursor-pointer " @click="fetchCurrentData(4)">
            <div class="flex flex-col justify-between">
                <span class="text-gray-600 analyz_header">Provide</span>
                <span class="bg-pink-200 rounded-md text-pink-800 p-2 analyz_get_data">Get Data</span>
            </div>
            <div class="flex items-center ">
                <div
                    class="rounded-full flex border-8 border-pink-500 w-16 h-16  items-center justify-center analyz_show_data">
                    0
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>

const prop = defineProps(['statistic_result']);
const emit = defineEmits(['fetchCurrentData']);

const fetchCurrentData = (situation) => {
    console.log(`emit work ${situation}`);
    emit('fetchCurrentData',situation);
}

</script>

<style lang="scss" scoped></style>