
<template>
    <tr :class="checked ? 'text-white  bg-blue-600 hover:bg-blue-500 ' : 'hover:bg-gray-100' " 
    class="border-b dark:bg-gray-800 dark:border-gray-700 "
    style=" font-size: xx-small;" v-font-family>
        <td class="w-1 p-4 py-2 ">

            <div class="flex items-center">
                    <label class="relative flex cursor-pointer items-center rounded-sm p-1" for="selected_row"
                        data-ripple-dark="true">
                        <input :id="prop.each.id" type="checkbox" v-model="checked" @change="checkboxCond"
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
        
        <th v-for="i in procurement_store.stf_table_headers" v-show="i.value" class="px-2 py-2 font-medium text-center">

<!-- STF Num Design -->
<div v-if="i.name === 'stf_num'">
    <span class="bg-orange-100 text-orange-500 py-1 px-2 rounded-xl"> {{ prop.each[i.name] }}</span>
</div>

<!-- STF Num Design -->
<div v-else-if="i.name === 'sm_num'">
    <span class="bg-green-100 text-green-500 py-1 px-2 rounded-xl"> {{ prop.each[i.name] }}</span>
</div>

<!-- Situation Design -->
<div v-else-if="i.name === 'situation'" class="">
    <div v-if="prop.each[i.name] === 'Waiting'">
        <span class=" bg-red-100 w-full text-red-500 py-1 px-2 rounded-md">
            &#9679 {{ prop.each.situation }}
        </span>
    </div>
    <div v-else-if="prop.each[i.name] === 'Processing'">
        <span class="bg-blue-100 w-w-full text-blue-500 py-1 px-2 rounded-md">
            &#9679 {{ prop.each.situation }}
        </span>
    </div>
    <div v-else-if="prop.each[i.name] === 'Received'">
        <span class="bg-green-100 w-w-full text-green-500 py-1 px-2 rounded-md">
            &#9679 {{ prop.each.situation }}
        </span>
    </div>
</div>

<div v-else-if="i.name==='material_type'" class="text-start">
    <span >{{ prop.each[i.name] }}</span>
</div>
<div v-else-if="i.name==='material_name'" class="text-start">
    <span >{{ prop.each[i.name] }}</span>
</div>
<div v-else-if="i.name==='vendor_name'" class="text-start">
    <span >{{ prop.each[i.name] }}</span>
</div>
<div v-else-if="i.name==='username'" class="text-start">
    <span >{{ prop.each[i.name] }}</span>
</div>

<!-- Others Without Design -->
<div v-else>
    <span class=""> {{ prop.each[i.name] }}</span>
</div>

</th>

    </tr>
</template>

<script setup>

import { ref, watchEffect } from 'vue';

import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();

// Get Each Item from parent
const prop = defineProps(['each', 'index', 'checked_style']);

// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked', 'removeChecked']);

const checked = ref(false);

// const checked_style = ref(false);

const checkboxCond = () => {
    if(checked.value === true) {
        emit('addChecked', prop?.each)
    }
     else{
        emit('removeChecked', prop?.each.id);
    } 
}

watchEffect(()=>{

    if(procurement_store.after_created){
        checked.value = false;
    }

})

</script>

<style lang="scss" scoped></style>
