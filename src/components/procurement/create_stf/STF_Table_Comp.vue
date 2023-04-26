
<template>
    
    <div class="flex flex-col p-1">

        <STF_Create_Button_Comp/>

        <div class="flex flex-col w-screen overflow-x-scroll">
            
            <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">
                <STF_Table_Header_Comp/>
                <STF_Table_Body_Comp/>
            </table>

        </div>


    </div>

</template>

<script setup>

    import { onMounted } from 'vue';
    import STF_Table_Header_Comp from './STF_Table_Header_Comp.vue';
    import STF_Table_Body_Comp from './STF_Table_Body_Comp.vue';
    import STF_Create_Button_Comp from './STF_Create_Button_Comp.vue';
    import ProcurementStore from '../../../store/procurement_store';
    const procurement_store = ProcurementStore();

    onMounted(async ()=>{
        await procurement_store.getCompaniesNames();
        await procurement_store.getProcurementUsersNames();
    })


</script>

<style lang="scss" scoped>

</style>
