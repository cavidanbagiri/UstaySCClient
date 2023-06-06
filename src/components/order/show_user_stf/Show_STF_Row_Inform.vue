<template>
    <div v-if="order_store.GETROWINFORMCONDITION" class="h-full w-full fixed top-0 bg-black bg-opacity-10 right-0 flex
     z-10 border justify-end ">
        <div class="flex flex-col p-5 bg-white h-full w-1/2 bg-opacity-100 rounded-2xl overflow-auto">
            <div class="flex justify-between items-center text-xl font-bold">
                <span class="tracking-wider">Material Details</span>
                <button @click="order_store.row_inform_condition = false" class="py-1 px-3 hover:bg-gray-100 rounded-md">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-row justify-between" >Created Time : <span>{{ order_store.row_detail_data[0].createdAt }}</span> </div>
                <div class="flex flex-row justify-between" >STF No : <span>{{ order_store.row_detail_data[0].stf_num }}</span> </div>
                <div class="flex flex-row justify-between" >SM No : </div>
                <div class="flex flex-row justify-between" >Condition : </div>
                <pre>{{ order_store.row_detail_data }}</pre>
            </div>
        </div>
    </div>
</template>

<script setup>

    import OrderStore from '../../../store/order_store';
    const order_store = OrderStore();

</script>

<style lang="scss" scoped>

</style>