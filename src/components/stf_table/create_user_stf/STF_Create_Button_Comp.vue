
<template>
    <div class="flex items-center justify-end mt-10">
            <button type="button"  @click="createSTF"  class="text-white bg-gradient-to-r bg-blue-600 
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
    const prop = defineProps(['row_size']);

    // Set Row Size 0 after creating mtf
    const emit = defineEmits(['setRowSize']);

    const createSTF = async () => {
        if(order_store.order_list.length === 0 ){
            alert('Must Create at least 1 data');
        }
        else{
            const data = {
                orders : order_store.order_list,
                user : user_store?.user
            }
            await order_store.createSTF(data)
            .then(async (respond)=>{
                if(respond?.response?.status === 400){
                    alert('MTF Cant Create');
                }
                else{
                    order_store.$reset();
                    emit('setRowSize');
                }
            }).catch((err)=>{
                console.log('from create Error component : ',err);
            })
        }
    }

</script>

<style lang="">
    
</style>