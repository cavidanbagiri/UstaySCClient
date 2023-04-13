
<template>
    <div class="relative overflow-x-auto shadow-xl sm:rounded-lg border p-2">
        
        <!-- MTF Title Section -->
        <MTF_Table_Title_Comp/>
        
        <!-- Table Section -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            
            <!-- Table Header -->
            <MTF_Table_Thead_Comp/>            

            <!-- Table Body -->
            <MTF_Table_Tbody_Comp/>

        </table>
        
        <!-- Add New Column -->
        <MTF_Table_Row_Count_Comp/>

        <!-- Create MTF Button-->
        <MTF_Create_Comp/>

    </div>
</template>

<script setup>

    import MTF_Table_Thead_Comp from './MTF_Table_Thead_Comp.vue';
    import MTF_Table_Tbody_Comp from './MTF_Table_Tbody_Comp.vue';
    import MTF_Table_Title_Comp from './MTF_Table_Title_Comp.vue';
    import MTF_Table_Row_Count_Comp from './MTF_Table_Row_Count_Comp.vue';
    import MTF_Create_Comp from './MTF_Create_Button.vue';
    

</script>

<style lang="">
    
</style>
