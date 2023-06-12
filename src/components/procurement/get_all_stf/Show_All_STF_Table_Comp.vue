
<template>
    <div class="mt-1 shadow-md sm:rounded-lg w-full border-2 ">
        
        <!-- Create Button and Error Message Section -->
        <!-- <div class="flex justify-between pr-1 my-1 mtf-anim" v-if="procurement_store.GETCHECKEDVALUES.length">
            <button  class="bg-red-600 font-medium text-xs py-2 px-3 rounded-md text-white" @click="createSTF" :disabled="procurement_store.GETERRORMESSAGE">
                Create STF
            </button>

            <span v-if="procurement_store.GETERRORMESSAGE" class="text-sm text-red-600 font-medium pr-3">For Creating STF, all
                STF nums must be same</span>
        </div> -->

        <!-- Table -->
        <button class="p-2 border text-xs bg-blue-600 text-white" @click="unselect()" >Unselect</button>
        <table class="text-left text-gray-800 dark:text-gray-400 w-full"  style="font-size: xx-small;">
            <!-- Table Header -->
            <Get_All_STF_Table_Header_Comp />
        
            <!-- Table Border -->
            <Get_All_STF_Table_Body_Comp />

        </table>
    </div>
</template>

<script setup>

import Get_All_STF_Table_Header_Comp from './Get_All_STF_Table_Header_Comp.vue';
import Get_All_STF_Table_Body_Comp from './Get_All_STF_Table_Body_Comp.vue';



import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();

const unselect = () => {
    procurement_store.after_created=true
    setTimeout(()=>{
        procurement_store.after_created = false;
    },1000)
}

</script>

<style scoped>
.mtf-anim {
    animation: openfilter 0.5s;
}

@keyframes openfilter {
    from {
        transform: translateY(-20%);
    }

    to {
        transform: translateY(0%);
    }
}
</style>