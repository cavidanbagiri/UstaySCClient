
<template>
    <thead class="text-black bg-gray-100 dark:bg-gray-700 dark:text-gray-400 border sticky top-52 table_header">
        <tr class="">
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
            <th v-for="i in warehouse_store.processing_sm_headers" v-show="i.value" scope="col" class="px-2 py-1 font-medium text-center border">
                
                <div v-if="i.name==='situation'" class="w-20">
                    {{ i.showname }}
                </div>

                <div v-else-if="i.name==='created_at'" class="w-16">
                    {{ i.showname }}
                </div>

                <div v-else-if="i.name==='material_name'" class="min-w-[600px]">
                    {{ i.showname }}
                </div>

                <div v-else-if="i.name==='vendor_name'" class="w-96">
                    {{ i.showname }}
                </div>

                <div v-else-if="i.name==='total' || i.name==='price' || i.name==='currency' ">
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

import WarehouseStore from '../../../store/warehouse_store';
const warehouse_store = WarehouseStore();

</script>

<style lang="scss" scoped>

</style>
