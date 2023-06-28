<template>
    
    <Table-Header :table_headers="order_store.table_headers" />

</template>

<script setup>

import { ref, watchEffect } from 'vue';
import OrderStore from '../../../store/order_store';
const order_store = OrderStore();

const material_type = ref('All');

watchEffect(()=>{
    if(material_type.value === 'Type' || material_type.value === 'All'){
        order_store.filtered_orders = order_store.orders;
    }
    else{

        if(order_store.GETORDERSDATA){
            order_store.filtered_orders = [];
            for(const i of order_store.GETORDERSDATA){
                if(i['material_type'] ===  material_type.value ){
                    order_store.filtered_orders.push(i);
                }
            }
        }
    }
})

</script>

<style lang="scss" scoped></style>