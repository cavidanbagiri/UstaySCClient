
<template>

    <div class="flex flex-col">

        <div class="flex flex-row mt-1 my-2 font-mono">
            
            <span :class="procurement_store.GETTABNUM===0 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(0)" class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-plus fa-lg "></i> Waiting STF</span>
            <span :class="procurement_store.GETTABNUM===1 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(1)" class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-list fa-lg "></i> Creating STF</span>
            <span :class="procurement_store.GETTABNUM===2 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(2)" class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-list fa-lg "></i> Get SM</span>
            

        </div>

        <Show_Procurement_Analyz />
        
        <KeepAlive>
            <component :is="tabs[procurement_store.GETTABNUM]"></component>
        </KeepAlive>


    </div>

</template>

<script setup>


import Show_Procurement_Analyz from '../components/procurement/Show_Procurement_Analyz.vue';
import Get_Waiting_STF from '../components/procurement/get_waiting_stf/Get_Waiting_STF.vue';
import Get_Creating_SM from '../components/procurement/create_sm/Get_Creating_SM.vue';
import Get_SM from '../components/procurement/get_sm/Get_SM_Comp.vue';

import ProcurementStore from '../store/procurement_store';
const procurement_store = ProcurementStore();


// Change Tabs
const tabs = [Get_Waiting_STF, Get_Creating_SM, Get_SM]
const changeTabe = (num) => procurement_store.tab_num=num



</script>

<style lang="scss" scoped>

</style>
