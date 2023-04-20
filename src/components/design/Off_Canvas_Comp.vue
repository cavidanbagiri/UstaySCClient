<template>
    <div class="  fixed left-0  shadow-lg z-10  bg-slate-800 pl-3 pt-3 pb-3 pr-10 border-t rounded-r-lg">

        <span class="p-2 rounded-xl cursor-pointer hover:bg-black flex flex-row items-center">
                <img class="w-8 h-8 rounded-full"
                    src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                    alt="">
                <span class=" text-xs text-slate-300 font-mono">{{user_store?.user?.name}} {{user_store?.user?.surname }}</span>
        </span>
        <ul class="p-0 font-mono">
            <li class="hover:bg-slate-700 text-white rounded-lg  py-2 px-4 mt-2 cursor-pointer">
                <span class="text-md ">
                    <i class="fa-solid fa-briefcase fa-md" style="color: white;"></i>
                    My Workspace
                </span>
            </li>
            <li class="hover:bg-slate-700 text-white p-2 mt-2 rounded-lg  py-2 px-4 cursor-pointer">
                <span class="text-md py-1">
                    <i class="fa-regular fa-bell fa-md" style="color: white;"></i>
                    Warning
                </span>
            </li>
            <li class="hover:bg-slate-700 text-white  p-2 mt-2 rounded-lg  py-2 px-4 cursor-pointer">
                <span class="text-md">
                    <i class="fa-regular fa-star fa-md" style="color: white;"></i>
                    Star
                </span>
            </li>
            <li class="hover:bg-slate-700 text-white   p-2 mt-2 rounded-lg  py-2 px-4 cursor-pointer">
                <span class="text-md">
                    <i class="fa-regular fa-message fa-md" style="color: white;"></i>
                    Messages
                </span>
            </li>
            <li class="hover:bg-slate-700 text-white  p-2 mt-2 rounded-lg  py-2 px-4 cursor-pointer">
                <span class="text-md">
                    <i class="fa-solid fa-book fa-md" style="color: white;"></i>
                    Notepad
                </span>
            </li>
            <li class="hover:bg-slate-700 text-white  p-2 mt-2 rounded-lg  py-2 px-4 cursor-pointer">
                <span class="text-md">
                    <i class="fa-solid fa-cart-shopping fa-md" style="color: white;"></i>
                    Procurement
                </span>
            </li>
            <li class="hover:bg-slate-700 text-white  p-2 mt-2 rounded-lg  py-2 px-4 cursor-pointer">
                <span class="text-md">
                    <i class="fa-solid fa-warehouse fa-md" style="color: white;"></i>
                    Warehouse
                </span>
            </li>

            <li v-if="!user_store?.user" class="hover:bg-slate-700 text-white  p-2 mt-1 rounded-lg  py-2 px-4 cursor-pointer">
                <span @click="openUserLogin" class="text-md">
                    <i class="fa-solid fa-right-to-bracket fa-md"></i>
                    Log In
                </span>
            </li>
            <li v-else class="hover:bg-slate-700 text-white  p-2 mt-1 rounded-lg  py-2 px-4 cursor-pointer">
                <span @click="openUserLogout" class="text-md">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    Log Out
                </span>
            </li>
        </ul>

    </div>
</template>

<script setup>

    import { ref, watchEffect } from 'vue';

    import IndexStore from '../../store/index.js';
    import UserStore from '../../store/user_store';
    
    import router from '../../route';

    const index_store = IndexStore();
    const user_store = UserStore();

    const openUserLogin = () => {
        index_store.TOGGLEUSERTELEPORT();
    }

    const openUserLogout = () => {
        sessionStorage.clear();
        user_store.user=null;
        router.push('/');
        location.reload();
    }


</script>

<style lang="scss" scoped></style>