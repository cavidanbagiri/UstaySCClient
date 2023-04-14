
<template>
    <div class="flex items-center justify-end mt-10">
            <!-- <button @click="createMTF" class="  py-1 px-2 my-1 text-lg w-12 h-12 outline-none font-mono font-bold border text-gray-100 rounded-full bg-green-400">
                <i class="fa-solid fa-plus fa-xl"></i>
            </button> -->
            <button type="button"  @click="createMTF"  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
             hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
              font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2">Create</button>
        </div>
</template>

<script setup>

    const prop = defineProps(['order_list']);

    const createMTF = () => {
        for(let i of prop.order_list){
            console.log(i.material_name);
        }
    }

</script>

<style lang="">
    
</style>