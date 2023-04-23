
<template>

  <div class="relative overflow-x-hidden">  

    <Navbar/>

    <Off_Canvas_Comp v-if="store.GETCANVASTOGGLE"/>

    <User_Login_Comp/>

    <router-view></router-view>

    <Toast_Comp/>

  </div>

</template>

<script setup>

  import { onMounted,  } from 'vue';
  import { initFlowbite } from 'flowbite'

  import Navbar from './layouts/Navbar.vue';
  import Off_Canvas_Comp from './components/design/Off_Canvas_Comp.vue';
  import User_Login_Comp from './components/design/User_Login_Comp.vue';
  import Toast_Comp from './components/design/Toast_Comp.vue';

  import IndexStore from './store';
  const store = IndexStore();

  onMounted(()=>{
    initFlowbite();
  })


</script>

<style lang="">
  
</style>
