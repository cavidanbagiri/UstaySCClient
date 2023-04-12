
<template>
    <div class="grid grid-cols-12 p-1 bg-slate-800 color-white">
        <div class="col-span-3 text-white flex items-center" >
            <img class="w-16 h-12" src="https://cdn2.iconfinder.com/data/icons/letters-and-numbers-1/32/lowercase_letter_u_red-512.png" alt="">
        </div>
        
        <div class="col-span-6 flex flex-row items-center" >
            <div class="flex flex-row w-full bg-slate-200 p-0 m-0 rounded-xl items-center hover:bg-white">
                <i class="fa-solid fa-magnifying-glass px-2" style="color:gray"></i>
                <input class="w-full h-full p-2 bg-slate-200 rounded-xl hover:bg-white outline-none text-gray-500" type="search" name="" id="" placeholder="Search">
            </div>
        </div>
        
        <!-- User Side -->
        <div class="col-span-3 flex flex-row items-center justify-evenly" >
            <span class="p-2 rounded-xl cursor-pointer hover:bg-black" ><i class="fa-regular fa-bell fa-md " style="color:white"></i></span>
            <span class="p-2 rounded-xl cursor-pointer hover:bg-black" ><i class="fa-regular fa-message fa-md" style="color:white"></i></span>
            <span class="p-2 rounded-xl cursor-pointer hover:bg-black" ><i class="fa-solid fa-briefcase fa-md" style="color:white"></i></span>
            <span class="p-2 rounded-xl cursor-pointer hover:bg-black">
                <i class="fa-regular fa-user fa-md mr-1" style="color:white"></i>
                <span class=" text-white text-sm">Lorem Ipsum</span>
            </span>
            <span class="py-1 px-2 rounded-xl cursor-pointer hover:bg-black"><i class="fa-solid fa-ellipsis-vertical fa-md" style="color: white;"></i></span>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="">
    
</style>
