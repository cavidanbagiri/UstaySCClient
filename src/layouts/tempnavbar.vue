<template>
    <div class="flex flex-col h-screen bg-gradient-to-r from-blue-500 to-blue-600 w-14 items-center justify-start p-0 m-0 rounded-r-md 
    border-r-2 ">
        <!-- Open Toggle Canvas -->
        <span @click="toggleCanvas"
            class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                class="fa-solid fa-bars fa-md" style="color:white;"></i></span>
        <!-- WorkSpace Menu -->
        <router-link to="/workspace">
            <span
                class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                    class="fa-solid fa-briefcase fa-md" style="color:white"></i></span>
        </router-link>
        <!-- Notification -->
        <span class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                class="fa-regular fa-bell fa-md " style="color:white"></i></span>

        <!-- Message Menu-->
        <span class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                class="fa-regular fa-message fa-md" style="color:white"></i></span>

        <!-- Starred Materials -->
        <span class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                class="fa-regular fa-star fa-md" style="color:white"></i></span>

        <!-- STF Menu -->
        <router-link to="/order/stf" class="no-underline ">
            <span
                class="p-2 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                    class="fa-solid fa-plus fa-md" style="color:white"></i></span>
        </router-link>
        <!-- Warehouse Menu -->
        <router-link to="/procurement" class="no-underline ">
            <span
                class="p-2 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300">
                <i class="fa-regular fa-handshake fa-sm" style="color:white;"></i>
            </span>
        </router-link>
        <!-- Procurement Menu -->
        <div class="relative">
            <router-link to="/warehouse" class="no-underline ">
            <span @mouseover="warehouse_tooltip=true" @mouseleave="warehouse_tooltip=false"
                class="p-2 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300">
                <i class="fa-solid fa-warehouse fa-sm" style="color:white;"></i>
            </span>
            <span v-if="warehouse_tooltip" class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md">
                Warehouse
            </span>
        </router-link>
        </div>
        
        <span
            class="p-2 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300">
            <i class="fa-regular fa-user fa-sm" style="color:white;"></i>
        </span>

    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';

import IndexStore from '../store';
import UserStore from '../store/user_store';

const index_store = IndexStore();
const user_store = UserStore();

// Show Tooltips
const warehouse_tooltip = ref(false)

// Open And Close Canvas
const toggleCanvas = () => index_store.TOGGLECANVAS()


// Get User Inform
const user = ref();
watchEffect(() => {
    user.value = JSON.parse(sessionStorage?.getItem('user'));
    user_store.user = user.value;
})

</script>

<style lang="scss" scoped></style>