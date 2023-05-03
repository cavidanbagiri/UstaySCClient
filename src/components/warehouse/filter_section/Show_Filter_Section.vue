
<template>
    <div class="flex flex-col px-1 text-black ">
        
        <!-- Show Filter Title -->
        <Show_Filter_Title @toggleFilter=toggleFilter />

        <!-- Show Filter Body -->
        <Show_Filter_Body v-if=show_filters />

    </div>
</template>

<script setup>

import { ref } from 'vue';

import Show_Filter_Title from './Show_Filter_Title.vue';
import Show_Filter_Body from './Show_Filter_Body.vue'

const show_filters = ref(false);

const toggleFilter = () => {
    show_filters.value = !show_filters.value;
}

</script>

<style scoped>


</style>
