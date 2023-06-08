
<template>
  <div class="p-0 m-0 relative">

    <div class="sticky top-0 left-0 float-left p-0 z-10">
      <Tempnavbar />
    </div>
    
    <div class="p-0">

      <Off_Canvas_Comp v-if="store.GETCANVASTOGGLE" />

      <User_Login_Comp />

      <router-view></router-view>

    </div>

  </div>
</template>

<script setup>

import { onMounted, } from 'vue';
import { initFlowbite } from 'flowbite'

import Navbar from './layouts/Navbar.vue';
import Off_Canvas_Comp from './components/design/Off_Canvas_Comp.vue';
import User_Login_Comp from './components/design/User_Login_Comp.vue';

import IndexStore from './store';
import Tempnavbar from './layouts/tempnavbar.vue';
const store = IndexStore();

onMounted(() => {
  initFlowbite();
})


</script>

<style lang="">
  
</style>
