
<template>
    <div class="mt-1 shadow-md sm:rounded-lg w-full border-2 analyz_header">

        <!-- Table -->
        <table class="text-left text-gray-800 dark:text-gray-400 w-full" >
            <!-- Table Header -->
            <!-- <Get_All_STF_Table_Header_Comp /> -->
            <Table-Header :table_headers="procurement_store.stf_table_headers" />
            <!-- Table Border -->
            <Get_All_STF_Table_Body_Comp />

        </table>
    </div>
</template>

<script setup>

import Get_All_STF_Table_Body_Comp from './Get_All_STF_Table_Body_Comp.vue';

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