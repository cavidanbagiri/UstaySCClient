
<template>
    <div class="">

        <div class="my-1">
            <button v-if="!new_task_condition" @click="new_task_condition = !new_task_condition" class="bg-blue-500 text-white p-2 text-sm rounded-md">
                Add New Task
            </button>
            <button v-else @click="new_task_condition = !new_task_condition" class="bg-blue-500 text-white p-2 text-sm rounded-md">
                Remove Task
            </button>
        </div>

        <AddNewTask v-if="new_task_condition" />

        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">
            <TableHeader />
            <TableBody />
        </table>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import AddNewTask from './AddNewTask.vue';
import WorkSpaceStore from '../../store/workspace_store';
const work_space_store = WorkSpaceStore();
const new_task_condition = ref(false)

onMounted( async ()=>{
    await work_space_store.fetchTasks();
})

</script>

<style scoped></style>