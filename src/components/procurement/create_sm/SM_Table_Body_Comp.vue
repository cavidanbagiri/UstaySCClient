
<template>
    <tbody>
        <SM_Table_Body_Each_Row_Comp v-for="(i, index) in procurement_store.GETCHECKEDVALUES" :each_item="i" :index="index"
            :key="index" />
    </tbody>
</template>

<script setup>

import SM_Table_Body_Each_Row_Comp from './SM_Table_Body_Each_Row_Comp.vue'
import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();



</script>

<style lang="scss" scoped></style>