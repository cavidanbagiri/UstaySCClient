<template>
    <td class="hover:text-blue-400 p-1" @click="getRowDetail">
        <div class="flex items-center justify-center">
            <i class="fa-solid fa-ellipsis-vertical fa-2xl text-gray-300 "></i>
        </div>
    </td>
</template>

<script setup>

import IndexStore from '../store';
const index_store = IndexStore();

const prop = defineProps(['each']);

// Get Double Click and Row Inform from dell
const getRowDetail = async () => {
    await index_store.getRowDetails(prop.each.stf_id);
    index_store.row_inform_condition = true
}

</script>

<style lang="scss" scoped></style>