<template>
    <div class=" mtf-anim fixed shadow-lg z-10 bg-slate-800 px-2 py-1 h-screen  w-72
      overflow-y-scroll ">
        <div class="flex justify-end ">
            <span class="text-white hover:bg-slate-600 px-1 py-1 rounded-md cursor-pointer" @click="closeOffCanvas"><i class="fa-solid fa-xmark fa-lg"></i></span>
        </div>
        <span class="p-2 rounded-xl cursor-pointer hover:bg-black flex flex-row items-center" style="font-family: Verdana, Geneva, Tahoma, sans-serif; letter-spacing: 0.3px;">
            <img class="w-8 h-8 rounded-full"
                src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                alt="">
            <span class=" text-xs text-slate-300 font-mono pl-1">{{ user_store?.user?.name }} {{
                user_store?.user?.surname
            }}</span>
        </span>
        <ul class="p-0 text-sm" style="letter-spacing: 2px; font-size: 13px;">
            <li class="hover:bg-slate-700 text-white p-2 mt-2 rounded-lg cursor-pointer flex items-center">
                <div class="text-md w-8 h-8p-1 flex items-center justify-center">
                        <i class="fa-solid fa-briefcase fa-md" style="color: white;"></i>
                </div>
                <span>
                    My Workspace
                </span>
            </li>
            <li class="hover:bg-slate-700 text-white p-2 mt-2 rounded-lg cursor-pointer flex items-center">
                <div class="text-md w-8 h-8p-1 flex items-center justify-center">
                    <i class="fa-regular fa-bell fa-md" style="color: white;"></i>
                </div>
                <span>
                    Notification
                </span>
            </li>
            <li class="hover:bg-slate-700 text-white  p-2 mt-2 rounded-lg cursor-pointer flex items-center">
                <div class="text-md w-8 h-8p-1 flex items-center justify-center">
                    <i class="fa-regular fa-star fa-md" style="color: white;"></i>
                </div>
                <span>
                    Starred
                </span>
            </li>
            <!-- Procurement -->
            <router-link to="/procurement">
                <li class="hover:bg-slate-700 text-white  p-2 mt-2 rounded-lg  py-2 px-4 cursor-pointer"
                    @click="show_procurement_dropdown = !show_procurement_dropdown">
                    <div>
                        <div class="flex justify-between">
                            <div class="">
                                <span class="">
                                    <i class="fa-solid fa-cart-shopping fa-sm" style="color: white;"></i>
                                    Procurement
                                </span>
                            </div>
                            <div>
                                <i v-if="!show_procurement_dropdown" class="fa-solid fa-chevron-left fa-xs"></i>
                                <i v-else class="fa-solid fa-chevron-down fa-xs"></i>
                            </div>
                        </div>
                        <!-- Show Procurement Dropdown -->

                        <!-- Dropdown menu -->
                        <transition name="slide-fade">
                            <div id="dropdownUsers" v-if="show_procurement_dropdown"
                                class="z-10 rounded-lg shadow w-50 dark:bg-gray-700">

                                <ul class="h-auto py-2 dark:text-gray-200 text-white" aria-labelledby="dropdownUsersButton">
                                    <li class="text-xs hover:bg-slate-400 rounded-lg"
                                        @click="procurement_store.tab_num = 0">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-regular fa-clock fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2 hover:bg-slate-400">
                                                Waiting STF
                                            </a>
                                        </div>
                                    </li>
                                    <li class="text-xs hover:bg-slate-400 rounded-lg"
                                        @click="procurement_store.tab_num = 1">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-arrow-rotate-left fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2 hover:bg-slate-400">
                                                Processing SM
                                            </a>
                                        </div>
                                    </li>
                                    <li class="text-xs hover:bg-slate-400 rounded-lg"
                                        @click="procurement_store.tab_num = 2">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-download fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2">
                                                Received SM
                                            </a>
                                        </div>

                                    </li>
                                    <li class="text-xs hover:bg-slate-400 rounded-lg"
                                        @click="procurement_store.tab_num = 3">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-reply-all fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2">
                                                ALL SM
                                            </a>
                                        </div>

                                    </li>
                                </ul>

                            </div>
                        </transition>
                    </div>

                </li>
            </router-link>
            <!-- Warehouse -->
            <router-link to="/warehouse">
                <li class="hover:bg-slate-700 text-white  p-2 mt-2 rounded-lg  py-2 px-4 cursor-pointer"
                    @click="show_warehouse_dropdown = !show_warehouse_dropdown">
                    <div>
                        <div class="flex justify-between">
                            <div class="">
                                <span class="text-md">
                                    <i class="fa-solid fa-warehouse fa-sm" style="color: white;"></i>
                                    Warehouse
                                </span>
                            </div>
                            <div>
                                <i v-if="!show_warehouse_dropdown" class="fa-solid fa-chevron-left fa-xs"></i>
                                <i v-else class="fa-solid fa-chevron-down fa-xs"></i>
                            </div>
                        </div>

                        <!-- Dropdown menu -->
                        <transition name="slide-fade">
                            <div id="dropdownUsers" v-if="show_warehouse_dropdown"
                                class="z-10 rounded-lg shadow w-50 dark:bg-gray-700">

                                <ul class="h-auto py-2 dark:text-gray-200 text-white" aria-labelledby="dropdownUsersButton">
                                    <li class="text-xs hover:bg-slate-400 rounded-lg" @click="warehouse_store.tab_num=0">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-arrow-rotate-left fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2 hover:bg-slate-400">
                                                Processing SM
                                            </a>
                                        </div>
                                    </li>
                                    <!-- <router-link to="/warehouse/received"> -->
                                        <li class="text-xs hover:bg-slate-400 rounded-lg" @click="warehouse_store.tab_num=1">
                                            <div class=" flex items-center px-4">
                                                <i class="fa-solid fa-download fa-lg"></i>
                                                <span class="flex items-center rounded-lg px-4 py-2">
                                                    Received SM
                                                </span>
                                            </div>
                                        </li>
                                    <!-- </router-link> -->
                                    <li class="text-xs hover:bg-slate-400 rounded-lg"  @click="warehouse_store.tab_num=2">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-check-double fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2">
                                                Provided SM
                                            </a>
                                        </div>

                                    </li>
                                </ul>

                            </div>
                        </transition>
                    </div>
                </li>
            </router-link>
            <!-- Login Logout -->
            <li v-if="!user_store?.user"
                class="hover:bg-slate-700 text-white  p-2 mt-1 rounded-lg  py-2 px-4 cursor-pointer">
                <span @click="openUserLogin" class="text-md">
                    <i class="fa-solid fa-right-to-bracket fa-md"></i>
                    Log In
                </span>
            </li>
            <li v-else class="hover:bg-slate-700 text-white  p-2 mt-1 rounded-lg  py-2 px-4 cursor-pointer">
                <span @click="openUserLogout" class="text-md">
                    <i class="fa-solid fa-arrow-right-from-bracket fa-md"></i>
                </span>
                <span class="">
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
import ProcurementStore from '../../store/procurement_store';
import WarehouseStore from '../../store/warehouse_store';

import router from '../../route';

const index_store = IndexStore();
const user_store = UserStore();
const procurement_store = ProcurementStore();
const warehouse_store = WarehouseStore();

const openUserLogin = () => {
    index_store.TOGGLEUSERTELEPORT();
}

const openUserLogout = () => {
    sessionStorage.clear();
    user_store.user = null;
    router.push('/');
    location.reload();
}

const closeOffCanvas = () => {
    index_store.canvas_toggle = false;
}

// Show procurement Dropdown
const show_procurement_dropdown = ref(false);
const show_warehouse_dropdown = ref(false);

</script>

<style scoped>
.mtf-anim {
    animation: openfilter 0.5s;
}

@keyframes openfilter {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
}



/* Procurement*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
    transform: translateY(-20%);
}

.slide-fade-leave-to {
    transform: translateY(-30%);
    /* opacity: 0; */
}</style>