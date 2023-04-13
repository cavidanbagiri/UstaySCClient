
<template>
    <div class=" flex flex-col p-2">
        

        <MTF_Table_Comp/>

    </div>
</template>

<script setup>

    import MTF_Table_Comp from '../components/mtf_table/MTF_Table_Comp.vue';

    import OrderStore from '../store/order_store.js';
    const store = OrderStore();

    const createMTF = async () => {
        await store.createMTF();
    }

</script>

<style lang="">
    
</style>
