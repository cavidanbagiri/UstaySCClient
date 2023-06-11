
<template>
    <tr :class="checked ? 'text-white  bg-blue-500 hover:bg-blue-500 ' : 'hover:bg-gray-100' " 
    class="border-b dark:bg-gray-800 dark:border-gray-700 "
    style=" font-size: xx-small;" v-font-family>
        <td class="w-1 p-4 py-2 ">
            <!-- <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div> -->

            <div class="flex items-center">
                    <label class="relative flex cursor-pointer items-center rounded-sm p-1" for="selected_row"
                        data-ripple-dark="true">
                        <input :id="prop.each_item.id" type="checkbox" v-model="checked" @change="checkboxCond"
                            class=" before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border-2 border-blue-gray-200 transition-all before:absolute 
                            before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500
                            before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10" />
                        <div
                            class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </label>
                </div>

        </td>
        <th class="px-2 py-2  font-bold text-center">
            {{ prop?.index + 1 }}
        </th>
        <td class="px-2 font-medium text-center border-y ">
            <div>
                <span class=" bg-orange-100 text-orange-500 py-1 px-2 rounded-xl ">{{ prop?.each_item?.stf_num }}</span>
            </div>
        </td>

        <th class="px-2 py-2 font-medium border-y  text-center">
            <span>{{ prop?.each_item?.created_at }}</span>
        </th>
        <th class="px-2 py-2 font-medium text-start border-y text-red-500 ">
            <div v-if="prop?.each_item?.situation === 'Waiting'">
                <span class=" bg-red-100 w-full text-red-500 py-1 px-2 rounded-md">
                    &#9679 {{ prop?.each_item?.situation }}
                </span>
            </div>
            <div v-else-if="prop?.each_item?.situation === 'Processing'">
                <span class="bg-blue-100 w-w-full text-blue-500 py-1 px-2 rounded-md">
                    &#9679 {{ prop?.each_item?.situation }}
                </span>
            </div>
            <div v-else-if="prop?.each_item?.situation === 'Received'">
                <span class="bg-green-100 w-w-full text-green-500 py-1 px-2 rounded-md">
                    &#9679 {{ prop?.each_item?.situation }}
                </span>
            </div>

        </th>
        <th class="px-2 py-2 font-medium  border-y">
            {{ prop?.each_item?.material_name }}
        </th>
        <th class="px-2 py-2 font-medium  border-y text-center">
            {{ prop?.each_item?.count }}
        </th>
        <th class="px-2 py-2 font-medium  border-y text-center">
            {{ prop?.each_item?.unit }}
        </th>
        <th class="px-2 py-2 font-medium  border-y">
            {{ prop?.each_item?.username }}
        </th>
    </tr>
</template>

<script setup>

import { ref } from 'vue';

// Get Each Item from parent
const prop = defineProps(['each_item', 'index', 'checked_style']);

// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked', 'removeChecked']);

const checked = ref(false);

// const checked_style = ref(false);

const checkboxCond = () => {
    // checked.value === true ? emit('addChecked', prop?.each_item) : emit('removeChecked', prop?.each_item?.id);
    if(checked.value === true) {
        // checked_style.value = true
        emit('addChecked', prop?.each_item)
    }
     else{
        // checked_style.value = false
        emit('removeChecked', prop?.each_item?.id);
    } 
}

</script>

<style lang="scss" scoped></style>
