
<template>
    <div class=" flex flex-col p-2">

        
        <div class="flex flex-row mt-1 my-2 font-mono">
            
            <span :class="tab_num===0 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(0)" class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-plus fa-lg "></i> Create MTF</span>
            <span :class="tab_num===1 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(1)" class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-list fa-lg "></i> Show MTF</span>
            <span :class="tab_num===2 ? 'border-b-slate-800 border-b-4 ' : ''" @click="changeTabe(2)" class=" text-xs text-black p-3 mx-1 border-b-2  cursor-pointer" > <i class="fa-solid fa-warehouse fa-lg "></i> Show Warehouse</span>
            
        </div>
        <div v-if="tab_num===0 || tab_num===2">
            <keep-alive>
                <component :is="tabs[tab_num]" />
            </keep-alive>
        </div>
        <div v-else>
            <component :is="tabs[tab_num]" />
        </div>

    </div>
</template>

<script setup>

    import { ref } from 'vue';

    // Import Components For Showing In MTF Tab
    import MTF_Table_Comp from '../components/mtf_table/create_user_mtf/MTF_Table_Comp.vue';
    import Show_MTF_Comp from '../components/mtf_table/show_user_mtf/Show_MTF_Comp.vue';
    import Get_Warehouse_Table_Comp from '../components/warehouse/Get_Warehouse_Table_Comp.vue';

    /******************************************************************* Work With Tabs *************************/
    const tab_num = ref(0);
    const changeTabe = (num) => tab_num.value = num
    const tabs = ([MTF_Table_Comp,Show_MTF_Comp,Get_Warehouse_Table_Comp]);
    /***********************************************************************************************************/

</script>

<style lang="">
    
</style>
