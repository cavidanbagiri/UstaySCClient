

<template>
    <div class="flex flex-col p-1">
        <div class="flex flex-row mt-1 my-2 font-mono anim">

            <span :class="tab_num === 0 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(0)"
                class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-plus fa-lg "></i>
                Get Processing SMS</span>
            <span :class="tab_num === 1 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(1)"
                class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-list fa-lg "></i>
                Accept SMS</span>

        </div>

        <keep-alive>
            <component :is="tabs[tab_num]" />
        </keep-alive>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import Show_SM_Table from '../components/warehouse/get_sm/Show_SM_Table.vue';
import Accept_SM_Table from '../components/warehouse/accept_sm/Accept_SM_Table.vue';

const tabs = ref([
    Show_SM_Table,
    Accept_SM_Table
]);

const tab_num = ref(0);

const changeTabe = (num) => {
    tab_num.value = num;
}

</script>

<style lang="scss" scoped></style>