<template>
    
    <div class="">

        <div class="h-40 sticky top-10 bg-white w-full">
            <SM_Procurement_Analyz/>
            <Filter_Section_Comp/>
        </div>

        <Show_SM_Table/>

    </div>

</template>

<script setup>

import SM_Procurement_Analyz from '../SM_Procurement_Analyz.vue';
import Filter_Section_Comp from './filter_section/Filter_Section_Comp.vue';
import Show_SM_Table from './Show_SM_Table.vue';

</script>

<style lang="scss" scoped></style>