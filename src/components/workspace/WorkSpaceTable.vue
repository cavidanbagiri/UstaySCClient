
<template>
    <div class="flex flex-col">

        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full mt-3">
            <TableHeader />
            <TableBody />
        </table>

    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import WorkSpaceStore from '../../store/workspace_store';
const work_space_store = WorkSpaceStore();

onMounted( async ()=>{
    await work_space_store.fetchTasks();
})

</script>

<style scoped></style>