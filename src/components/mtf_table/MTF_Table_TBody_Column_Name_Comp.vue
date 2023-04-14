<template>

    <tr v-for="i in prop.row_size"
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
        <!-- <MTF_Table_TBody_Each_Row_Comp :each="each" :id="i" :key="i" :order_list=order_list /> -->
        <MTF_Table_TBody_Each_Row_Comp :order_list=order_list :id=i :key=i />
    </tr>

</template>

<script setup>

import { ref } from 'vue';

import MTF_Table_TBody_Each_Row_Comp from './MTF_Table_TBody_Each_Row_Comp.vue';

const prop = defineProps(['row_size', 'order_list'])


</script>

<style lang="">
    
</style>