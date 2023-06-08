<template>
    <div v-if="order_store.GETROWINFORMCONDITION" class="h-full w-full fixed top-0 bg-black bg-opacity-20 right-0 flex
     z-10 border justify-end ">
        <div class="flex flex-col p-5 bg-white h-full w-1/2 bg-opacity-100 rounded-2xl overflow-auto">
            <div class="flex justify-between items-center text-xl font-bold">
                <span class="tracking-wider">Material Details</span>
                <button @click="order_store.row_inform_condition = false" class="py-1 px-3 hover:bg-gray-100 rounded-md">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <!-- STF Section -->
            <div class="flex flex-row justify-center border-b-2 mx-20">
                <span class="font-lg mt-4" v-font-family >STF Information</span>
            </div>
            <div class="p-1">
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> Situation :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].situation }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> Created By :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].orderer_name }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> Created Time :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].createdAt }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> STF Num :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].stf_num }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> Material Type :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].material_type }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> Material Name :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].material_name }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> Field :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].field_name }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> Count :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].count }} {{ order_store.row_detail_data[0].unit }}</span> </div>
            </div>
            <!-- SM Section -->
            <div class="flex flex-row justify-center border-b-2 mx-20">
                <span class="font-lg mt-4" v-font-family >SM Information</span>
            </div>
            <div class="mt-2 p-1">
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> SM Created Time :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].sm_date }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> SM Num :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].sm_num }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> Supplier :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].supplier_name }}</span> </div>
                <div class="mt-2 flex flex-row justify-start bg-gray-100 p-2 rounded-md" > <span class="text-xs w-48 font-bold text-gray-500"> Vendor Name :</span><span class="font-medium text-gray-600 text-xs ml-5">{{ order_store.row_detail_data[0].vendor_name }}</span> </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import OrderStore from '../../../store/order_store';
    const order_store = OrderStore();

</script>

<style lang="scss" scoped>

</style>