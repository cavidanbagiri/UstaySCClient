<template>
    <tr v-for="i in prop.row_size"
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
        <MTF_Table_TBody_Each_Row_Comp :each="each"/>
    </tr>
</template>

<script setup>

import { ref } from 'vue';

import MTF_Table_TBody_Each_Row_Comp from './MTF_Table_TBody_Each_Row_Comp.vue';

const prop = defineProps(['row_size'])

/********* For Getting All Of The Items*/
const orders = ref([]);
const each = ref({
    selected_type: ref(''),
    material_name: ref(''),
    material_count: ref(0),
    selected_unit: ref(''),
    selected_field: ref(''),
    selected_status: ref(''),
    material_comment: ref('')
});
/********* */

</script>

<style lang="">
    
</style>