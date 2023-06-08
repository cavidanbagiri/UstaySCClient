
<template>
    <div class="flex items-center justify-end mt-10">
        <button type="button" @click="createSTF" class="text-white bg-gradient-to-r bg-blue-600 
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
const prop = defineProps(['row_size', 'order_list']);

// Set Row Size 0 after creating mtf
const emit = defineEmits(['setRowSize']);

const createSTF = async () => {
    if (order_store.order_list.length === 0) {
        alert('Must Create at least 1 data');
    }
    else {
        let check = true;
        // Check All Of Orders True Or Not
        for (let i = 0; i < order_store.order_list.length; i++) {

            // Check If material type and material name is not empty
            if ( order_store.order_list[i].material_name === '' ){
                check = false;
                alert(`${i+1} Row Material Name is Empty`)
                break;
            }
            else if(order_store.order_list[i].count <= 0){
                check = false;
                alert(`${i+1} Row Count Is Not True`)
                break;
            }
            else if(order_store.order_list[i].unit === ''){
                check = false;
                alert(`${i+1} Row Unit Is Not Selected`)
                break;
            }
            else if(order_store.order_list[i].FieldsModelId === ''){
                check = false;
                alert(`${i+1} Row Field Not Selected`)
                break;
            }
        }
        if (check) {
            // Excute Post Method
            const data = {
                orders: order_store.order_list,
                user: user_store?.user
            }
            await order_store.createSTF(data)
                .then(async (respond) => {
                    if (respond?.response?.status === 400) {
                        alert('MTF Cant Create');
                    }
                    else {
                        emit('setRowSize');
                        order_store.after_created = true
                    }
                }).catch((err) => {
                    console.log('from create Error component : ', err);
                })
        }
    }
}

</script>

<style lang="">
    
</style>