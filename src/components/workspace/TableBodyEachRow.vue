<template>
    <tr 
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs"
        style="font-family: Verdana, Geneva, Tahoma, sans-serif; letter-spacing: 0.3px;">
        <td class="w-1 p-4  ">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <td class="px-2 font-medium text-center">
            {{ prop.index + 1}}
        </td>
        <td class="px-2 font-medium text-start border-y ">
            <div class="   py-1 px-2 rounded-xl ">
                <span>{{ prop.data.task }}</span>
            </div>
        </td>
        <td class="px-2 font-medium text-center border-y text-md">
            <div v-if="prop.data.condition === 'Working'" class=" bg-orange-500 text-white py-2 px-2 font-bold rounded-sm ">
                <span>{{ prop.data.condition }}</span>
            </div>
            <div v-else-if="prop.data.condition === 'Attached'" class=" bg-red-500 text-white  py-2  px-2 font-bold rounded-sm ">
                <span>{{ prop.data.condition }}</span>
            </div>
            <div v-else-if="prop.data.condition === 'Competed'" class=" bg-green-500 text-white py-2 px-2 font-bold  rounded-sm ">
                <span>{{ prop.data.condition }}</span>
            </div>
        </td>
        <td class="px-2  font-medium border text-center">
            <span>{{ prop.data.setting_at }}</span>
        </td>
        <td class="px-2  font-medium border text-start">
            <span>{{ prop.data.comment }}</span>
        </td>
    </tr>
</template>

<script setup>

    import { ref } from 'vue';
    import WorkSpaceStore from '../../store/workspace_store';

    const work_space_store = WorkSpaceStore();

    const prop = defineProps(['index','data']);

    const checked = ref(false);

    const condition = ['Attached','Working','Competed'];

    const checkboxCond = () => {
        if(checked.value){
            work_space_store.selecting_tasks.push(prop.data);
        }
        else{
            work_space_store.selecting_tasks = work_space_store.selecting_tasks.filter((data)=>data.id!==prop.data.id)
        }
    }

</script>

<style lang="scss" scoped>

</style>