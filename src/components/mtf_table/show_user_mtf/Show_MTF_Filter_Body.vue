<template>
    <!-- Filter Section -->
    <div class="flex flex-col mt-1 mtf-anim">
        <!-- Show Total MTF Length -->
        <span class="text-xs font-mono text-start font-bold">Total Document Size : {{
            order_store.orders?.length }}
        </span>
        <!-- Common Filters Section -->
        <div class="flex flex-row items-center justify-between">
            <!-- Common Filter Keys -->
            <div class="flex flex-row start">
                <!-- Date Order -->
                <div class="flex flex-col my-3 mr-3">
                    <span class="text-xs m-1">Date Order</span>
                    <select class="border outline-none font-sans rounded-lg  h-full p-1 text-xs border-gray-300"
                        v-model="date_order">
                        <option>Ascending</option>
                        <option>Descendig</option>
                    </select>
                </div>
                <!-- Search With Date -->
                <div class="flex flex-col m-3">
                    <span class="text-xs m-1">Search Date</span>
                    <input class="border outline-none rounded-md border-gray-300 text-xs p-2" type="date" name="" id=""
                        placeholder="Date" v-model="date" />
                </div>
                <!-- Search With Material Type-->
                <div class="flex flex-col m-3">
                    <span class="text-xs m-1">Search Type</span>
                    <select class="border outline-none font-sans rounded-lg  h-full p-1 text-xs border-gray-300"
                        v-model="material_type">
                        <option>All</option>
                        <option>Project</option>
                        <option>Consumables</option>
                        <option>Fixture</option>
                    </select>
                </div>
                <!-- Search With MTF -->
                <div class="flex flex-col m-3">
                    <span class="text-xs m-1">Search MTF</span>
                    <label for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="text" id="search"
                            class="block w-full p-2 pl-10 text-xs text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="MTF..." v-model="mtf_search">

                    </div>
                </div>
            </div>
            <!-- Search With Material Name -->
            <div class="flex flex-col m-3">
                <span class="text-xs m-1">Search Type</span>
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative  w-96">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-96">
                        <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" id="search"
                        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search" v-model='name_search'>

                </div>
            </div>


        </div>
    </div>

</template>

<script setup>
import { ref, watchEffect } from 'vue';


import OrderStore from '../../../store/order_store';
const order_store = OrderStore();

const material_type = ref('All');

const date = ref('');

const date_order = ref('Ascending');

const mtf_search = ref('');

const name_search = ref('');

watchEffect(() => {
    // Before Filter Always Equal from 0
    order_store.filtered_orders = order_store.orders;

    // Sort For Date to Ascending or Descending Time
    if (date_order.value === 'Ascending') {
        if (order_store.GETORDERSDATA) {
            order_store.filtered_orders.sort((a, b) => Date.parse(new Date(a.created_at)) - Date.parse(new Date(b.created_at)));
        }
    }
    else {
        if (order_store.GETORDERSDATA) {
            order_store.filtered_orders.sort((a, b) => Date.parse(new Date(a.created_at)) + Date.parse(new Date(b.created_at)));
            order_store.filtered_orders.reverse();
        }
    }
    //Search MTF
    if (date_order.value === 'Ascending') {
        if (order_store.GETORDERSDATA) {
            order_store.filtered_orders = [];
            for (const i of order_store.GETORDERSDATA) {
                if (i['mtf_num'].includes(mtf_search.value)) {
                    order_store.filtered_orders.push(i);
                    console.log('enter');
                }
            }
        }
    }
    //Search Name
    if (date_order.value === 'Ascending') {
        if (order_store.GETORDERSDATA) {
            order_store.filtered_orders = [];
            for (const i of order_store.GETORDERSDATA) {
                if (i['material_name'].includes(name_search.value)) {
                    order_store.filtered_orders.push(i);
                    console.log('enter');
                }
            }
        }
    }
    // Filter And Find By Date
    if (date.value !== '') {
        console.log('date is : ', date.value);
        if (order_store.GETORDERSDATA) {
            order_store.filtered_orders = [];
            for (const i of order_store.GETORDERSDATA) {
                if (i['created_at'] === date.value) {
                    order_store.filtered_orders.push(i);
                    console.log('enter');
                }
            }
        }
    }
    // Filter With Material Type
    if (material_type.value === 'Type' || material_type.value === 'All') {
        // order_store.filtered_orders = order_store.orders;
    }
    else {

        if (order_store.GETORDERSDATA) {
            order_store.filtered_orders = [];
            for (const i of order_store.GETORDERSDATA) {
                if (i['material_type'] === material_type.value) {
                    order_store.filtered_orders.push(i);
                }
            }
        }
    }
})



</script>

<style scoped>
.mtf-anim {
    animation: openfilter 0.5s;
}

@keyframes openfilter {
    from {
        transform: translateY(-20%);
    }

    to {
        transform: translateY(0%);
    }
}
</style>
