<template>
    <thead class="text-xs text-black bg-gray-100 dark:bg-gray-700 dark:text-gray-400 border w-full"   v-font-family
    style="letter-spacing: 0.5px;">
        <tr class="">
            <th scope="col-4" class=" px-4">
                <div class="flex flex-col items-center">
                    <input id="checkbox-all-search" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th class="px-2 py-2 font-medium  text-center">
                <div class="flex flex-col">
                    S/S
                </div>
            </th>
            <th scope="col" class="px-2 py-1  font-medium text-center border">
                <div class="flex flex-col">
                    STF NO
                </div>
            </th>
            <th scope="col" class="px-2 py-1  font-medium text-center border">
                <div class="flex flex-col">
                    STF Date
                </div>
            </th>
            <th scope="col" class="px-2 py-1  font-medium text-center border">
                <div class="flex flex-col">
                    Condition
                </div>
            </th>
            <th scope="col" class="px-2 py-1  font-medium text-center border">
                <div class="w-96 flex flex-col">
                    Material name
                </div>
            </th>
            <th scope="col" class="px-2 py-1  font-medium text-center border">
                <div class="flex flex-col">
                    Count
                </div>
            </th>
            <th scope="col" class="px-2 py-1  font-medium text-center border">
                <div class="flex flex-col">
                    Unit
                </div>
            </th>
            <th scope="col" class="px-2 py-1  font-medium text-center border">
                <div class="flex flex-col">
                    Orderer
                </div>
            </th>

        </tr>
    </thead>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import OrderStore from '../../../store/order_store';
const order_store = OrderStore();

const material_type = ref('All');

watchEffect(()=>{
    if(material_type.value === 'Type' || material_type.value === 'All'){
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