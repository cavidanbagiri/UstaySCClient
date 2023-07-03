<template>
    <!-- Filter Section -->
    <div class="flex flex-col mtf-anim" style="font-size: x-small;letter-spacing: 1px;" v-font-family>
        <!-- Common Filters Section -->
        <div class="flex flex-row items-center justify-between">
            <!-- Common Filter Keys -->
            <div class="flex flex-row start">
                <!-- Date Order -->
                <div class="flex flex-col my-1 mr-3">
                    <span class=" m-1">Date Order</span>
                    <select class="border outline-none font-sans rounded-lg  h-full p-1  border-gray-300"
                        v-model="date_order">
                        <option value="Descending">Descendig</option>
                        <option>Ascending</option>
                    </select>
                </div>
                <!-- Search With Date -->
                <div class="flex flex-col m-1">
                    <span class=" m-1">Search Date</span>
                    <input class="border outline-none rounded-md border-gray-300  p-2" type="date" name="" id=""
                        placeholder="Date" v-model="date" />
                </div>
                <!-- Search With Material Type-->
                <div class="flex flex-col m-1">
                    <span class=" m-1">Search Type</span>
                    <select class="border outline-none font-sans rounded-lg  h-full p-1  border-gray-300"
                        v-model="material_type">
                        <option>All</option>
                        <option>Project</option>
                        <option>Consumables</option>
                        <option>Fixture</option>
                    </select>
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
                            class="block w-full p-2 pl-10  text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="MTF..." v-model="mtf_search">

                    </div>
                </div>
            </div>

            <!-- Search With Material Name -->
            <div class="flex flex-row justify-end">
                <!-- Search MTF By Material Name -->
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
                            class="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search" v-model='name_search'>
                    </div>
                </div>
                <!-- Table Specification -->
                <div class="flex m-1 items-end text-gray-500 cursor-pointer relative">
                    <button class="p-2 hover:bg-gray-300 rounded-md" @click="show_table_spec = !show_table_spec">
                        <i class="fa-solid fa-gear fa-2xl"></i>
                    </button>
                    <table-expand :table_headers="warehouse_store.processing_sm_headers" v-if="show_table_spec" />
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
</template>

<script setup>
import { ref, watchEffect } from 'vue';


import WarehouseStore from '../../../../store/warehouse_store';
const warehouse_store = WarehouseStore();

// Expand Table Section
const show_table_spec = ref(false);

const material_type = ref('All');

const date = ref('');

const date_order = ref('Descending');

const mtf_search = ref('');

const name_search = ref('');

watchEffect(() => {
    // Before Filter Always Equal from 0
    warehouse_store.filtered_orders = warehouse_store.waiting_sms;

    // Sort For Date to Ascending or Descending Time
    if (date_order.value === 'Ascending') {
        if (warehouse_store.GETWAITINGSMS) {
            warehouse_store.filtered_orders.sort((a, b) => Date.parse(new Date(a.created_at)) - Date.parse(new Date(b.created_at)));
        }
    }
    else {
        if (warehouse_store.GETWAITINGSMS) {
            warehouse_store.filtered_orders.sort((a, b) => Date.parse(new Date(a.created_at)) - Date.parse(new Date(b.created_at)));
            warehouse_store.filtered_orders.reverse();
        }
    }
    //Search MTF
    if (mtf_search.value !== '') {
        if (warehouse_store.GETWAITINGSMS) {
            warehouse_store.filtered_orders = [];
            for (const i of warehouse_store.GETWAITINGSMS) {
                if (i['mtf_num'].includes(mtf_search.value)) {
                    warehouse_store.filtered_orders.push(i);
                    console.log('enter');
                }
            }
        }
    }
    //Search Name
    if (name_search.value !== '') {
        if (warehouse_store.GETWAITINGSMS) {
            warehouse_store.filtered_orders = [];
            for (const i of warehouse_store.GETWAITINGSMS) {
                if (i['material_name'].includes(name_search.value)) {
                    warehouse_store.filtered_orders.push(i);
                    console.log('enter');
                }
            }
        }
    }
    // Filter And Find By Date
    if (date.value !== '') {
        if (warehouse_store.GETWAITINGSMS) {
            warehouse_store.filtered_orders = [];
            for (const i of warehouse_store.GETWAITINGSMS) {
                if (i['created_at'] === date.value) {
                    warehouse_store.filtered_orders.push(i);
                }
            }
        }
    }
    // Filter With Material Type
    if (material_type.value === 'Type' || material_type.value === 'All') {

    }
    else {
        if (warehouse_store.GETWAITINGSMS) {
            warehouse_store.filtered_orders = [];
            for (const i of warehouse_store.GETWAITINGSMS) {
                if (i['material_type'] === material_type.value) {
                    warehouse_store.filtered_orders.push(i);
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
