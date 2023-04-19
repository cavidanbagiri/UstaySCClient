
<template>
    <div class="p-1 ">
        
        <Show_MTF_Table_Comp :orders_data = orders_data />

    </div>
</template>

<script setup>

    import { ref, onMounted, watchEffect } from 'vue'

    import OrderStore from '../../../store/order_store';
    import UserStore from '../../../store/user_store';

    import Show_MTF_Table_Comp from './Show_MTF_Table_Comp.vue';

    const order_store = OrderStore();
    const user_store = UserStore();

    const orders_data = ref({});

    onMounted(()=>{
        const user = user_store.GETUSERINFORM;
        order_store.showMTF(user);
    })

    watchEffect(()=>{
        orders_data.value = order_store.GETORDERSDATA
    })

</script>

<style lang="scss" scoped>

</style>
