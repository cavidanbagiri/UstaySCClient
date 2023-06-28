
<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class=" p-1">
            <div class="flex items-center justify-center" @click="getRowDetail">
                <i class="fa-solid fa-ellipsis-vertical fa-2xl text-gray-300"  @click="getRowDetail"></i>
            </div>
        </td>
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <th class="px-2 py-2 font-medium text-center">
            {{ prop?.index + 1 }}
        </th>

        <th v-for="i in warehouse_store.receiving_sm_headers" v-show="i.value" class="px-2 py-2 font-medium text-center">

            <!-- STF Num Design -->
            <div v-if="i.name === 'stf_num'">
                <span class="bg-orange-100 text-orange-500 py-[0.30rem] px-2 rounded-md"> {{ prop.each[i.name] }}</span>
            </div>

            <!-- Created At Design -->
            <div v-else-if="i.name === 'created_at'" class="w-24">
                <DateFormat :time="prop.each[i.name]" />
            </div>

            <!-- STF Num Design -->
            <div v-else-if="i.name === 'sm_num'">
                <span class="bg-violet-100 text-violet-500 py-[0.30rem] px-2 rounded-md"> {{ prop.each[i.name] }}</span>
            </div>

            <!-- Situation Design -->
            <div v-else-if="i.name === 'situation'" class="">
                <div v-if="prop.each[i.name] === 'Waiting'">
                    <span class=" bg-red-100 w-full text-red-500 py-[0.30rem] px-2 rounded-md">
                        &#9679 {{ prop.each.situation }}
                    </span>
                </div>
                <div v-else-if="prop.each[i.name] === 'Processing'">
                    <span class="bg-blue-100 w-w-full text-blue-500 py-[0.30rem] px-2 rounded-md">
                        &#9679 {{ prop.each.situation }}
                    </span>
                </div>
                <div v-else-if="prop.each[i.name] === 'Received'">
                    <span class="bg-green-100 w-w-full text-green-500 py-[0.30rem] px-2 rounded-md">
                        &#9679 {{ prop.each.situation }}
                    </span>
                </div>
            </div>

            <div v-else-if="i.name === 'material_type'" class="text-start">
                <span>{{ prop.each[i.name] }}</span>
            </div>
            <div v-else-if="i.name === 'material_name'" class="text-start  min-w-[600px]">
                <span>{{ prop.each[i.name] }}</span>
            </div>
            <div v-else-if="i.name === 'vendor_name'" class="text-start">
                <span>{{ prop.each[i.name] }}</span>
            </div>
            <div v-else-if="i.name === 'username'" class="text-start">
                <span>{{ prop.each[i.name] }}</span>
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
import WarehouseStore from '../../../store/warehouse_store';
const warehouse_store = WarehouseStore();

// Get Each Item from parent
const prop = defineProps(['each', 'index']);

// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked', 'removeChecked']);

const checked = ref(false);

const checkboxCond = () => checked.value === true ? emit('addChecked', prop?.each) : emit('removeChecked', prop?.each?.id);



</script>

<style lang="scss" scoped></style>