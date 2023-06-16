
<template>
    <div class="flex flex-col border shadow-xl p-2 absolute w-96 top-14 right-0 bg-white z-40">
        <ul>
            <li v-for="i in headers" class="p-2 flex flex-row items-center hover:bg-gray-100">
                <input type="checkbox" name="" :id="i" :v-model="i">
                <label :for="i" class="ml-2">{{ i }}</label>
            </li>
        </ul>
    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';

// import OrderStore from '../../../../store/order_store';
import OrderStore from '../../../../store/order_store';
const order_store = OrderStore();

// create an empty headers
const headers = ref([]);

watchEffect(()=>{
    for(let [key, value] of Object.entries(order_store.orders[0])){
        if(key!=='id'){
            headers.value.push(key)
        }
    }
})

</script>

<style lang="scss" scoped>

</style>