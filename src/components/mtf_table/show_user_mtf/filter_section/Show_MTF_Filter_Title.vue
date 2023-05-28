
<template>
    <div class="flex flex-row justify-start items-center" style="letter-spacing: 1px;" v-font-family>
        <button class=" border p-1 bg-violet-200 rounded-md" style="font-size: x-small;">Show Filters <i class="fa-solid fa-arrow-down-short-wide"></i></button>
    </div>
</template>

<script setup>

const emit = defineEmits(['toggleFilter'])

// const toggleFilter = () => emit('toggleFilter')


</script>

<style lang="scss" scoped></style>