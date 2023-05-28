<template>
    <tbody v-font-family class="text-gray-500" 
    style="letter-spacing: 0.3px;">
        <tr v-for="(i, index) in order_store.GETFILTEREDORDERSDATA"
            class="bg-white border-b  hover:bg-gray-100 ">
            <td class="w-1 p-4 py-2 ">
                <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <th class="px-2 py-2 font-medium text-center">
                {{ index + 1 }}
            </th>
            <th class="px-2 font-medium text-center border-y ">
                <div>
                    <span class="bg-orange-100 text-orange-500 py-1 px-2 rounded-xl"> {{ i.stf_num }}</span>
                </div>
            </th>
            <th class="px-2 py-2 font-medium  text-center border-y">
                <p>{{ i.created_at }}</p>
            </th>
            <th class="font-medium text-start border-y px-2 ">
                <div v-if="i.situation==='Waiting'" >
                    <span class=" bg-red-100 w-full text-red-500 py-1 px-2 rounded-md">
                        &#9679 {{ i.situation }} 
                    </span>
                </div>
                <div v-else-if="i.situation==='Processing'" >
                    <span class="bg-blue-100 w-w-full text-blue-500 py-1 px-2 rounded-md">
                        &#9679 {{ i.situation }} 
                    </span>
                </div>
                <div v-else-if="i.situation==='Received'" >
                    <span class="bg-green-100 w-w-full text-green-500 py-1 px-2 rounded-md">
                        &#9679 {{ i.situation }} 
                    </span>
                </div>
            </th>
            <th class="px-2 py-2 font-medium  border-y">
                {{ i.material_type }}
            </th>
            <th class="px-2 py-2  font-medium border-y">
                {{ i.material_name }}
            </th>
            <th class="px-2 py-2  font-medium text-start border-y">
                {{ i.count }}
            </th>
            <th class="px-2 py-2  font-medium text-center border-y">
                {{ i.unit }}
            </th>
            <th class="px-2 py-2 font-medium  text-start border-y">
                {{ i?.field_name }}
            </th>
        </tr>
    </tbody>
</template>

<script setup>

import OrderStore from '../../../store/order_store';
const order_store = OrderStore();




</script>

<style lang="scss" scoped></style>