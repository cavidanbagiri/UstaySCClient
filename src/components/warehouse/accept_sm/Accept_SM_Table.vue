

<template>
    <div class="relative mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll border-2 ">

        <button @click="acceptedByWarehouse" v-if="warehouse_store.checked_values?.length" class="bg-red-600 p-2 px-3 text-white font-weight rounded-lg my-1">
            Accept
        </button>

        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

            <Get_SM_Header_Table/>
            <Get_SM_Body_Table />

        </table>

    </div>
</template>

<script setup>

    import Get_SM_Header_Table from './Get_SM_Header_Table.vue';
    import Get_SM_Body_Table from './Get_SM_Body_Table.vue';

    import WarehouseStore from '../../../store/warehouse_store';
    import UserStore from '../../../store/user_store';
    const warehouse_store = WarehouseStore();
    const user_store = UserStore();
   
    // Checked Values;
    const acceptedByWarehouse = () => {
        const data = {
            user:user_store.user,
            checked_values: checked_values.value
        }
        warehouse_store.acceptWaitingSM(data);
    }


</script>

<style lang="scss" scoped>

</style>