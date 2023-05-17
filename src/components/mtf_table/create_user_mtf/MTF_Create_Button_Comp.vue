
<template>
    <div class="flex items-center justify-end mt-10">
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
            user : user_store?.user
        }
        await order_store.createMTF(data)
        .then((respond)=>{
            if(respond?.response?.status === 400){
                alert('MTF Cant Create');
            }
            else{
                console.log('order list is : ',prop.order_list);
                for(let i of prop?.order_list){
                    console.log('i : ',i);
                    i = null;
                    console.log('i : ',i);
                }
            }
        }).catch((err)=>{
            console.log('from create Error component : ',err);
        })
    }

</script>

<style lang="">
    
</style>