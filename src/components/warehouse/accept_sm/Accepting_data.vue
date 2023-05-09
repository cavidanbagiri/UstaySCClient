
<template>
    <div class="flex flex-row my-1 items-end">

        <div class="flex flex-col m-1 ">
            <span class="text-xs m-1">Providing Date</span>
            <input class="border outline-none rounded-md border-gray-300 text-xs p-2" type="date" name="" id=""
                placeholder="Date" v-model="sms_data.providing_date" />
        </div>
        <div class="flex flex-col m-1 ">
            <span class="text-xs m-1">Document Date</span>
            <input class="border outline-none rounded-md border-gray-300 text-xs p-2" type="date" name="" id=""
                placeholder="Date" v-model="sms_data.document_date" />
        </div>
        <div class="flex flex-col m-1 ">
            <input type="text" id="search"
                class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Document Number" v-model="sms_data.document_number">
        </div>
    </div>
</template>

<script setup>

    import { reactive } from 'vue';

    const sms_data = reactive({
        providing_date:'',
        document_date:'',
        document_number:''
    });


</script>

<style lang="scss" scoped></style>
