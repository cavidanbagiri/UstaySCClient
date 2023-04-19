<template>
    <div class="relative  shadow-md sm:rounded-lg w-full">

        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400">
            <!-- Table Header -->
            <Show_MTF_Table_Header />
            <!-- Table Border -->
            <Show_MTF_Table_Body :orders_data="prop?.orders_data" />

        </table>
    </div>
</template>

<script setup>

import Show_MTF_Table_Body from './Show_MTF_Table_Body.vue';
import Show_MTF_Table_Header from './Show_MTF_Table_Header.vue'

const prop = defineProps(['orders_data']);



</script>

<style lang="scss" scoped></style>