<template>
    <tbody>
        <tr v-for="(i, index) in order_store.GETFILTEREDORDERSDATA"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-1 p-4 py-2 ">
                <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <th class="px-2 py-2 font-mono font-bold text-center">
                {{ index + 1 }}
            </th>
            <th class="px-2 py-2 font-mono font-thin border text-center">
                <span class="bg-orange-50 text-orange-400 p-1 rounded-full font-bold">{{ i.stf_num }}</span>
            </th>
            <th class="px-2 py-2 font-mono font-thin border  text-center">
                <span>{{ i.created_at }}</span>
            </th>
            <th class="px-2 py-2 font-mono font-thin text-center border">
                {{ i.situation }}
            </th>
            <th class="px-2 py-2 font-mono font-thin text-center border">
                {{ i.material_status }} 
            </th>
            <th class="px-2 py-2 font-mono font-thin border">
                {{ i.material_type }}
            </th>
            <th class="px-2 py-2 font-mono font-thin border">
                {{ i.material_name }}
            </th>
            <th class="px-2 py-2 font-mono font-thin border text-center">
                {{ i.count }}
            </th>
            <th class="px-2 py-2 font-mono font-thin border text-center">
                {{ i.unit }}
            </th>
            <th class="px-2 py-2 font-mono font-thin text-center border">
                {{ i.username }}
            </th>
            <th class="px-2 py-2 font-mono font-thin text-start border">
                {{ i?.field_name }}
            </th>
            <th class="px-2 py-2 font-mono font-thin text-center border">
                <div class="w-96">{{ i.comment }}</div>
            </th>
        </tr>
    </tbody>
</template>

<script setup>

import OrderStore from '../../../store/order_store';
const order_store = OrderStore();




</script>

<style lang="scss" scoped></style>