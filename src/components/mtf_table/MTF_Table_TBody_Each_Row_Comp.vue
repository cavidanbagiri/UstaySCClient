
<template>
    <!-- S/S -->
    <th scope="row" class="w-8 font-mono font-thin text-gray-900 whitespace-nowrap dark:text-white text-center"
        style="font-size: smaller;">
        <div class="flex justify-between items-center px-1">
            <span>{{ prop?.id }}</span>
            <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
        </div>
    </th>
    <!-- Material Type Selected -->
    <th scope="row" class="p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white"
        style="font-size: smaller;">
        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Material Type..."> -->
        <select class="border outline-none font-sans rounded-lg w-full h-full p-2" v-model="prop.each.selected_type">
            <option disabled value="">Select Type</option>
            <option>Project</option>
            <option>Consumables</option>
            <option>Fixture</option>
        </select>
    </th>
    <!-- Material Name -->
    <td class="p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white" style="font-size: smaller;">
        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Material Name..."
            v-model=prop.each.material_name>
    </td>
    <!-- Material Count -->
    <td class="p-1 border" style="font-size: smaller;">
        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Count..."
            v-model=prop.each.material_count>
    </td>
    <!-- Material Unit -->
    <td class="p-1 border" style="font-size: smaller;">
        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2 " type="text" placeholder="Unit..."> -->
        <select class="border outline-none font-sans rounded-lg w-full h-full p-2" v-model="prop.each.selected_unit">
            <option disabled value="">Unit</option>
            <option>Adet</option>
            <option>M2</option>
            <option>M3</option>
            <option>Ton</option>
            <option>Kg</option>
        </select>
    </td>
    <!-- Area Field -->
    <td class="p-1 border" style="font-size: smaller;">
        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Field..."> -->
        <select class="border outline-none font-sans rounded-lg w-full h-full p-2" v-model="prop.each.selected_field">
            <option disabled value="">Field</option>
            <option>PR-2</option>
            <option>Derjisnkoe</option>
            <option>PR-6</option>
        </select>
    </td>
    <!-- Material Status -->
    <td class="p-1 border" style="font-size: smaller;">
        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Status..."> -->
        <select class="border outline-none font-sans rounded-lg w-full h-full p-2" v-model="prop.each.selected_status">
            <option disabled value="">Status</option>
            <option>
                <span>
                    <i class="fa-solid fa-gem fa-lg" style="color:red"></i> Urgent
                </span>
            </option>
            <option>
                <span>
                    <i class="fa-solid fa-gem fa-lg" style="color:red"></i> Normally
                </span>
            </option>
        </select>
    </td>
    <!-- Comment Section -->
    <td class="p-1 border" style="font-size: smaller;">
        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Comment..."
            v-model=prop.each.material_comment>
    </td>

</template>

<script setup>

import {ref} from 'vue';

const prop = defineProps(['each', 'id']);


</script>

<style lang="">
    
</style>