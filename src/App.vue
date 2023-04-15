
<template>

  <div class="relative">

    <Navbar/>


    <router-view></router-view>

  </div>

</template>

<script setup>

  import { onMounted,  } from 'vue';
  import { initFlowbite } from 'flowbite'

  import STF_COMP from './components/STF_Table_Comp.vue';
  import Navbar from './layouts/Navbar.vue';
  import Off_Canvas_Comp from './components/design/Off_Canvas_Comp.vue';
  import IndexStore from './store';
  const store = IndexStore();


  onMounted(()=>{
    initFlowbite();
  })


</script>

<style lang="">
  
</style>
