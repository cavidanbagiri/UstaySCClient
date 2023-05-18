
<template>
    <tbody>
        <MTF_Table_Body_Column_Name_Comp :row_size=prop?.row_size /> 
    </tbody>
</template>

<script setup>


import MTF_Table_Body_Column_Name_Comp from './MTF_Table_Body_Column_Name_Comp.vue';

// Adding Or Removing Row Size
const prop = defineProps(['row_size']);

</script>

<style lang="">
    
</style>