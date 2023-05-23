
<template>
    <div class="grid grid-cols-12  bg-violet-600 color-white relative">
        <div class="col-span-3 text-white flex flex-row items-center justify-start">
            <span @click="toggleCanvas"
                class="p-2 rounded-xl cursor-pointer  w-10 h-10 flex flex-row justify-center items-center hover:bg-black"><i
                    class="fa-solid fa-bars fa-md" style="color: white;"></i></span>

            <router-link to="/">
                <img class="w-10 h-10 ml-3 p-1 rounded-full" src="../assets/logo.png" alt="">
            </router-link>
            <span class="p-2 rounded-xl cursor-pointer hover:bg-black flex flex-row items-center">
                <img class="w-8 h-8 rounded-full"
                    src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                    alt="">
                <span class=" text-xs text-slate-300 font-mono pl-1" style="font-family: Verdana, Geneva, Tahoma, sans-serif; letter-spacing: 0.5px;">{{user?.name}} {{ user?.surname }}</span>
            </span>
        </div>


        <div class="col-span-6 flex flex-row items-center">
            <div class="flex flex-row w-full bg-slate-200 p-0 m-0 rounded-xl items-center hover:bg-white">
                <i class="fa-solid fa-magnifying-glass px-2" style="color:gray"></i>
                <input
                    class="w-full h-full p-2 bg-slate-200 rounded-xl hover:bg-white outline-none text-gray-500 border-none"
                    type="search" name="" id="" placeholder="Search">
            </div>
        </div>

        <!-- User Side -->
        <div class="col-span-3 flex flex-row items-center justify-evenly">

            <span
                class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black"><i
                    class="fa-solid fa-briefcase fa-md" style="color:white"></i></span>

            <span
                class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black"><i
                    class="fa-solid fa-book fa-md" style="color:white"></i></span>

            <span
                class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black"><i
                    class="fa-regular fa-bell fa-md " style="color:white"></i></span>

            <span
                class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black"><i
                    class="fa-regular fa-message fa-md" style="color:white"></i></span>

            <span
                class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black"><i
                    class="fa-regular fa-star fa-md" style="color:white"></i></span>


            <router-link to="/order/stf" class="no-underline ">

                <span
                    class="p-2 rounded-xl cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-black "><i
                        class="fa-solid fa-plus fa-md" style="color:white"></i></span>

              
            </router-link>

        </div>
    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';

import IndexStore from '../store';
import UserStore from '../store/user_store';

const index_store = IndexStore();
const user_store = UserStore();

const toggleCanvas = () => {
    index_store.TOGGLECANVAS();
}
const user = ref();

watchEffect(()=>{
    user.value = JSON.parse(sessionStorage?.getItem('user')); 
    user_store.user = user.value;
})

</script>

<style scoped></style>
