
<template>
    <div class="relative mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll border-2 ">
 
        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

           <Received_SM_Table_Header/> 

            <Received_SM_Table_Body/>

        </table>

    </div>
</template>

<script setup>

    import Received_SM_Table_Header from './Received_SM_Table_Header.vue';
    import Received_SM_Table_Body from './Received_SM_Table_Body.vue'
    

</script>

<style lang="scss" scoped>

</style>
