
<template>
    <div class="relative mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll border-2 ">
        
        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

            <!-- Table Header -->
            <Get_Receiving_STF_Table_Header_Comp />
        
            <!-- Table Border -->
            <Get_Receiving_STF_Table_Body_Comp />

        </table>
    </div>
</template>

<script setup>

import { ref } from 'vue';

import Get_Receiving_STF_Table_Header_Comp from './Get_Receiving_STF_Table_Header_Comp.vue';
import Get_Receiving_STF_Table_Body_Comp from './Get_Receiving_STF_Table_Body_Comp.vue';

import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();

</script>

<style scoped>
.mtf-anim {
    animation: openfilter 0.5s;
}

@keyframes openfilter {
    from {
        transform: translateY(-20%);
    }

    to {
        transform: translateY(0%);
    }
}
</style>