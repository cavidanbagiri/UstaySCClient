<template>

        <!-- Show Task Information -->
        <div class="my-5 p-3 border-2 rounded-md shadow-md" >

            <div class="">
                <p class="text-gray-400 text-sm">Task</p>
                <input class="w-full border p-2 rounded-md" type="text" name="" id="" v-model=each_data.task>
            </div>
            <div class="mt-1">
                <p class="text-gray-400 text-sm">Condition</p>
                <select class="text-sm border my-2 rounded-md p-1 outline-none hover:border-blue-500" 
                name="" id=""
                    v-model=each_data.condition>
                    <option v-for="i in condition" :value="i">{{ i }}</option>
                </select>
            </div>
            <div>
                <p class="text-gray-400 text-sm">Comment</p>
                <input class="w-full border p-2" type="text" name="" id="" v-model=each_data.comment>
            </div>
            <!-- Post Button Section -->
            <div class="flex py-2 justify-end">
                <button @click="updateData" class=" bg-green-600 px-6 py-2 rounded-md text-white">
                    Edit
                </button>
            </div>
        </div>


</template>

<script setup>

import { reactive, ref, watchEffect } from 'vue';
import WorkSpaceStore from '../../store/workspace_store';
const work_space_store = WorkSpaceStore()

const prop = defineProps(['each'])

const condition = ['Attached', 'Working', 'Competed'];

const each_data = reactive({
    id : prop?.each?.id,
    task : prop?.each?.task,
    condition : prop?.each?.condition,
    comment : prop?.each?.comment
})

const updateData = () => {

    // console.log('each : ',each_data);

    work_space_store.updateData(each_data);

}

</script>

<style scoped></style>