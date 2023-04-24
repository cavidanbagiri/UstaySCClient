
<template>
    <div v-if="order_store.GETSHOWMTFTOAST" class="fixed bottom-0 right-0 p-3 border-2 bg-gray-50 w-96 h-full"
        style="z-index: 11">

        <div class="flex flex-col p-2" v-if="order_store?.created_last_mtf">

            <div class="flex justify-between py-2 items-center">
                <span class="text-xs py-2">MTF Created</span>
                <span class="text-end fa-xs" @click="closeMTFToast"><i class="fa-solid fa-x"></i></span>
            </div>
            <hr class="py-2 ">
            
            <div class="flex justify-between py-2">
                <span class="text-sm">Author</span>
                <span class="text-sm">{{order_store?.created_last_mtf[0]['username']}}</span>
            </div>
            <hr class="py-2">
            
            <div class="flex justify-between  py-2">
                <span class="text-sm">MTF Num : </span>
                <span class="text-sm">{{order_store?.created_last_mtf[0]['mtf_num']}}</span>
            </div>
            <hr class="py-2">

            <div v-for="i in order_store.GETCREATEDLASTMTF">
                <div class="flex justify-between  py-2">
                    <span class="text-sm">{{i.material_name}}</span>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

import OrderStore from '../../store/order_store';
const order_store = OrderStore();

const closeMTFToast = () => {
    order_store.show_mtf_toast = !order_store.show_mtf_toast;
}


</script>

<style lang="scss" scoped></style>