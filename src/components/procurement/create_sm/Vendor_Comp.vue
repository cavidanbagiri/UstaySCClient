
<template>
    <div class="flex flex-col relative">

        <button class="border p-3 mx-5 rounded-md" @click="show=!show">
            Choose Vendor
        </button>

        <div v-if="show" class="bg-white border rounded-md shadow-xl absolute top-10  p-2 w-96 h-96 overflow-auto">
            <ul>
                <li v-for="i in prop.vendor_list" @click="selectVendor(i)"
                    class="m-1 p-1 px-2 hover:bg-gray-100 text-xs cursor-pointer rounded-md ">
                    {{ i.vendor_name }}
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';

const show = ref(false);

const prop = defineProps(['vendor_list']);
const emit = defineEmits(['selectVendor'])

const selectVendor = (vendor) => {
    emit("selectVendor",vendor);

}

</script>

<style scoped>

</style>