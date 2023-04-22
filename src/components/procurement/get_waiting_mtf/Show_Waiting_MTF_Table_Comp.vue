
<template>
    <div class="relative  shadow-md sm:rounded-lg w-screen overflow-x-scroll border-2 ">
        
        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

            <!-- Table Header -->
            <Get_Waiting_MTF_Table_Header_Comp />
            <!-- Table Border -->
            <Get_Waiting_MTF_Table_Body_Comp />

        </table>
    </div>
</template>

<script setup>

    import Get_Waiting_MTF_Table_Header_Comp from './Get_Waiting_MTF_Table_Header_Comp.vue';
    import Get_Waiting_MTF_Table_Body_Comp from './Get_Waiting_MTF_Table_Body_Comp.vue';

</script>

<style scoped></style>