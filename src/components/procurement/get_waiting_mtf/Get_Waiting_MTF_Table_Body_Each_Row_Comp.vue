
<template>

    <tr 
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <th class="px-2 py-2 font-mono font-bold text-center">
            {{ prop?.index + 1  }}
        </th>
        <th class="px-2 py-2 font-mono font-thin border text-center">
            <span class="bg-orange-500 text-white p-1 rounded-full font-bold">{{ prop?.each_item?.mtf_num }}</span>
        </th>
        <th class="px-2 py-2 font-mono font-thin border  text-center">
            <span>{{ prop?.each_item?.created_at }}</span>
        </th>
        <th class="px-2 py-2 font-mono text-center border text-red-500 font-bold">
            {{ prop?.each_item?.cond }}
        </th>
        <th class="px-2 py-2 font-mono font-thin text-center border">
            {{ prop?.each_item?.material_status }}
        </th>
        <th class="px-2 py-2 font-mono font-thin border">
            {{ prop?.each_item?.material_type }}
        </th>
        <th class="px-2 py-2 font-mono font-thin border">
            {{ prop?.each_item?.material_name }}
        </th>
        <th class="px-2 py-2 font-mono font-thin border text-center">
            {{ prop?.each_item?.count }}
        </th>
        <th class="px-2 py-2 font-mono font-thin border text-center">
            {{ prop?.each_item?.unit }}
        </th>
        <th class="px-2 py-2 font-mono font-thin  border">
            {{ prop?.each_item?.username }}
        </th>
        <th class="px-2 py-2 font-mono font-thin text-center border">
            <div class="w-96">{{ prop?.each_item?.comment }}</div>
        </th>
    </tr>

</template>

<script setup>

import { ref } from 'vue';

// Get Each Item from parent
const prop = defineProps(['each_item','index']);

// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked','removeChecked']);

const checked = ref(false);

const checkboxCond = () => checked.value === true ? emit('addChecked',prop?.each_item?.id) : emit('removeChecked', prop?.each_item?.id);



</script>

<style lang="scss" scoped></style>
