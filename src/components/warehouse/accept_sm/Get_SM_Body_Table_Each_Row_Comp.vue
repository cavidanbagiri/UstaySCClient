
<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <td class="px-2 py-2 font-medium text-center">
            {{ prop?.index + 1 }}
        </td>
        <td class="px-2 font-medium text-start border-y ">
            <div class=" bg-orange-100 text-orange-500 py-1 px-2 rounded-xl ">
                <span>{{ prop?.each_item?.stf_num }}</span>
            </div>
        </td>
        <td class="px-2 py-2 font-medium  border  text-center">
            <span>{{ prop?.each_item?.created_at }}</span>
        </td>
        <td class="px-2 font-medium text-start border-y ">
            <div class=" bg-red-100 text-red-500 py-1 px-2 rounded-xl ">
                {{ prop?.each_item?.sm_num }}
            </div>
        </td>
        <td class="px-2 font-medium text-start border-y-y ">
            <input class="border-y outline-none font-sans rounded-lg w-full h-full p-1 text-xs" type="text"
                placeholder="Count...">
        </td>
        <td class="px-2 font-medium text-start border-y-y ">
            <select class="border-y outline-none font-sans rounded-lg w-full h-full p-1 text-xs">
                <option disabled value="">Unit</option>
                <option>Adet</option>
                <option>M2</option>
                <option>M3</option>
                <option>Ton</option>
                <option>Kg</option>
            </select>
        </td>
        <td class="px-2 font-medium text-center border-y ">
            <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 ">
        </td>
        <td class="px-2 font-medium text-center border-y ">
            <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 ">
        </td>
        <td class="px-2 py-2 font-medium  border-y">
            {{ prop?.each_item?.material_name }}
        </td>
        <td class="px-2 py-2 font-medium  border-y text-start">
            {{ prop?.each_item?.count }}
        </td>
        <td class="px-2 py-2 font-medium  border-y text-center">
            {{ prop?.each_item?.unit }}
        </td>
        <td class="px-2 py-2 font-medium  border-y text-center">
            {{ prop?.each_item?.price }}
        </td>
        <td class="px-2 py-2 font-medium  border-y text-center">
            {{ prop?.each_item?.currency }}
        </td>
        <td class="px-2 py-2 font-medium  border-y text-start">
            {{ prop?.each_item?.vendor_name }}
        </td>
        <td class="px-2 py-2 font-medium   border-y">
            {{ prop?.each_item?.orderer }}
        </td>
        <td class="px-2 py-2 font-medium   border">
            {{ prop?.each_item?.username }}
        </td>
    </tr>
</template>

<script setup>

import { ref } from 'vue';

// Get Each Item from parent
const prop = defineProps(['each_item', 'index']);





</script>

<style lang="scss" scoped></style>