
<template>

  <div class="relative">

    <Navbar/>
    
    <Off_Canvas_Comp v-if="store.GETCANVASTOGGLE"/>

    <router-view></router-view>

  </div>

</template>

<script setup>

  import STF_COMP from './components/STF_Table_Comp.vue';
  import Navbar from './layouts/Navbar.vue';
  import Off_Canvas_Comp from './components/design/Off_Canvas_Comp.vue';
  import IndexStore from './store';
  const store = IndexStore();


</script>

<style lang="">
  
</style>
