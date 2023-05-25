<template>
    <div v-if="work_space_store.taskcreatedmethod" class=" absolute w-full top-20 flex justify-center">
        <div class="flex flex-row w-1/3 items-center bg-green-600 text-white justify-center py-3  rounded-lg">
            <span>New Task Succesffuly Created</span>
        </div>
    </div>
</template>

<script setup>

import WorkSpaceStore from '../../store/workspace_store';
const work_space_store = WorkSpaceStore();

</script>

<style lang="scss" scoped>

</style>