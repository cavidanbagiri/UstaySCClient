<template>
    <tr :class="checked_style ? 'text-white bg-blue-600  hover:bg-blue-500 ' : 'hover:bg-gray-100 bg-white '"
        class="border-b  hover:cursor-pointer table_row">
        <td class=" p-1">
            <div class="flex items-center justify-center" @click="getRowDetail">
                <i class="fa-solid fa-ellipsis-vertical fa-2xl text-gray-300"  @click="getRowDetail"></i>
            </div>
        </td>
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <label class=" flex cursor-pointer items-center rounded-sm p-1" for="selected_row"
                    data-ripple-dark="true">
                    <input :id="prop.each.id" type="checkbox" @change="checkedRows(prop.each.id)"
                    class="checkbox checkbox-xs checkbox-primary"    
                    />
                    <div
                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                            stroke="currentColor" stroke-width="1">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </label>
            </div>
        </td>
        <!-- S/S Section -->
        <th class="px-2 py-2 font-medium text-center">{{ prop.index + 1 }}</th>


        <th v-for="i in order_store.table_headers" v-show="i.value" class="px-2 py-2 font-medium text-center">

            
            <!-- STF Num Design -->
            <div v-if="i.name === 'stf_num'" class="w-20">
                <span class="bg-orange-100 text-orange-500 py-1 px-2 rounded-xl"> {{ prop.each[i.name] }}</span>
            </div>
            
            <!-- SM Num Design -->
            <div v-else-if="i.name === 'sm_num'" class="w-20">
                <span class="bg-green-100 text-green-500 py-1 px-2 rounded-xl"> {{ prop.each[i.name] }}</span>
            </div>

            <!-- Date Time Design -->
            <div v-else-if="i.name === 'created_at'" class="w-24">
                <DateFormat :time="prop.each[i.name]" />
            </div>

            <!-- Situation Design -->
            <div v-else-if="i.name === 'situation'" class="w-20">
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

            <div v-else-if="i.name==='material_type'" class="text-start w-24">
                <span >{{ prop.each[i.name] }}</span>
            </div>
            <div v-else-if="i.name==='material_name'" class="text-start min-w-[600px] ">
                <span class="" >{{ prop.each[i.name] }}</span>
            </div>
            <div v-else-if="i.name==='field_name'" class="text-start w-24">
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

import { ref } from 'vue';

import OrderStore from '../../../store/order_store';
const order_store = OrderStore();

const prop = defineProps(['each', 'index'])

const checked_style = ref(false);

// Row Checked Controll and add selecting Rows from dell
const checkedRows = () => {
    console.log('good');
    checked_style.value = !checked_style.value
    if (checked_style.value) {
        order_store.selecting_rows.push(prop.each.id)
    }
    else {
        order_store.selecting_rows = order_store.selecting_rows.filter((item) => item != prop.each.id)
    }
}

// Get Double Click and Row Inform from dell
const getRowDetail = async () => {
    await order_store.getRowDetails(prop.each.id);
    order_store.row_inform_condition = true
}

</script>

<style lang="scss" scoped>


</style>