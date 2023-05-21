
<template>
    <div class="relative overflow-x-auto shadow-xl sm:rounded-lg border p-2">
        <button v-if="row_size===0"  @click='row_size=5' > Create </button>
        <!-- Table Section -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            
            <!-- Table Header -->
            <MTF_Table_Header_Comp/>            

            <!-- Table Body -->
            <MTF_Table_Body_Comp :row_size = row_size />

        </table>
        
        <!-- Add New Column -->
        <MTF_Table_Row_Count_Comp @emitAddNewRow = "addNewRow" @emitRemoveRow="removeRow"/>

        <!-- Create MTF Button-->
        <MTF_Create_Button_Comp @setRowSize="setRowSize" />

    </div>
</template>

<script setup>

    import { ref } from 'vue';

    import MTF_Table_Header_Comp from './MTF_Table_Header_Comp.vue';
    import MTF_Table_Body_Comp from './MTF_Table_Body_Comp.vue';
    import MTF_Table_Row_Count_Comp from './MTF_Table_Row_Count_Comp.vue';
    import MTF_Create_Button_Comp from './MTF_Create_Button_Comp.vue';
    import OrderStore from '../../../store/order_store';
    const order_store = OrderStore();
    

    /************************************************* Row Management ****************/ 
    const row_size = ref(5);
    const addNewRow = () => row_size.value += 1;
    const removeRow = () =>  row_size.value >1 ? row_size.value -= 1 : row_size.value
    /****************************************************************************** */
    
    /************************************************* Create Creating Items List ***/ 
    const setRowSize = () => {
        row_size.value = 0;
        // order_store.order_list = [];
    }
    
    /******************************************************************************* */
    
</script>


<style lang="">
    
</style>
