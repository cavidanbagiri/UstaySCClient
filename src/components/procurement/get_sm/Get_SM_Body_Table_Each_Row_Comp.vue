
<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500" 
    style="letter-spacing: 0.3px; font-size: xx-small;" v-font-family>
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <td class="px-2 py-2  font-bold text-center">
            {{ prop?.index + 1 }}
        </td>
        <td class="px-2 text-start border-y ">
            <div class=" bg-orange-100 text-orange-500 py-1 px-2 rounded-xl ">
                <span>{{ prop?.each_item?.stf_num }}</span>
            </div>
        </td>
        <td class="px-2 py-2  font-medium border  text-center">
            <span>{{ prop?.each_item?.created_at }}</span>
        </td>
        <td class="px-2 text-start border-y ">
            <div class=" bg-red-100 text-red-500 py-1 px-2 rounded-xl ">
                {{ prop?.each_item?.sm_num }}
            </div>
        </td>
        <td class="px-2">
            <div v-if="prop?.each_item?.situation==='Waiting'" >
                    <span class=" bg-red-100 w-full text-red-500 py-1 px-2 rounded-md">
                        &#9679 {{ prop?.each_item?.situation }} 
                    </span>
                </div>
                <div v-else-if="prop?.each_item?.situation==='Processing'" >
                    <span class="bg-blue-100 w-w-full text-blue-500 py-1 px-2 rounded-md">
                        &#9679 {{ prop?.each_item?.situation }} 
                    </span>
                </div>
                <div v-else-if="prop?.each_item?.situation==='Received'" >
                    <span class="bg-green-100 w-w-full text-green-500 py-1 px-2 rounded-md">
                        &#9679 {{ prop?.each_item?.situation }} 
                    </span>
                </div>
        </td>
        <td class="px-2 py-2  font-medium border">
            {{ prop?.each_item?.material_name }}
        </td>
        <td class="px-2 py-2  font-medium border text-start">
            {{ prop?.each_item?.count }}
        </td>
        <td class="px-2 py-2  font-medium border text-start">
            {{ prop?.each_item?.unit }}
        </td>
        <td class="px-2 py-2  font-medium border text-start">
            {{ prop?.each_item?.vendor_name }}
        </td>
        <td class="px-2 py-2  font-medium  border">
            {{ prop?.each_item?.orderer }}
        </td>
        <td class="px-2 py-2  font-medium  border">
            {{ prop?.each_item?.username }}
        </td>
    </tr>
</template>

<script setup>

import { ref } from 'vue';

// Get Each Item from parent
const prop = defineProps(['each_item', 'index']);

// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked', 'removeChecked']);

const checked = ref(false);

const checkboxCond = () => checked.value === true ? emit('addChecked', prop?.each_item) : emit('removeChecked', prop?.each_item?.id);



</script>

<style lang="scss" scoped></style>