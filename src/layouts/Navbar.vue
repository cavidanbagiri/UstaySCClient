
<template>
    <div class="grid grid-cols-12  bg-slate-800 color-white">
        <div class="col-span-3 text-white flex flex-row items-center justify-evenly" >
            <router-link to="/">
                <img class="w-12 h-12" src="https://cdn2.iconfinder.com/data/icons/letters-and-numbers-1/32/lowercase_letter_u_red-512.png" alt="">
            </router-link>
            <span class="p-2 rounded-xl cursor-pointer hover:bg-black flex flex-row items-center">
                <!-- <i class="fa-regular fa-user fa-md mr-1" style="color:white"></i> -->
                <img class="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000" alt="">
                <span class=" text-sm text-slate-300">Cavidan Bagirli</span>
            </span>
        </div>
        
        <div class="col-span-6 flex flex-row items-center" >
            <div class="flex flex-row w-full bg-slate-200 p-0 m-0 rounded-xl items-center hover:bg-white">
                <i class="fa-solid fa-magnifying-glass px-2" style="color:gray"></i>
                <input class="w-full h-full p-2 bg-slate-200 rounded-xl hover:bg-white outline-none text-gray-500" type="search" name="" id="" placeholder="Search">
            </div>
        </div>
        
        <!-- User Side -->
        <div class="col-span-3 flex flex-row items-center justify-evenly" >
                
            <span class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black" ><i class="fa-regular fa-bell fa-md " style="color:white"></i></span>
        
            <span class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black" ><i class="fa-regular fa-message fa-md" style="color:white"></i></span>
            
            <span class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black" ><i class="fa-solid fa-briefcase fa-md" style="color:white"></i></span>
            
            <router-link to="/order/createmtf">
                <span class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black" ><i class="fa-solid fa-plus fa-md" style="color:white"></i></span>
            </router-link>
            
            <span class="p-2 rounded-xl cursor-pointer  w-10 h-10 flex flex-row justify-center items-center hover:bg-black"><i class="fa-solid fa-ellipsis-vertical fa-md" style="color: white;"></i></span>
        
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="">
    
</style>
