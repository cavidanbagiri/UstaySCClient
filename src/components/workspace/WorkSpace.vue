
<template>
    <div class="flex flex-col">

        <div class="my-1">
            <button v-if="!new_task_condition" @click="new_task_condition = !new_task_condition" class="bg-blue-600 text-white p-2 text-sm rounded-md">
                Add New Task
            </button>
            <button v-else @click="new_task_condition = !new_task_condition" class="bg-blue-600 text-white p-2 text-sm rounded-md">
                Remove Task
            </button>
        </div>

        <AddNewTask v-if="new_task_condition" />

        <TaskCreatedMessage/>

        <TaskSelectingSection v-if="work_space_store.selecting_tasks.length" />

        <EditTaskSection/>
        
        <!-- WorkSpace Main Table -->
       <WorkSpaceTable/>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import AddNewTask from './AddNewTask.vue';
import WorkSpaceStore from '../../store/workspace_store';
import TaskSelectingSection from './TaskSelectingSection.vue';
import TaskCreatedMessage from './TaskCreatedMessage.vue';
import EditTaskSection from './EditTaskSection.vue';
import WorkSpaceTable from './WorkSpaceTable.vue';
const work_space_store = WorkSpaceStore();
const new_task_condition = ref(false)

onMounted( async ()=>{
    await work_space_store.fetchTasks();
})

</script>

<style scoped></style>