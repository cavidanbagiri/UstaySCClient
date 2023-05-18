<template>

    <tr v-for="i in prop.row_size"
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
        <MTF_Table_Body_Each_Row_Comp :id=i :key=i />
    </tr>

</template>

<script setup>

import MTF_Table_Body_Each_Row_Comp from './MTF_Table_Body_Each_Row_Comp.vue';

const prop = defineProps(['row_size'])

</script>

<style lang="">
    
</style>