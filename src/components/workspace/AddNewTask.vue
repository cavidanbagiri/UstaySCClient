
<template>
    <div class="flex flex-row my-2 ">
        <input class=" text-sm border mx-2 rounded-md p-1 outline-none hover:border-blue-500 w-1/3" type="text" placeholder="Write Task Here ..." v-model=new_task_data.task>
        <input class=" text-sm border mx-2 rounded-md p-1 outline-none hover:border-blue-500 " type="text" placeholder="Set Condition" v-model= new_task_data.condition >
        <input class=" text-sm border mx-2 rounded-md p-1 outline-none hover:border-blue-500 " type="date" placeholder="Set Date" v-model=new_task_data.setting_at>
        <button class="border px-3 bg-green-500 text-white rounded-md text-md font-bold hover:bg-green-400" @click="createNewTask">
            Create
        </button>
    </div>
</template>

<script setup>

import { reactive } from 'vue';

import WorkSpaceStore from '../../store/workspace_store.js';
const work_space_store = WorkSpaceStore();

const new_task_data = reactive({
    UserModelId:2,
    task:null,
    condition:null,
    setting_at: new Date().toISOString().slice(0, 10)
}) 

const createNewTask = async () => {

    await work_space_store.createNewTask(new_task_data);

}


</script>

<style lang="scss" scoped>

</style>