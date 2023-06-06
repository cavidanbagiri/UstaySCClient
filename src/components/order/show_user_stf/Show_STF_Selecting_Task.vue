<template>
    <div v-if="order_store.selecting_rows.length>=1" class="mtf-anim fixed w-full bottom-10 flex flex-row mb-4 justify-center rounded-lg">
        <div class="flex justify-between bg-white w-1/2 border rounded-md shadow-2xl">
            <div class="flex items-center">
                <span class="bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl">{{ selecting_rows.length }}</span>
                <div class="ml-3">
                    <p>Task Selected</p>
                    <span v-for="i in selecting_rows.length" class="text-blue-600">&#9679</span>
                </div>
            </div>
            <div class="flex items-center">
                <div class="flex flex-col items-center mx-3 cursor-pointer"> <i class="fa-regular fa-trash-can"></i> <span class="text-sm">Add Archieve</span></div>
                <div class="flex flex-col items-center mx-3 cursor-pointer"> <i class="fa-solid fa-eye-slash"></i> <span class="text-sm">Dont Show</span></div>
                <div class="flex flex-col items-center mx-3 cursor-pointer"> <i class="fa-regular fa-star"></i> <span class="text-sm">Set Star</span></div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { ref, watchEffect } from 'vue';
    import OrderStore from '../../../store/order_store';
    const order_store = OrderStore();

    const selecting_rows = ref([]);

    watchEffect(()=>{
        selecting_rows.value = order_store.selecting_rows
    })

</script>

<style scoped>

.mtf-anim {
    animation: openfilter 0.5s;
}

@keyframes openfilter {
    from {
        transform: translateY(120%);
    }

    to {
        transform: translateY(0%);
    }
}

</style>