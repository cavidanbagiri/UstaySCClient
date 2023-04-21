
<template>
    <div class="flex flex-col px-1 text-black ">
        
        <!-- Show Filter Title -->
        <Show_MTF_Filter_Title @toggleFilter=toggleFilter />

        <!-- Show Filter Body -->
        <Show_MTF_Filter_Body v-if=show_filters />

    </div>
</template>

<script setup>

import { ref } from 'vue';

import Show_MTF_Filter_Title from './Show_MTF_Filter_Title.vue';
import Show_MTF_Filter_Body from './Show_MTF_Filter_Body.vue'

const show_filters = ref(true);

const toggleFilter = () => {
    show_filters.value = !show_filters.value;
}

</script>

<style scoped>


</style>
