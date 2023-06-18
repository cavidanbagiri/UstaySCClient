<template>
    <thead class="text-black bg-gray-100 border sticky top-52 " v-font-family
    style="letter-spacing: 0.5px; font-size: x-small;">
        <tr class="">
            <th scope="col-4" class=" px-4">
                <div class="flex flex-col items-center">
                    <input id="checkbox-all-search" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th class="px-2 py-2 font-medium  text-center">
                <div class="flex flex-col">
                    S/S
                </div>
            </th>
            <th v-for="i in order_store.table_headers" v-show="i.value" scope="col" class="px-2 py-1 font-medium text-center border">
                
                <div v-if="i.name==='situation'" class="w-20">
                    {{ i.name }}
                </div>

                <div v-else-if="i.name==='created_at'" class="w-16">
                    {{ i.name }}
                </div>

                <div v-else-if="i.name==='material_name'" class="w-96">
                    {{ i.name }}
                </div>

                <div v-else-if="i.name==='vendor_name'" class="w-96">
                    {{ i.name }}
                </div>

                <div v-else class="flex flex-col">
                    {{ i.name }}
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