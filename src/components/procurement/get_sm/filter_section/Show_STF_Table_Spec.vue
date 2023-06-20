
<template>
    <div class="flex flex-col border shadow-xl p-2 absolute w-96 top-14 right-0 bg-white z-2">
        <ul>
            <li v-for="key in order_store.table_headers">
                <div class="flex flex-row items-center hover:bg-gray-100 p-2">
                    <input type="checkbox" name="" :checked="key.value" @change="changeHeaderCond(key)">
                    <label :for="key.name" class="ml-2">{{ key.name }} {{ key.value }} </label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

import ProcurementStore from '../../../../store/procurement_store';
const procurement_store = ProcurementStore();

const changeHeaderCond = (obj) => {
    obj.value = !obj.value;
}



// watchEffect(() => {

// })

</script>

<style scoped></style>