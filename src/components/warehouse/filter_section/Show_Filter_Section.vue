
<template>
    <div class="flex flex-col px-1 text-black ">

        <!-- Show Filter Body -->
        <Show_Filter_Body v-if=show_filters />

    </div>
</template>

<script setup>

import Show_Filter_Body from './Show_Filter_Body.vue'

</script>

<style scoped>


</style>
