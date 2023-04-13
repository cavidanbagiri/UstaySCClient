
<template>
    <div class="relative overflow-x-auto shadow-xl sm:rounded-lg border p-2">
        <!-- MTF Title Section -->
        <div class="text-center bg-gray-50">
            <span class="py-5 font-bold text-2xl my-5 ">Creating MTF</span>
            <hr>
        </div>
        <!-- MTF Inform Section -->
        <div class="flex flex-row justify-around p-2 border my-1 text-gray-200 rounded-md bg-slate-800">
            <span class="text-xs font-mono font-medium" ><span class="font-bold">MTF Number</span> : SRU.RS07.0001</span>
            <span class="text-xs font-mono font-medium" ><span class="font-bold">Created Date</span> : 13-04-2023</span>
            <span class="text-xs font-mono font-medium" ><span class="font-bold">Project</span> : Ustay-SRU</span>
            <span class="text-xs font-mono font-medium" ><span class="font-bold">Order</span> : Cavidan Bagirli</span>
        </div>
        <!-- Table Section -->
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
                    <th scope="col" class="px-6 py-1 font-mono font-medium text-center border w-8">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-1 font-mono font-medium text-center border">
                        Comment
                    </th>

                </tr>
            </thead>

            <!-- Table Body -->
            <tbody>
                <tr v-for="i in row_size" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                    
                    <th scope="row" class="w-8 font-mono font-thin text-gray-900 whitespace-nowrap dark:text-white text-center" style="font-size: smaller;">
                        <span>{{ i }}</span>
                    </th>
                    <th scope="row" class="p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white" style="font-size: smaller;">
                        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Material Type..."> -->
                        <select class="border outline-none font-sans rounded-lg w-full h-full p-2" v-model="selected" >
                            <option disabled value="">Select Type</option>
                            <option>Project</option>
                            <option>Consumables</option>
                            <option>Fixture</option>
                        </select>
                    </th>
                    <td class="p-1 font-mono font-thin border text-gray-900 whitespace-nowrap dark:text-white" style="font-size: smaller;">
                        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Material Name...">
                    </td>
                    <td class="p-1 border" style="font-size: smaller;">
                        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Count...">
                    </td>
                    <td class="p-1 border" style="font-size: smaller;">
                        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2 " type="text" placeholder="Unit..."> -->
                        <select class="border outline-none font-sans rounded-lg w-full h-full p-2" v-model="selected" >
                            <option disabled value="">Unit</option>
                            <option>Adet</option>
                            <option>M2</option>
                            <option>M3</option>
                            <option>Ton</option>
                            <option>Kg</option>
                        </select>
                    </td>
                    <td class="p-1 border" style="font-size: smaller;">
                        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Field..."> -->
                        <select class="border outline-none font-sans rounded-lg w-full h-full p-2" v-model="selected" >
                            <option disabled value="">Field</option>
                            <option>PR-2</option>
                            <option>Derjisnkoe</option>
                            <option>PR-6</option>
                        </select>
                    </td>
                    <td class="p-1 border" style="font-size: smaller;">
                        <!-- <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Status..."> -->
                        <select class="border outline-none font-sans rounded-lg w-full h-full p-2" v-model="selected" >
                            <option disabled value="">Status</option>
                            <option>
                                <span>
                                    <i class="fa-solid fa-gem fa-lg" style="color:red"></i> Urgent
                                </span>
                            </option>
                            <option>
                                <span>
                                    <i class="fa-solid fa-gem fa-lg" style="color:red"></i> Normally
                                </span>
                            </option>
                        </select>
                    </td>
                    <td class="p-1 border" style="font-size: smaller;">
                        <input class="border outline-none font-sans rounded-lg w-full h-full p-2" type="text" placeholder="Comment...">
                    </td>

                </tr>
            </tbody>
        </table>
        
        <!-- Add New Column -->
        <div class="flex justify-between">
            <button @click="addNewColumn" class=" font-bold py-2 px-2 my-1 text-xs outline-none font-mono  border text-gray-100 rounded-xl bg-orange-500">
                <i class="fa-solid fa-plus fa-lg"></i> 
                Add New Column
            </button>
            <button @click="addNewColumn" class="  py-2 px-2 my-1 text-xs outline-none font-mono font-bold border text-gray-100 rounded-xl bg-red-500">
                <i class="fa-solid fa-minus fa-lg"></i>
                Remove Column
            </button>
        </div>

        <!-- Creaate MTF Button-->
        <div class="flex items-center justify-end">
            <span class="p-3">Create MTF</span>
            <button @click="addNewColumn" class="  py-1 px-2 my-1 text-lg w-12 h-12 outline-none font-mono font-bold border text-gray-100 rounded-full bg-green-400">
                <i class="fa-solid fa-plus fa-xl"></i>
            </button>
        </div>

    </div>
</template>

<script setup>

    import {ref} from 'vue';

    const selected = ref('');

    const row_size = ref(5);

    const addNewColumn = () => {
        row_size.value+=1;
    }

</script>

<style lang="">
    
</style>
