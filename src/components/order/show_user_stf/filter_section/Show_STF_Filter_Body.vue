<template>
    <!-- Filter Section -->
    <div class="flex flex-col mtf-anim " style="letter-spacing: 1px;font-size: x-small;" v-font-family >
        <!-- Common Filters Section -->
        <div class="flex flex-row items-center justify-between">
            <!-- Common Filter Keys -->
            <div class="flex flex-row start">
                <!-- Date Order -->
                <div class="flex flex-col my-1 mr-3" style="font-size: x-small;">
                    <span class="m-1">Date Order</span>
                    <select class="border outline-none font-sans rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg"
                        v-model="date_order">
                        <option value="Descending">Descendig</option>
                        <option>Ascending</option>
                    </select>
                </div>
                <!-- Search With Date -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Search Date</span>
                    <input class="border outline-none rounded-md border-blue-300 p-2 hover:border-blue-600 shadow-lg" type="date" name="" id=""
                        placeholder="Date" v-model="date" />
                </div>
                <!-- Search With Material Type-->
                <div class="flex flex-col m-1">
                    <span class="m-1">Search Type</span>
                    <select class="border outline-none font-sans rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg"
                        v-model="material_type">
                        <option>All</option>
                        <option>Project</option>
                        <option>Consumables</option>
                        <option>Fixture</option>
                    </select>
                </div>
                <!-- Search With MTF -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Search MTF</span>
                    <label for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 " fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="text" id="search"
                            class="block w-full p-2 pl-10 outline-none text-gray-900 border border-blue-300 rounded-lg  hover:border-blue-600  shadow-lg"
                            placeholder="MTF..." v-model="mtf_search">

                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-end">
                <!-- Search With Material Name -->
                <div class="flex flex-col m-1 items-center">
                    <span class="m-1">Search Type</span>
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
                            class="outline-none w-full p-2 pl-10 text-gray-900 border border-blue-300 rounded-lg hover:border-blue-600 shadow-lg"
                            placeholder="Search" v-model='name_search'>
    
                    </div>
                </div>
                <!-- Table Specification -->
                <div class="flex m-1 items-end p-2 text-gray-500 cursor-pointer relative">
                    <button @click="openTableSpec">
                        <i class="fa-solid fa-gear fa-2xl"></i>
                    </button>
                    <Show_STF_Table_Spec v-if="show_table_spec" />
                </div>
            </div>


        </div>
    </div>

</template>

<script setup>
import { ref, watchEffect } from 'vue';

import Show_STF_Table_Spec from './Show_STF_Table_Spec.vue';
import OrderStore from '../../../../store/order_store';
const order_store = OrderStore();

const material_type = ref('All');

const date = ref('');

const date_order = ref('Descending');

const mtf_search = ref('');

const name_search = ref('');

// Open And Close Table Spec
const show_table_spec = ref(false);
const openTableSpec = () => {
    show_table_spec.value = !show_table_spec.value;
}

// Table Filter RealTime
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
            order_store.filtered_orders.sort((a, b) => Date.parse(new Date(a.created_at)) - Date.parse(new Date(b.created_at)));
            order_store.filtered_orders.reverse();
        }
    }
    //Search MTF
    if (mtf_search.value !== '') {
        if (order_store.GETORDERSDATA) {
            order_store.filtered_orders = [];
            for (const i of order_store.GETORDERSDATA) {
                if (i['stf_num'].includes(mtf_search.value)) {
                    order_store.filtered_orders.push(i);
                    console.log('enter');
                }
            }
        }
    }
    //Search Name
    if (name_search.value !== '') {
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
        if (order_store.GETORDERSDATA) {
            order_store.filtered_orders = [];
            for (const i of order_store.GETORDERSDATA) {
                if (i['created_at'] === date.value) {
                    order_store.filtered_orders.push(i);
                }
            }
        }
    }
    // Filter With Material Type
    if (material_type.value === 'Type' || material_type.value === 'All') {
        
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
