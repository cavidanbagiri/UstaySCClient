
<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <!-- Table Header -->
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    
                    <th scope="col" class="px-6 py-1 font-mono font-medium text-center border">
                        S/S
                    </th>
                    <th scope="col" class="px-6 py-1 font-mono font-medium text-center border">
                        <div class="w-18">
                            Material Type
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-1 font-mono font-medium text-center border">
                        <div class="w-96">
                            Material Name
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-1 font-mono font-medium text-center border w-4">
                        Count
                    </th>
                    <th scope="col" class="px-6 py-1 font-mono font-medium text-center border w-4">
                        Unit
                    </th>
                    <th scope="col" class="px-6 py-1 font-mono font-medium text-center border w-8">
                        Field
                    </th>
                    <th scope="col" class="px-6 py-1 font-mono font-medium text-center border">
                        Comment
                    </th>

                </tr>
            </thead>

            <!-- Table Body -->
            <tbody>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <th scope="row" class="w-8 p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white text-center" style="font-size: smaller;">
                        <span>1</span>
                    </th>
                    <th scope="row" class="p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white" style="font-size: smaller;">
                        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Material Type...">
                    </th>
                    <td class="p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white" style="font-size: smaller;">
                        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Material Name...">
                    </td>
                    <td class="p-1 border" style="font-size: smaller;">
                        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Count...">
                    </td>
                    <td class="p-1 border" style="font-size: smaller;">
                        <input class="border outline-none font-sans rounded-lg w-full h-full p-2 " type="text" placeholder="Unit...">
                    </td>
                    <td class="p-1 border" style="font-size: smaller;">
                        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Field...">
                    </td>
                    <td class="p-1 border" style="font-size: smaller;">
                        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Comment...">
                    </td>

                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup>

</script>

<style lang="">
    
</style>
