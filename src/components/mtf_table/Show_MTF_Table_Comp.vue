<template>
    <div class="relative  shadow-md sm:rounded-lg w-full">

<!-- Table -->
<table class="text-xs text-left text-gray-800 dark:text-gray-400">
    <!-- Table Header -->
    <thead class="text-xs text-gray-800 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 border ">
        <tr>
            <th scope="col-4" class="py-2 px-4">
                <div class="flex flex-col items-center">
                    <span>All</span>
                    <input id="checkbox-all-search" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th class="px-2 py-1 font-medium font-mono text-center" >
                <div class="flex flex-col">
                    S/S
                    <input class="rounded-lg border-none outline-0 p-1 w-10" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border">
                <div class="flex flex-col">
                    MTF NO
                    <input class="rounded-lg border-none outline-0 p-1" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" >
                <div class="flex flex-col">
                    MTF DATE
                    <input class="rounded-lg border-none outline-0 p-1" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" >
                <div class="w-24  flex flex-col">
                    Material Type
                    <input class="rounded-lg border-none outline-0 p-1" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" >
                <div class="w-96 flex flex-col">
                    Order name
                    <input class="rounded-lg border-none outline-0 p-1" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" >
                <div class="flex flex-col">
                    Count
                    <input class="rounded-lg border-none outline-0 p-1 w-16" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" >
                <div class="flex flex-col">
                    Unit
                    <input class="rounded-lg border-none outline-0 p-1 w-16" type="text">
                </div>
            </th>
            
            <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" >
                <div class="flex flex-col">
                    Order
                    <input class="rounded-lg border-none outline-0 p-1" type="text">
                </div>
            </th>
            <th scope="col" class="px-2 py-1  font-mono font-medium text-center border" >
                Comment
            </th>

        </tr>
    </thead>
    <!-- Table Border -->
    <tbody>
        <tr v-for="(i, index) in prop?.orders_data"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-1 p-4 py-2 ">
                <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <th class="px-2 py-2 font-mono font-bold text-center">
                {{ index }}
            </th>
            <th class="px-2 py-2 font-mono font-thin border text-center" >
                <span class="bg-orange-500 text-white p-1 rounded-full font-bold">{{ i.mtf_num }}</span>
            </th>
            <th class="px-2 py-2 font-mono font-thin border  text-center" >
                <span>{{ i.createdAt }}</span>
            </th>
            <th class="px-2 py-2 font-mono font-thin border" >
                {{i.material_type}}
            </th>
            <th class="px-2 py-2 font-mono font-thin border" >
                {{i.material_name}}
            </th>
            <th class="px-2 py-2 font-mono font-thin border text-center" >
                {{i.count}}
            </th>
            <th class="px-2 py-2 font-mono font-thin border text-center" >
                {{i.unit}}
            </th>
            <th class="px-2 py-2 font-mono font-thin text-center border" >
                {{i.username}}
            </th>
            <th class="px-2 py-2 font-mono font-thin text-center border" >
                <div class="w-96">{{i.comment}}</div>
            </th>
        </tr>
    </tbody>


</table>
</div>
</template>

<script setup>

    const prop = defineProps(['orders_data']);


</script>

<style lang="scss" scoped>

</style>