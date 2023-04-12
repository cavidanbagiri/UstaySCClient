
<template>
    <div class="">
        Create MTF Form
        <br>
        <button class="border p-2 rounded-lg" @click="createMTF">
            Create MTF
        </button>

    </div>
</template>

<script setup>
    
    import OrderStore from '../store/order_store.js';
    const store = OrderStore();

    const createMTF = async () => {
        await store.createMTF();
    }

</script>

<style lang="">
    
</style>
