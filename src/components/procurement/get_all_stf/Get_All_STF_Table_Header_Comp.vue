<template>
    <thead class="text-black bg-gray-100 border w-full sticky top-[198px] table_header">
        <tr class="">
            <th scope="col-4" class=" px-4">
                <div class="flex flex-col items-center">
                    <i class="fa-solid fa-circle-info fa-xl text-green-500"></i>
                </div>
            </th>
            <th scope="col-4" class=" px-4">
                <div class="flex flex-col items-center">
                    <input id="checkbox-all-search" type="checkbox"
                    class="checkbox checkbox-xs checkbox-primary"        
                    >
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th class="px-2 py-2 font-medium  text-center">
                <div class="flex flex-col">
                    S/S
                </div>
            </th>
            
            <th v-for="i in procurement_store.stf_table_headers" v-show="i.value" scope="col" class="px-2 py-1 font-medium text-center border">
                
                <div v-if="i.name==='situation'" class="">
                    {{ i.showname }}
                </div>

                <div v-else-if="i.name==='created_at'" class="">
                    {{ i.showname }}
                </div>

                <div v-else-if="i.name==='material_name'" class="min-w-[600px]">
                    {{ i.showname }}
                </div>

                <div v-else-if="i.name==='vendor_name'" class="w-96">
                    {{ i.showname }}
                </div>

                <div v-else class="flex flex-col w-24">
                    {{ i.showname }}
                </div>

            </th>

        </tr>
    </thead>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();


</script>

<style lang="scss" scoped></style>