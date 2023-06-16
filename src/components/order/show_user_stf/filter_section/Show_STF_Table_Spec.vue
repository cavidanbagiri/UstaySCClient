
<template>
    <div class="flex flex-col border shadow-xl p-2 absolute w-96 top-14 right-0 bg-white z-2">
        <ul>
            <li v-for="key in order_store.table_headers" >
                <div v-for="(k, v) in key" class="flex flex-row items-center hover:bg-gray-100 p-2">
                    <input type="checkbox" name="" :id="v" :checked="k" @change="changeHeaderCond(key)">
                    <label :for="v" class="ml-2">{{ v }} {{ k }} </label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

import { ref, onMounted, watchEffect } from 'vue';

import OrderStore from '../../../../store/order_store';
const order_store = OrderStore();

onMounted(()=>{
    if(order_store.table_headers.length===0){
        order_store.getHeaders();
    }
})

const changeHeaderCond = (obj) => {
    // console.log(obj);
    console.log('before : ',order_store.table_headers);
    // Take Checked Header Key
    for(let i of Object.keys(obj)){
        // Loop Table Headers
        for(let j of order_store.table_headers){
            // Get All Headers 
            for(let [key, value] of Object.entries(j)){
                
                // Check selected key table header key is equals
                if(key === i){
                    // Change Value
                    j[`${key}`] =! value
                }
                
            }
            
        }
        
    }
    console.log('after : ',order_store.table_headers);

}

watchEffect(()=>{
    
})

</script>

<style scoped>


</style>