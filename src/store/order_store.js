
import { defineStore } from "pinia";

import axios from 'axios';

const OrderStore = defineStore('OrderStore',{

    state: () => ({
        orders : null,
        filtered_orders : null
    }),
    getters:{
        GETORDERSDATA : (state) => state.orders, 
        GETFILTEREDORDERSDATA : (state) => state.filtered_orders, 
    },
    actions:{

        // Send MTF Data for creating MTF
        async createMTF(data){
            return await axios.post('http://localhost:3000/order/mtf', data)
            .then((respond)=>{
                return respond;
            })
            .catch((err)=>{
                console.log('Error Is : ',err);
            })
        },

        // Show User MTF
        async showMTF(user) {
            await axios.get(`http://localhost:3000/order/showorders?id=${user?.id}&ProjectModelId=${user?.ProjectModelId}`)
            .then((respond)=>{
                this.orders = respond.data;
                this.filtered_orders = respond.data;
                return respond;
            })
            .catch((err)=>{
                console.log('Error Is : ',err);
            })

        }   

    }

})

export default OrderStore