
<template>
    <div class="flex flex-row my-2  py-1 mb-2">
        <input class=" text-sm border mx-2 rounded-md p-1 outline-none hover:border-blue-500 w-1/3" type="text" placeholder="Write Task Here ..." v-model=new_task_data.task>
        <select class="text-sm border mx-2 rounded-md p-1 outline-none hover:border-blue-500" name="" id="" v-model=new_task_data.condition>
            <option v-for="i in condition" :value="i">{{ i }}</option>
        </select>
        <input class=" text-sm border mx-2 rounded-md p-1 outline-none hover:border-blue-500 " type="date" placeholder="Set Date" v-model=new_task_data.setting_at>
        <input class=" text-sm border mx-2 rounded-md p-1 outline-none hover:border-blue-500 w-1/3" type="text" placeholder="Comment ..." v-model=new_task_data.comment>
        <button class="border px-6 py-2 bg-green-600 text-white rounded-md text-md font-bold hover:bg-green-400" @click="createNewTask">
            Create
        </button>
    </div>
</template>

<script setup>

import { reactive } from 'vue';

import WorkSpaceStore from '../../store/workspace_store.js';
const work_space_store = WorkSpaceStore();

const condition = ['Attached','Working','Competed'];

const new_task_data = reactive({
    UserModelId:2,
    task:null,
    condition:condition[0],
    setting_at: new Date().toISOString().slice(0, 10),
    comment: null
}) 


const createNewTask = async () => {
    try{
        await work_space_store.createNewTask(new_task_data)
        .then((respond)=>{
            work_space_store.taskcreatedmethod = true
            setTimeout(()=>{
                work_space_store.taskcreatedmethod = false
            },1000)
        }).catch((err)=>{
            console.log('Local Error Fro Creating New Task : ',err);
        })
    }
    catch(err){
        console.log('Common Error Fro Creating New Task : ',err);
    }
}


</script>

<style lang="scss" scoped>

</style>