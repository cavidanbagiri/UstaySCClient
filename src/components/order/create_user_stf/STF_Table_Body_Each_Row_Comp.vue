
<template>
    <!-- S/S -->
    <td scope="row" class="w-8 font-mono font-thin text-gray-900 whitespace-nowrap dark:text-white text-center"
        style="font-size: xx-small;">
        <div class="flex justify-between items-center px-1">
            <span>{{ each.each_id }}</span>
            <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
        </div>
    </td>
    <!-- Material Type Selected -->
    <td scope="row" class="p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white" style=";">
        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Material Type..."> -->
        <select class="border border-red-500 outline-none font-sans rounded-lg w-full h-full p-2 "
            v-model="each.material_type">
            <option disabled value="">Type</option>
            <option>Project</option>
            <option>Consumables</option>
            <option>Fixture</option>
        </select>
    </td>
    <!-- Material Name -->
    <td class="p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white">
        <input class="border border-red-500 outline-none font-sans rounded-lg w-full h-full p-2 " type="text"
            placeholder="Material Name..." v-model=each.material_name>
    </td>
    <!-- Material Link -->
    <td class="p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white">
        <input class="border outline-none font-sans rounded-lg w-full h-full p-2 " type="text"
            placeholder="Material Link..." v-model=each.link>
    </td>
    <!-- Material Count -->
    <td class="p-1 border">
        <input class="border border-red-500 outline-none font-sans rounded-lg w-full h-full p-2 " type="number" min="0.001"
            placeholder="Count..." v-model=each.count>
    </td>
    <!-- Material Unit -->
    <td class="p-1 border" style=";">
        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2 " type="text" placeholder="Unit..."> -->
        <select class="border border-red-500 outline-none font-sans rounded-lg w-full h-full p-2 " v-model="each.unit">
            <option disabled value="">Unit</option>
            <option>Adet</option>
            <option>M2</option>
            <option>M3</option>
            <option>Ton</option>
            <option>Kg</option>
        </select>
    </td>
    <!-- Area Field -->
    <td class="p-1 border">
        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Field..."> -->
        <select class="border border-red-500 outline-none font-sans rounded-lg w-full h-full p-2 "
            v-model="each.FieldsModelId">
            <option disabled value="">Field</option>
            <option v-for="i in order_store.GETFIELDSNAME" :value="i.id">{{ i.field_name }}</option>
        </select>
    </td>
    <!-- Material Status -->
    <td class="p-1 border" style=";">
        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Status..."> -->
        <select class="border outline-none font-sans rounded-lg w-full h-full p-2 " v-model="each.status">
            <option>
                <span>
                    <i class="fa-solid fa-gem fa-lg" style="color:red"></i> Not Specified
                </span>
            </option>
            <option>
                <span>
                    <i class="fa-solid fa-gem fa-lg" style="color:red"></i> Urgent
                </span>
            </option>
        </select>
    </td>
    <!-- Comment Section -->
    <td class="p-1 border" style=";">
        <input class="border outline-none font-sans rounded-lg w-full h-full p-2 " type="text" placeholder="Comment..."
            v-model=each.comment>
    </td>
</template>

<script setup>

import { reactive, watchEffect, ref } from 'vue';

import OrderStore from '../../../store/order_store';
const order_store = OrderStore();

const prop = defineProps(['id', 'order_list']);

const each = reactive({
    each_id: prop?.id,
    material_type: '',
    material_name: '',
    link: '',
    count: 0.001,
    unit: '',
    FieldsModelId: 0,
    status: 'Not Specified',
    comment: '',
});

watchEffect(() => {

    if (order_store.order_list?.length >= 1) {
        let check = false;
        for (let i of order_store.order_list) {
            if (i.each_id === each.each_id) {
                check = true;
                break;
            }
        }
        if (!check && (each.material_name!=='' || each.material_type!=='') ) {
            order_store.order_list.push(each);
        }
    }
    else {
        order_store.order_list.push(each)
    }
    if (order_store.after_created) {
        for (let i = 0; i < order_store.order_list.length; i++) {
            each.each_id = 0;
            each.material_type = '';
            each.material_name = '';
            each.link = '';
            each.count = 0;
            each.unit = '';
            each.FieldsModelId = 0;
            each.status = 'Not Specified',
                each.comment = '';
            order_store.order_list.splice(i, 1);
        }
    }
})

</script>

<style></style>