<template>
    <div v-if="work_space_store.show_edit_task" class=" absolute top-0 right-0 w-1/2 h-screen p-4 border shadow-md bg-white">

        <!-- Close EditTask Section -->
        <div class="my-2">
            <span @click="work_space_store.show_edit_task = false">
                <i class="fa-sharp fa-solid fa-xmark fa-lg"></i>
            </span>
        </div>

        <div class="flex flex-col items-stretch">
            <div v-for="i in work_space_store.selecting_tasks">
                <EditTaskSectionEach :each="i" />
            </div>
        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';
import EditTaskSectionEach from './EditTaskSectionEach.vue';

import WorkSpaceStore from '../../store/workspace_store';
const work_space_store = WorkSpaceStore();



</script>

<style lang="scss" scoped></style>