<template>
    <thead class="text-xs text-gray-800 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 border ">
        <tr>
            <th scope="col-4" class="py-2 px-4">
                <div class="flex flex-col items-center">
                    <span>All</span>
                    <input id="checkbox-all-search" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th class="px-2 py-1 font-medium font-mono text-center">
                <div class="flex flex-col">
                    S/S
                    <input class="rounded-lg border-none outline-0 p-1 w-10" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border">
                <div class="flex flex-col">
                    MTF NO
                    <input class="rounded-lg border-none outline-0 p-1" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border">
                <div class="flex flex-col">
                    MTF DATE
                    <input class="rounded-lg border-none outline-0 p-1" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border">
                <div class="w-24  flex flex-col">
                    Material Type
                    <select class="border outline-none font-sans rounded-lg w-full h-full p-2 text-xs" v-model="material_type">
                        <option>All</option>
                        <option>Project</option>
                        <option>Consumables</option>
                        <option>Fixture</option>
                    </select>
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border">
                <div class="w-96 flex flex-col">
                    Order name
                    <input class="rounded-lg border-none outline-0 p-1" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border">
                <div class="flex flex-col">
                    Count
                    <input class="rounded-lg border-none outline-0 p-1 w-16" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border">
                <div class="flex flex-col">
                    Unit
                    <input class="rounded-lg border-none outline-0 p-1 w-16" type="text">
                </div>
            </th>

            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border">
                <div class="flex flex-col">
                    Order
                    <input class="rounded-lg border-none outline-0 p-1" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1  font-mono font-medium text-center border">
                Comment
            </th>

        </tr>
    </thead>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import OrderStore from '../../../store/order_store';
const order_store = OrderStore();

const material_type = ref();

watchEffect(()=>{
    if(material_type.value === undefined || material_type.value === 'Type' || material_type.value === 'All'){
        order_store.filtered_orders = order_store.orders;
    }
    else{

        if(order_store.GETORDERSDATA){
            order_store.filtered_orders = [];
            for(const i of order_store.GETORDERSDATA){
                if(i['material_type'] ===  material_type.value ){
                    order_store.filtered_orders.push(i);
                }
            }
        }
    }
})

</script>

<style lang="scss" scoped></style>