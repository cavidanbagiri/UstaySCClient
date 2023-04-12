
<template>

  <div class="flex flex-col">

    <Navbar/>

    <!-- Table Form -->
    <div class="p-2 w-full">
      <STF_COMP/>
    </div>
  
  </div>

</template>

<script setup>

  import STF_COMP from './components/STF_Table_Comp.vue';
  import Navbar from './layouts/Navbar.vue';

</script>

<style lang="">
  
</style>
