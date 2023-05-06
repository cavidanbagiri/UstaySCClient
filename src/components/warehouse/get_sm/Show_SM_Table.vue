

<template>
    <div class="relative mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll border-2 ">
        
        <button @click="acceptedByWarehouse" v-if="checked_values.length" class="bg-red-600 p-2 px-3 text-white font-weight rounded-lg my-1">
            Accept
        </button>

        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

            <Get_SM_Header_Table/>
            <Get_SM_Body_Table :checked_values="checked_values" />

        </table>

    </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue';

    import Get_SM_Header_Table from './Get_SM_Header_Table.vue';
    import Get_SM_Body_Table from './Get_SM_Body_Table.vue';

    import WarehouseStore from '../../../store/warehouse_store';
    const warehouse_store = WarehouseStore();

    onMounted(async ()=>{
        await warehouse_store.getWaitingsSMS();
    })

    // Checked Values;
    const checked_values = ref([]);
    
    const acceptedByWarehouse = () => {
        warehouse_store.acceptWaitingSM(checked_values);
    }


</script>

<style lang="scss" scoped>

</style>