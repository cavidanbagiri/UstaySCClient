

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

    import ProcurementStore from '../../../store/procurement_store';
    const procurement_store = ProcurementStore();

    onMounted(async ()=>{
        await procurement_store.getAllSms();
    })

</script>

<style lang="scss" scoped>

</style>