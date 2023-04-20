
<template>

    <div class="flex flex-col">

        <div class="flex flex-row mt-1 my-2 font-mono">
            
            <span :class="tab_num===0 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(0)" class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-plus fa-lg "></i> Waiting MTF</span>
            <span :class="tab_num===1 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(1)" class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-list fa-lg "></i> Creating MTF</span>
            
        </div>

        <component :is="tabs[tab_num]"></component>

    </div>

</template>

<script setup>

import { ref } from 'vue';

import Get_Waiting_MTF from '../components/procurement/Get_Waiting_MTF.vue';
import Get_Creating_MTF from '../components/procurement/Get_Creating_MTF.vue';


const tab_num = ref(0);

const tabs = [Get_Waiting_MTF, Get_Creating_MTF]

const changeTabe = (num) => tab_num.value=num



</script>

<style lang="scss" scoped>

</style>
