

<template>
    <div class="flex flex-col p-2">
        <div class="flex flex-row mt-1 my-2 anim text-xs"
            style="font-family: Verdana, Geneva, Tahoma, sans-serif; letter-spacing: 1px;">

            <span :class="warehouse_store?.tab_num === 0 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(0)"
                class=" text-black px-3 mx-1 pb-2 border-b-2  cursor-pointer"> <i
                    class="fa-solid fa-arrow-rotate-left fa-md"></i>
                Processing SM</span>
            <span :class="warehouse_store?.tab_num === 1 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(1)"
                class=" text-black px-3 pb-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-download fa-md"></i>
                Received SM</span>
            <span :class="warehouse_store?.tab_num === 2 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(2)"
                class=" text-black px-3 pb-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-plus fa-md"></i>
                Accept SM</span>

        </div>

        <keep-alive>
            <component :is="tabs[warehouse_store.tab_num]" />
        </keep-alive>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import Show_SM_Table from '../components/warehouse/get_sm/Show_SM_Table.vue';
import Accept_SM_Table from '../components/warehouse/accept_sm/Accept_SM_Table.vue';
import Received_SM_Table from '../components/warehouse/received_sm/Received_SM_Table.vue';

import WarehouseStore from '../store/warehouse_store';
const warehouse_store = WarehouseStore();

const tabs = ref([
    Show_SM_Table,
    Received_SM_Table,
    Accept_SM_Table
]);

const changeTabe = (num) => {
    warehouse_store.tab_num = num;
}

</script>

<style lang="scss" scoped></style>