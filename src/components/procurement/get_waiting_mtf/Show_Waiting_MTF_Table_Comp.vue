
<template>
    <div class="relative mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll border-2 ">
        <div class="flex justify-start pr-1 my-1">
            <button class="bg-red-600 text-xs py-2 px-3 rounded-md text-white ">
                Create STF
            </button>
        </div>
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