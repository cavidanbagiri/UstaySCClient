<template>
    <div class="flex flex-col border shadow-xl p-2 absolute w-96 top-14 right-0 bg-white z-2">
        <ul>
            <li v-for="key in prop?.table_headers">
                <div class="flex flex-row items-center hover:bg-gray-100 p-2">
                    <input type="checkbox" name="" :checked="key.value" @change="changeHeaderCond(key)">
                    <label :for="key.name" class="ml-2">{{ key.showname }} </label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

const prop = defineProps(['table_headers']);

const changeHeaderCond = (obj) => {
    obj.value = !obj.value;
}

</script>

<style lang="scss" scoped>

</style>