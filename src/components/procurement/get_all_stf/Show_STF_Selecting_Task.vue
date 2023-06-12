<template>
    <div v-if="selecting_rows.length>=1" class="mtf-anim fixed w-full bottom-10 flex flex-col mb-4 items-center rounded-lg">
        <div class="flex justify-between bg-white w-1/2 border rounded-md shadow-2xl">
            <div class="flex items-center">
                <span class="bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl">{{ selecting_rows.length }}</span>
                <div class="ml-3">
                    <p>Task Selected</p>
                    <span v-for="i in selecting_rows.length" class="text-blue-600">&#9679</span>
                </div>
            </div>
            <div class="flex items-center">
                <button class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i class="fa-regular fa-trash-can"></i> <span class="text-sm">Add Archieve</span></button>
                <button :disabled="procurement_store.show_error_message" :class="procurement_store.show_error_message ? 'text-gray-400 hover:bg-white cursor-default ' : '' " class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 " @click="createSM()"> <i class="fa-regular fa-handshake"></i> <span class="text-sm">Create SM</span></button>
                <button class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i class="fa-regular fa-star"></i> <span class="text-sm">Set Star</span></button>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { ref, watchEffect } from 'vue';
    import ProcurementStore from '../../../store/procurement_store';
    const procurement_store = ProcurementStore();

    const selecting_rows = ref([]);

    watchEffect(()=>{
        selecting_rows.value = procurement_store.checked_values
    })

    const createSM = async () => {
    procurement_store.tab_num = 2;
}

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