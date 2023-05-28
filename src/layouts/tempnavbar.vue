<template>
    <div class="flex flex-col h-screen bg-slate-800 w-10 items-center p-0 m-0 rounded-r-lg">
        <!-- Open Toggle Canvas -->
        <span @click="toggleCanvas"
            class="rounded-md cursor-pointer mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-slate-400"><i
                class="fa-solid fa-bars fa-md" style="color: white;"></i></span>
        <!-- WorkSpace Menu -->
        <router-link to="/workspace">
            <span
                class="rounded-md cursor-pointer mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-slate-400"><i
                    class="fa-solid fa-briefcase fa-md" style="color:white"></i></span>
        </router-link>
        <!-- Notification -->
        <span class="rounded-md cursor-pointer mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-slate-400"><i
                class="fa-regular fa-bell fa-md " style="color:white"></i></span>

        <!-- Message Menu-->
        <span class="rounded-md cursor-pointer mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-slate-400"><i
                class="fa-regular fa-message fa-md" style="color:white"></i></span>

        <!-- Starred Materials -->
        <span class="rounded-md cursor-pointer mt-5 w-8 h-8 flex flex-row justify-center items-center hover:bg-slate-400"><i
                class="fa-regular fa-star fa-md" style="color:white"></i></span>

        <!-- STF Menu -->
        <router-link to="/order/stf" class="no-underline ">

            <span
                class="p-2 rounded-md cursor-pointer w-8 mt-5 h-8 flex flex-row justify-center items-center hover:bg-slate-400 "><i
                    class="fa-solid fa-plus fa-md" style="color:white"></i></span>


        </router-link>
    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';

import IndexStore from '../store';
import UserStore from '../store/user_store';

const index_store = IndexStore();
const user_store = UserStore();

const user = ref();

const toggleCanvas = () => {
    index_store.TOGGLECANVAS();
}


watchEffect(() => {
    user.value = JSON.parse(sessionStorage?.getItem('user'));
    user_store.user = user.value;
})

</script>

<style lang="scss" scoped></style>