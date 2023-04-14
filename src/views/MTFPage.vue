
<template>
    <div class=" flex flex-col p-2">

        
        <div class="flex flex-row mt-1 my-2">
            
            <span :class="tab_num===0 ? 'border-b-green-400' : ''" @click="changeTabe(0)" class=" text-xs font-bold text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-list fa-lg text-green-400"></i> Show MTF</span>
            <span :class="tab_num===1 ? 'border-b-green-400' : ''" @click="changeTabe(1)" class=" text-xs font-bold text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-warehouse fa-lg text-green-400"></i> Show Warehouse</span>
            <span :class="tab_num===2 ? 'border-b-green-400' : ''" @click="changeTabe(2)" class=" text-xs font-bold text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-warehouse fa-lg text-green-400"></i> Show Warehouse</span>
            
        </div>
        
        <component :is="tabs[tab_num]" />

        <!-- <Get_Warehouse_Table_Comp/>

        <Get_MTF_Comp/> -->

        <!-- <MTF_Table_Comp/> -->

    </div>
</template>

<script setup>

    import { ref } from 'vue';

    import MTF_Table_Comp from '../components/mtf_table/MTF_Table_Comp.vue';

    import Get_MTF_Comp from '../components/mtf_table/Get_MTF_Comp.vue';

    import Get_Warehouse_Table_Comp from '../components/warehouse/Get_Warehouse_Table_Comp.vue';

    import OrderStore from '../store/order_store.js';
    const store = OrderStore();

    const active = true;

    const createMTF = async () => {
        await store.createMTF();
    }

    /******************************************************************* Work With Tabs *************************/
    const tab_size = ref(3);
    const tab_num = ref(0);
    const changeTabe = (num) => {
        console.log('tab num : ', tab_num);
        tab_num.value = num
    }
    const tabs = ([
        MTF_Table_Comp,
        Get_MTF_Comp,
        Get_Warehouse_Table_Comp
    ])
    /***********************************************************************************************************/

</script>

<style lang="">
    
</style>
