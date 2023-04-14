
<template>
    <div class="relative overflow-x-auto shadow-xl sm:rounded-lg border p-2">
        
        <!-- MTF Title Section -->
        <MTF_Table_Title_Comp/>
        
        <!-- Table Section -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            
            <!-- Table Header -->
            <MTF_Table_Thead_Comp/>            

            <!-- Table Body -->
            <MTF_Table_Tbody_Comp :row_size = row_size />

        </table>
        
        <!-- Add New Column -->
        <MTF_Table_Row_Count_Comp @emitAddNewRow = "addNewRow" @emitRemoveRow="removeRow"/>

        <!-- Create MTF Button-->
        <MTF_Create_Comp/>

    </div>
</template>

<script setup>

    import {ref} from 'vue';

    import MTF_Table_Thead_Comp from './MTF_Table_Thead_Comp.vue';
    import MTF_Table_Tbody_Comp from './MTF_Table_Tbody_Comp.vue';
    import MTF_Table_Title_Comp from './MTF_Table_Title_Comp.vue';
    import MTF_Table_Row_Count_Comp from './MTF_Table_Row_Count_Comp.vue';
    import MTF_Create_Comp from './MTF_Create_Button.vue';

    /************************************************* Row Management ****************/ 
    const orders = ref([]);
    const each = ref({
        row_id: ref(0),
        selected_type: ref(''),
        material_name: ref(''),
        material_count: ref(0),
        selected_unit: ref(''),
        selected_field: ref(''),
        selected_status: ref(''),
        material_comment: ref('')
    });
    /******************************************************************************* */
    
    /************************************************* Row Management ****************/ 
    const row_size = ref(1);
    const addNewRow = () => row_size.value += 1;
    const removeRow = () =>  row_size.value >1 ? row_size.value -= 1 : row_size.value
    /****************************************************************************** */

</script>

<style lang="">
    
</style>
