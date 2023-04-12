<template>
    <div class="relative  shadow-md sm:rounded-lg w-full">
        
        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400">
            <thead class="text-xs text-gray-800 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 border ">
                <tr>
                    <th scope="col-4" class="py-2 px-4">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th class="px-2 py-1 font-medium font-mono " style="font-size: smaller;">
                        S/S
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        STF NO
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        SME NO
                    </th>
                    
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        FTE NO
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        STF Date
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        <div class="w-48">Vendor</div>
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium border" style="font-size: smaller;">
                        <div class="w-96">Product name Turkish</div>
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium border" style="font-size: smaller;">
                        <div class="w-96">Product name Other</div>
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        Count
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        Unit
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        Price
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        Total
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        CR
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        <div class="w-24">Order</div>
                    </th>
                    <th scope="col" class="px-2 py-1 font-mono font-medium text-center border" style="font-size: smaller;">
                        <div class="w-24">Supplier</div>
                    </th>
                    <th scope="col" class="px-2 py-1  font-mono font-medium text-center border" style="font-size: smaller;">
                        Certificate
                    </th>
                    <th scope="col" class="px-2 py-1  font-mono font-medium text-center border" style="font-size: smaller;">
                        Passport
                    </th>
                    <th scope="col" class="px-2 py-1  font-mono font-medium text-center border" style="font-size: smaller;">
                        Comment
                    </th>

                </tr>
            </thead>
            <tbody>

                <tr v-for="i in 10"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-1 p-4 py-2 ">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th class="px-2 py-2 font-mono font-bold">
                        {{ i }}
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        <span class="bg-orange-500 text-white p-1 rounded-full font-bold">SRU23.RS07.0879</span>
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        <span  class="bg-green-500 text-white p-1 rounded-full font-bold">SRU23.RS07.0877</span>
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        <span  class="bg-red-500 text-white p-1 rounded-full font-bold">SRU23.RS07.0877</span>
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        11.04.2023
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        <span>ООО ВЕК ЭЛЕКТРО</span>
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        YOYO 2 mt GERI SARMALLI DUSUS DURDURUCU YOYO 2 mt HB-02
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        Средство защиты втягивающего типа BEKAS двухплечевое, длина ленты 1,8 м. с большими карабинами
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        11
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        Ad
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        510
                    </th>
                    <th class="px-2 py-2 font-mono font-thin border" style="font-size: smaller;">
                        5610
                    </th>
                    <th class="px-2 py-2 font-mono font-thin text-center border" style="font-size: smaller;">
                        $
                    </th>
                    <th class="px-2 py-2 font-mono font-thin text-center border" style="font-size: smaller;">
                        Mehmet Ugur Dogan
                    </th>
                    <th class="px-2 py-2 font-mono font-thin text-center border" style="font-size: smaller;">
                        Irina Stepanova
                    </th>
                    <th class="px-2 py-2 font-mono font-thin text-center border" style="font-size: smaller;">
                        <span class="font-bold"><i class="fa-solid fa-check fa-xl" style="color:green"></i></span>
                    </th>
                    <th class="px-2 py-2 font-mono font-thin text-center border" style="font-size: smaller;">
                        <span  class="font-bold"><i class="fa-solid fa-xmark fa-xl" style="color:red"></i></span>
                    </th>
                    <th class="px-2 py-2 font-mono font-thin text-center border" style="font-size: smaller;">
                       <div class="w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                    </th>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup>

</script>

<style lang="">
    
</style>