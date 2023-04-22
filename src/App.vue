
<template>

  <div class="relative overflow-x-hidden">  

    <Navbar/>

    <Off_Canvas_Comp v-if="store.GETCANVASTOGGLE"/>

    <User_Login_Comp/>

    <router-view></router-view>

  </div>

</template>

<script setup>

  import { onMounted,  } from 'vue';
  import { initFlowbite } from 'flowbite'

  import STF_COMP from './components/STF_Table_Comp.vue';
  import Navbar from './layouts/Navbar.vue';
  import Off_Canvas_Comp from './components/design/Off_Canvas_Comp.vue';
  import User_Login_Comp from './components/design/User_Login_Comp.vue';
  import IndexStore from './store';
  const store = IndexStore();

  onMounted(()=>{
    initFlowbite();
  })


</script>

<style lang="">
  
</style>
