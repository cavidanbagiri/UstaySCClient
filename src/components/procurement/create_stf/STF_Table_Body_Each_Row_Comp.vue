<template>
    <tr 
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" @change="checkboxCond"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <th class="px-2 py-2 font-mono font-bold text-center">
            {{ prop?.index + 1  }}
        </th>
        <th class="px-2 py-2 font-mono font-thin border text-center">
            <span class="bg-orange-50 text-orange-400 p-1 rounded-full font-bold">{{ prop?.each_item?.stf_num }}</span>
        </th>
        <th class="px-2 py-2 font-mono font-thin border  text-center">
            <span>{{ prop?.each_item?.created_at }}</span>
        </th>
        <th class="px-2 py-2 font-mono font-thin border  text-center">
            <input class="border outline-none font-sans rounded-lg w-full h-full p-3 text-xs" type="date" name="" id="" v-model="each.procurement_coming_date">
        </th>
        <th class="px-2 py-2 font-mono font-thin border  text-center">
            <select class="border outline-none font-sans rounded-lg w-full h-full p-2 text-xs" v-model="each.VendorModelId">
            <option v-for="i in vendor_list" :value="i.id">{{ i.vendor_name }}</option>
        </select>
        </th>
        <th class="px-2 py-2 font-mono font-thin border  text-center">
            <select class="border outline-none font-sans rounded-lg w-full h-full p-2 text-xs" v-model="each.UserModelId">
            <option v-for="i in supplier_list" :value="i.id">{{ i.username }}</option> -->
        </select>
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
        <th class="px-2 py-2 font-mono font-thin border text-center">
            <input class="border outline-none font-sans rounded-lg w-full h-full p-2 text-xs" type="text" placeholder="Material Name..."
            v-model="each.price">
        </th>
        <th class="px-2 py-2 font-mono font-thin border text-center">
            <span>{{ each.total }}</span>
        </th>
        <th class="px-2 py-2 font-mono font-thin border  text-center">
            <select class="border outline-none font-sans rounded-lg w-full h-full p-2 text-xs" v-model="each.currency">
            <option v-for="i in currency_list">{{ i }}</option>
        </select>
        </th>
        <th class="px-2 py-2 font-mono font-thin border text-center">
            <span class="p-2 rounded-xl cursor-pointer hover:bg-black flex flex-row items-center">
                <img class="w-6 h-6 rounded-full"
                    src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                    alt="">
                <span class=" text-xs text-slate-800 font-mono pl-1">{{ prop?.each_item?.username }}</span>
            </span>
        </th>
    </tr>
</template>

<script setup>

import { ref, watchEffect, computed } from 'vue';

import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();

const vendor_list = computed(()=>{
    return procurement_store.GETCOMPANIESNAMES;
})

const supplier_list = computed(()=>{
    return procurement_store.GETPROCUREMENTUSERSNAMES;
})

const currency_list = ['₽','$']

// Create Each Row For Taking Value and sending To Server
const each = ref({
    ProjectModelId: prop?.each_item?.ProjectModelId,
    DepartmentModelId: prop?.each_item?.DepartmentModelId,
    STFModelId: prop?.each_item?.id,
    VendorModelId : ref(0),
    UserModelId : ref(0),
    price : ref(0),
    total : ref(0),
    currency : ref('₽'),
    procurement_coming_date : ref('')
})

// Create a prop for getting a value from parent
const prop = defineProps(['each_item', 'index']);


each.value.total=computed(()=>{
    return each.value.price * prop?.each_item?.count
})

watchEffect(()=>{
    procurement_store.creating_STF_datas.push(each.value);
})

</script>

<style lang="scss" scoped>

</style>