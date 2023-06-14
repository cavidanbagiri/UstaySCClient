<template>
    <div class="shadow-md rounded-lg w-full border-2 mt-1">

        <!-- Table -->
        <table class="text-left text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white" style="font-size: xx-small;">
            <!-- Table Header -->
            <Show_STF_Table_Header />
            <!-- Table Border -->
            <Show_STF_Table_Body />

        </table>
    </div>
</template>

<script setup>

import Show_STF_Table_Body from './Show_STF_Table_Body.vue';
import Show_STF_Table_Header from './Show_STF_Table_Header.vue'

</script>

<style lang="scss" scoped></style>