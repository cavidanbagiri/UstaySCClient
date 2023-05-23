
<template>
    <div class="flex flex-row justify-start items-center" style="font-family: Verdana, Geneva, Tahoma, sans-serif; letter-spacing: 1px;">
        <button @click="toggleFilter" class=" text-xs border p-1 bg-violet-200 rounded-md">Show Filters <i class="fa-solid fa-arrow-down-short-wide"></i></button>
    </div>
</template>

<script setup>

const emit = defineEmits(['toggleFilter'])

const toggleFilter = () => emit('toggleFilter')


</script>

<style lang="scss" scoped></style>