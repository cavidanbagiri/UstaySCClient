
<template>
    <div class="">

        <div class="h-40 sticky top-10 bg-white w-full">
            <Show_STF_Analyz />

            <Show_STF_Filter_Section />
        </div>
        
        
        <Show_STF_Table_Comp />

        <Show_STF_Row_Inform/>

        <Show_STF_Selecting_Task/>

    </div>
</template>

<script setup>

import { onMounted } from 'vue'

import OrderStore from '../../../store/order_store';
import UserStore from '../../../store/user_store';

import Show_STF_Analyz from '../Show_STF_Analyz.vue';
import Show_STF_Table_Comp from './Show_STF_Table_Comp.vue';
import Show_STF_Filter_Section from './filter_section/Show_STF_Filter_Section.vue';
import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';
import Show_STF_Row_Inform from './Show_STF_Row_Inform.vue';

const order_store = OrderStore();
const user_store = UserStore();

onMounted(() => {
    const user = user_store.GETUSERINFORM;
    order_store.showSTF(user);
})

</script>

<style lang="scss" scoped></style>
