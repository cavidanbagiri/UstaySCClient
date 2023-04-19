
<template>
    <div class="flex items-center justify-end mt-10">
            <!-- <button @click="createMTF" class="  py-1 px-2 my-1 text-lg w-12 h-12 outline-none font-mono font-bold border text-gray-100 rounded-full bg-green-400">
                <i class="fa-solid fa-plus fa-xl"></i>
            </button> -->
            <button type="button"  @click="createMTF"  class="text-white bg-gradient-to-r bg-blue-600 
              font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2">
              <i class="fa-solid fa-plus"></i>
              Create</button>
        </div>
</template>

<script setup>

    import OrderStore from '../../../store/order_store';
    import UserStore from '../../../store/user_store';
    const order_store = OrderStore();
    const user_store = UserStore();
    // Define Prop For Getting All Rows Values
    const prop = defineProps(['order_list']);

    const createMTF = async () => {
        const data = {
            orders : prop?.order_list,
            user : user_store.user
        }
        await order_store.createMTF(data)
        .then((respond)=>{
            console.log('from create component : ', respond);
        }).catch((err)=>{
            console.log('from create Error component : ',err);
        })
    }

</script>

<style lang="">
    
</style>