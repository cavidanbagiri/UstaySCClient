

<template>
    <div class="flex flex-col mtf-anim" style="font-size: x-small;letter-spacing: 1px;" v-font-family>
        <!-- Filter Section -->
        <div class="flex flex-col" v-if="show_filters">
            <div class="flex flex-row items-center justify-between">
                <!-- Common Filter Keys -->
                <div class="flex flex-row start">
                    <!-- Date Order -->
                    <div class="flex flex-col my-1 mr-3">
                        <span class=" m-1">Date Order</span>
                        <select class="outline-none border font-sans rounded-lg  h-full p-1  border-gray-300"
                            v-model="date_order">
                            <option value="Descending">Descending</option>
                            <option>Ascending</option>
                        </select>
                    </div>
                    <!-- Search With Date -->
                    <div class="flex flex-col m-1">
                        <span class=" m-1">Search Date</span>
                        <input class="outline-none border rounded-md border-gray-300  p-2" type="date" name="" id=""
                            placeholder="Date" v-model="date" />
                    </div>
                    <!-- Search With MTF -->
                    <div class="flex flex-col m-1">
                        <span class=" m-1">Search MTF</span>
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
                                class="outline-none block w-full p-2 pl-10  text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="MTF..." v-model="stf_search">

                        </div>
                    </div>
                    <!-- Search With Order Name -->
                    <div class="flex flex-col m-1">
                        <span class=" m-1">Search Order</span>
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
                                class="outline-none block w-full p-2 pl-10  text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Orderer..." v-model="ordered_search">

                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-end">
                    <!-- Search With Material Name -->
                    <div class="flex flex-col m-1">
                        <span class=" m-1">Search Type</span>
                        <label for="search" class="mb-2 text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative  w-96">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-96">
                                <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="search"
                                class="outline-none block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search" v-model='name_search'>
                        </div>
                    </div>
                    <!-- Table Specification -->
                    <div class="flex m-1 items-end text-gray-500 cursor-pointer relative">
                        <button class="p-2 hover:bg-gray-300 rounded-md" @click="show_table_spec = !show_table_spec">
                            <i class="fa-solid fa-gear fa-2xl"></i>
                        </button>
                        <Show_STF_Table_Spec v-if="show_table_spec" />
                    </div>
                    <!-- Table Specification -->
                    <div class="flex m-1 items-end text-gray-500 cursor-pointer relative">
                        <button class="p-2 hover:bg-gray-300 rounded-md">
                            <i class="fa-solid fa-chart-line fa-2xl"></i>
                        </button>
                        <!-- <Show_STF_Table_Spec v-if="show_table_spec" /> -->
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';

import Show_STF_Table_Spec from './Show_STF_Table_Spec.vue';
import ProcurementStore from '../../../../store/procurement_store';
const procurement_store = ProcurementStore();

// Order For Date
const date_order = ref('Descending');

// Expand Table Section
const show_table_spec = ref(false);

// Filter For Date
const date = ref('');

// MTF Search
const stf_search = ref('');

// Ordered Search
const ordered_search = ref('');

// Search Material Name
const name_search = ref('');

watchEffect(() => {
    procurement_store.filtered_stf = procurement_store.all_stf;

    // Date And Time Order
    if (date_order.value === 'Ascending') {
        if (procurement_store.all_stf) {
            procurement_store.filtered_stf.sort((a, b) => Date.parse(new Date(a.created_at)) - Date.parse(new Date(b.created_at)));
        }
    }
    else {
        if (procurement_store.all_stf) {
            procurement_store.filtered_stf.sort((a, b) => Date.parse(new Date(a.created_at)) - Date.parse(new Date(b.created_at)));
            procurement_store.filtered_stf.reverse();
        }
    }

    // Filter And Find By Date
    if (date.value !== '') {
        if (procurement_store.all_stf) {
            procurement_store.filtered_stf = [];
            for (const i of procurement_store.all_stf) {
                if (i['created_at'] === date.value) {
                    procurement_store.filtered_stf.push(i);
                }
            }
        }
    }

    // STF No Search
    if (stf_search.value !== '') {
        if (procurement_store.all_stf) {
            procurement_store.filtered_stf = [];
            for (const i of procurement_store.all_stf) {
                if (i['stf_num'].includes(stf_search.value)) {
                    procurement_store.filtered_stf.push(i);
                }
            }
        }
    }

    // Ordered Name Search
    if (ordered_search.value !== '') {
        if (procurement_store.all_stf) {
            procurement_store.filtered_stf = [];
            for (const i of procurement_store.all_stf) {
                if (i['username'].includes(ordered_search.value)) {
                    procurement_store.filtered_stf.push(i);
                }
            }
        }
    }

    if (name_search.value !== '') {
        if (procurement_store.all_stf) {
            procurement_store.filtered_stf = [];
            for (const i of procurement_store.all_stf) {
                if (i['material_name'].includes(name_search.value)) {
                    procurement_store.filtered_stf.push(i);
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