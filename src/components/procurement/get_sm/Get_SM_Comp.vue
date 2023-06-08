<template>
    
    <div class="flex flex-col p-1" style="display:inline-block">

        <div class="h-40 sticky left-14 top-10 flex flex-col w-max bg-white" style="display:inline-block">
            <SM_Procurement_Analyz/>
            <Filter_Section_Comp/>
        </div>

        <div class="" >
            <Show_SM_Table/>
        </div>

    </div>

</template>

<script setup>

import SM_Procurement_Analyz from '../SM_Procurement_Analyz.vue';
import Filter_Section_Comp from './filter_section/Filter_Section_Comp.vue';
import Show_SM_Table from './Show_SM_Table.vue';

</script>

<style lang="scss" scoped></style>