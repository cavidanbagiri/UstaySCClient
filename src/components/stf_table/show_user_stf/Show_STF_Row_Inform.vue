<template>
    <div v-if="order_store.GETROWINFORM" class="h-screen w-1/2 fixed top-0 right-0 z-10 border bg-white">
        <div class="flex flex-col">
            <div class="flex justify-end">
                <button @click="closeRowInform" class="p-2">
                    <i class="fa-solid fa-xmark fa-lg"></i>
                </button>
            </div>
            <div class="flex flex-col">
                <div>Created By : </div>
                <div>Created Time : </div>
                <div>STF No :  </div>
                <div>SM No : </div>
                <div>Condition : </div>
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