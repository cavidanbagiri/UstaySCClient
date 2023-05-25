<template>
    <div class=" absolute w-full bottom-20 flex flex-row mb-4 justify-center rounded-lg">
        <div class="flex justify-between  w-1/2 border rounded-md shadow-lg">
            <div class="flex items-center">
                <span class="bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md">{{ selecting_tasks.length }}</span>
                <div class="ml-3">
                    <p>Task Selected</p>
                    <span v-for="i in selecting_tasks.length" class="text-blue-600">&#9679</span>
                </div>
            </div>
            <div class="flex items-center">
                <div class="flex flex-col items-center mx-3"> <i class="fa-regular fa-trash-can"></i> <span class="text-sm">Remove</span></div>
                <div class="flex flex-col items-center mx-3"> <i class="fa-solid fa-highlighter"></i> <span class="text-sm">Update</span></div>
                <div class="flex flex-col items-center mx-3"> <i class="fa-regular fa-file-zipper"></i> <span class="text-sm">Archieve</span></div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import WorkSpaceStore from '../../store/workspace_store';
    const work_space_store = WorkSpaceStore();

    const selecting_tasks = work_space_store.selecting_tasks;

</script>

<style lang="scss" scoped></style>