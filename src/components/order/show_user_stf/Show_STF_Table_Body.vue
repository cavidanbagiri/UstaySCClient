
<template>
    <tbody v-font-family class="text-gray-500" style="letter-spacing: 0.3px;">

        <Show_STF_Table_Each_Row v-for="(i, index) in order_store.GETFILTEREDORDERSDATA"
            :each="i" :index="index"
        />

    </tbody>
</template>

<script setup>

import Show_STF_Table_Each_Row from './Show_STF_Table_Each_Row.vue'

import OrderStore from '../../../store/order_store';
const order_store = OrderStore();


const checkedRows = (i) => {
    console.log('clicked : id : ', i);
}

</script>

<style lang="scss" scoped></style>