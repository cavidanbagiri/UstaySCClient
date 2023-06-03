<template>
    <div v-if="order_store.GETROWINFORM" class="h-screen w-1/2 bg-red-300 fixed top-0 right-0 z-10">
        <div class="flex flex-col">
            <div class="flex justify-end bg-blue-300">
                <button @click="closeRowInform" class="p-2">
                    X
                </button>
            </div>
            <div class="flex flex-col">
            </div>
        </div>
    </div>
</template>

<script setup>

    import OrderStore from '../../../store/order_store';
    const order_store = OrderStore();

    const closeRowInform = () => {
        order_store.row_inform = false;
    }

</script>

<style lang="scss" scoped>

</style>