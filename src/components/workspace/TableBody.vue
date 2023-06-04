
<template>
    <TableBodyEachRow v-for="(data, index) in data" 
    :index=index
    :data = data
    />
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import TableBodyEachRow from './TableBodyEachRow.vue';

import WorkSpaceStore from '../../store/workspace_store';
const work_space_store = WorkSpaceStore();

const data = ref(null);

watchEffect(()=>{
    data.value = work_space_store.tasks;
})

</script>

<style scoped></style>