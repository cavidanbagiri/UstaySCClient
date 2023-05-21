<template>

    <tr  v-for="i in prop.row_size" :class="i===1 ? 'bg-red-50' : ''"
        class="bg-white border-b  hover:bg-gray-50 ">
        <MTF_Table_Body_Each_Row_Comp :id=i :key=i />
    </tr>

</template>

<script setup>

import MTF_Table_Body_Each_Row_Comp from './MTF_Table_Body_Each_Row_Comp.vue';

const prop = defineProps(['row_size'])




</script>

<style scoped>
    
    .error {
        background-color: red;
    }

</style>