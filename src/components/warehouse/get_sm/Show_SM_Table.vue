

<template>
    <div class="relative mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll border-2 ">
        
        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

            <Get_SM_Header_Table/>
            <Get_SM_Body_Table/>

        </table>

    </div>
</template>

<script setup>

    import { onMounted } from 'vue';

    import Get_SM_Header_Table from './Get_SM_Header_Table.vue';
    import Get_SM_Body_Table from './Get_SM_Body_Table.vue';

    import WarehouseStore from '../../../store/warehouse_store';
    const warehouse_store = WarehouseStore();

    onMounted(async ()=>{
        await warehouse_store.getWaitingsSMS();
    })

</script>

<style lang="scss" scoped>

</style>