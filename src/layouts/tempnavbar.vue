<template>
    <div class="flex flex-col h-screen bg-blue-600 w-14 items-center justify-start p-0 m-0 rounded-r-md 
    border-r-2 ">
        <!-- Open Toggle Canvas -->
        <div class="relative">
            <span @click="toggleCanvas" @mouseover="menu_tooltip = true" @mouseleave="menu_tooltip = false"
                class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                    class="fa-solid fa-bars fa-md" style="color:white;"></i>
            </span>
            <span v-if="menu_tooltip"
                class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md flex">
                Catalog
            </span>
        </div>
        <!-- WorkSpace Menu -->
        <div class="relative">
            <router-link to="/workspace">
                <span @mouseover="workspace_tooltip = true" @mouseleave="workspace_tooltip = false"
                    class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                        class="fa-solid fa-briefcase fa-md" style="color:white"></i>
                </span>
                <span v-if="workspace_tooltip"
                    class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md flex">
                    Workspace
                </span>
            </router-link>
        </div>

        <div class="relative">
            <router-link to="/">
                <span @mouseover="notification_tooltip = true" @mouseleave="notification_tooltip = false"
                    class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                        class="fa-regular fa-bell fa-md " style="color:white"></i></span>
                <span v-if="notification_tooltip"
                    class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md flex">
                    Notification
                </span>
            </router-link>
        </div>
        <div class="relative">
            <router-link to="/">
                <span @mouseover="messages_tooltip = true" @mouseleave="messages_tooltip = false"
                    class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                        class="fa-regular fa-message fa-md" style="color:white"></i></span>
                <span v-if="messages_tooltip"
                    class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md flex">
                    Messages
                </span>
            </router-link>
        </div>
        <div class="relative">
            <router-link to="/">
                <span @mouseover="star_tooltip = true" @mouseleave="star_tooltip = false"
                    class="rounded-md cursor-pointer  mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                        class="fa-regular fa-star fa-md" style="color:white"></i></span>
                <span v-if="star_tooltip"
                    class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md flex">
                    Stars
                </span>
            </router-link>
        </div>

        <!-- STF Menu -->
        <div class="relative">
            <router-link to="/order/stf" class="no-underline ">
                <span @mouseover="stf_tooltip = true" @mouseleave="stf_tooltip = false"
                    class="p-2 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300"><i
                        class="fa-solid fa-plus fa-md" style="color:white"></i>
                </span>
                <span v-if="stf_tooltip"
                    class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md flex">
                    Orders
                </span>
            </router-link>
        </div>
        <!-- Warehouse Menu -->
        <div class="relative">
            <router-link to="/procurement" class="no-underline ">
                <span @mouseover="procurement_tooltip = true" @mouseleave="procurement_tooltip = false"
                    class="p-2 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300">
                    <i class="fa-regular fa-handshake fa-sm" style="color:white;"></i>
                </span>
                <span v-if="procurement_tooltip"
                    class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md">
                    Procurement
                </span>
            </router-link>
        </div>
        <!-- Procurement Menu -->
        <div class="relative">
            <router-link to="/warehouse" class="no-underline ">
                <span @mouseover="warehouse_tooltip = true" @mouseleave="warehouse_tooltip = false"
                    class="p-2 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300">
                    <i class="fa-solid fa-warehouse fa-sm" style="color:white;"></i>
                </span>
                <span v-if="warehouse_tooltip"
                    class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md">
                    Warehouse
                </span>
            </router-link>
        </div>

        <div class="relative">
            <router-link to="/">
                <span @mouseover="profile_tooltip = true" @mouseleave="profile_tooltip = false"
                    class="p-2 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-blue-800 duration-300">
                    <i class="fa-regular fa-user fa-sm" style="color:white;"></i>
                </span>
                <span v-if="profile_tooltip"
                    class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 p-2 text-white text-xs rounded-md">
                    Profile
                </span>
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

// Show Tooltips
const warehouse_tooltip = ref(false)
const profile_tooltip = ref(false)
const procurement_tooltip = ref(false)
const stf_tooltip = ref(false)
const star_tooltip = ref(false)
const notification_tooltip = ref(false)
const messages_tooltip = ref(false)
const workspace_tooltip = ref(false)
const menu_tooltip = ref(false)

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