
<template>
    
    <div class="flex flex-col p-1 w-screen overflow-x-scroll">

        <div class="flex my-1">
            <button class="bg-red-600 font-medium text-xs py-2 px-3 rounded-md text-white ">
                Create STF
            </button>
        </div>

        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">
            <STF_Table_Header_Comp/>

            <STF_Table_Body_Comp/>
        </table>

    </div>

</template>

<script setup>

    import STF_Table_Header_Comp from './STF_Table_Header_Comp.vue';
    import STF_Table_Body_Comp from './STF_Table_Body_Comp.vue';

</script>

<style lang="scss" scoped>

</style>
