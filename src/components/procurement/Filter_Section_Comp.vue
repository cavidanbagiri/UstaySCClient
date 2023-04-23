

<template>
    <div class="flex flex-col">
        <!-- Show Filter Section -->
        <div class="flex flex-row justify-start items-center">
            <span class="text-sm font-mono ">Filters</span>
            <button @click="show_filters = !show_filters" class="ml-3 text-xs "><i
                    class="fa-solid fa-filter fa-md"></i></button>
        </div>
        <!-- <pre>{{ procurement_store.waiting_orders_filter }}</pre> -->
        <!-- Filter Section -->
        <div class="flex flex-col mtf-anim" v-if="show_filters">
            <div class="flex flex-row items-center justify-between">
                <!-- Common Filter Keys -->
                <div class="flex flex-row start">
                    <!-- Date Order -->
                    <div class="flex flex-col my-3 mr-3">
                        <span class="text-xs m-1">Date Order</span>
                        <select class="border outline-none font-sans rounded-lg  h-full p-1 text-xs border-gray-300"
                            v-model="date_order">
                            <option value="Descending">Descending</option>
                            <option>Ascending</option>
                        </select>
                    </div>
                    <!-- Search With Date -->
                    <div class="flex flex-col m-3">
                        <span class="text-xs m-1">Search Date</span>
                        <input class="border outline-none rounded-md border-gray-300 text-xs p-2" type="date" name="" id=""
                            placeholder="Date" v-model="date" />
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
                    <!-- Search With Order Name -->
                    <div class="flex flex-col m-3">
                        <span class="text-xs m-1">Search Order</span>
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
                                placeholder="Orderer..." v-model="ordered_search">

                        </div>
                    </div>
                </div>
                <!-- Search With Material Name -->
                <div class="flex flex-col m-3">
                    <span class="text-xs m-1">Search Type</span>
                    <label for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
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
    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';

import ProcurementStore from '../../store/procurement_store';
const procurement_store = ProcurementStore();

// Order For Date
const date_order = ref('Descending');

// Filter For Date
const date = ref('');

// MTF Search
const mtf_search = ref('');

// Ordered Search
const ordered_search = ref('');

// Search Material Name
const name_search = ref('');

watchEffect(() => {
    procurement_store.waiting_orders_filter = procurement_store.waiting_orders;

    // Date And Time Order
    if (date_order.value === 'Ascending') {
        if (procurement_store.GETWAITINGORDERS) {
            procurement_store.waiting_orders_filter.sort((a, b) => Date.parse(new Date(a.created_at)) - Date.parse(new Date(b.created_at)));
        }
    }
    else {
        if (procurement_store.GETWAITINGORDERS) {
            procurement_store.waiting_orders_filter.sort((a, b) => Date.parse(new Date(a.created_at)) - Date.parse(new Date(b.created_at)));
            procurement_store.waiting_orders_filter.reverse();
        }
    }

    // Filter And Find By Date
    if (date.value !== '') {
        if (procurement_store.GETWAITINGORDERS) {
            procurement_store.waiting_orders_filter = [];
            for (const i of procurement_store.waiting_orders) {
                if (i['created_at'] === date.value) {
                    procurement_store.waiting_orders_filter.push(i);
                }
            }
        }
    }

    // MTF No Search
    if (mtf_search.value !== '') {
        if (procurement_store.GETWAITINGORDERS) {
            procurement_store.waiting_orders_filter = [];
            for (const i of procurement_store.GETWAITINGORDERS) {
                if (i['mtf_num'].includes(mtf_search.value)) {
                    procurement_store.waiting_orders_filter.push(i);
                }
            }
        }
    }

    // Ordered Name Search
    if (ordered_search.value !== '') {
        if (procurement_store.GETWAITINGORDERS) {
            procurement_store.waiting_orders_filter = [];
            for (const i of procurement_store.GETWAITINGORDERS) {
                if (i['username'].includes(ordered_search.value)) {
                    procurement_store.waiting_orders_filter.push(i);
                }
            }
        }
    }

    if (name_search.value !== '') {
        if (procurement_store.GETWAITINGORDERS) {
            procurement_store.waiting_orders_filter = [];
            for (const i of procurement_store.GETWAITINGORDERS) {
                if (i['material_name'].includes(name_search.value)) {
                    procurement_store.waiting_orders_filter.push(i);
                }
            }
        }
    }


})




// Show and Hide Filter Section
const show_filters = ref(true);


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