<template>
    <div class="flex flex-row justify-between items-center">
        <span class="text-2xl font-mono ">Filters</span>
        <button @click="toggleFilter" class="ml-3 text-xs ">Show Filters <i
                class="fa-solid fa-filter fa-xl"></i></button>
    </div>
</template>

<script setup>

// const prop = defineProps(['show_filters'])

const emit = defineEmits(['toggleFilter'])

const toggleFilter = () => emit('toggleFilter')


</script>

<style lang="scss" scoped></style>