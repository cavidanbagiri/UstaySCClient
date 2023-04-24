
<template>
    <div class="p-1 overflow-x-hidden">

        <Show_MTF_Analyz/>

        <Show_MTF_Filter_Section/>
        
        <Show_MTF_Table_Comp />

    </div>
</template>

<script setup>

    import { onMounted } from 'vue'

    import OrderStore from '../../../store/order_store';
    import UserStore from '../../../store/user_store';

    import Show_MTF_Analyz from './Show_MTF_Analyz.vue';
    import Show_MTF_Table_Comp from './Show_MTF_Table_Comp.vue';
    import Show_MTF_Filter_Section from './Show_MTF_Filter_Section.vue';

    const order_store = OrderStore();
    const user_store = UserStore();

    onMounted(()=>{
        const user = user_store.GETUSERINFORM;
        order_store.showMTF(user);
    })

</script>

<style lang="scss" scoped>

</style>
