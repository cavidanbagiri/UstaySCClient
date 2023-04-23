
import { defineStore } from "pinia";

import axios from 'axios';

const OrderStore = defineStore('OrderStore',{

    state: () => ({
        orders : null,
        filtered_orders : null,
        fields : [],
        show_mtf_toast : true,
        created_last_mtf : null
    }),
    getters:{
        GETORDERSDATA : (state) => state.orders, 
        GETFILTEREDORDERSDATA : (state) => state.filtered_orders,
        GETFIELDSNAME : (state) => state.fields,
        GETSHOWMTFTOAST : (state) => state.show_mtf_toast
    },
    actions:{

        // Send MTF Data for creating MTF
        async createMTF(data){
            return await axios.post('http://localhost:3000/order/mtf', data)
            .then((respond)=>{
                this.created_last_mtf = respond.data
                console.log('created mtf is : ',this.created_last_mtf);
                return respond;
            })
            .catch((err)=>{
                console.log('Error Is : ',err);
            })
        },

        // Show User MTF For User Page
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
        },

        // Get Fields Name
        async fetchFieldsNames(ProjectModelId){
            await axios.get(`http://localhost:3000/order/getfields/${ProjectModelId}`)
            .then((respond)=>{
                this.fields = respond.data;
            })
            .catch((err)=>{
                console.log('Error Is : ',err);
            })
        }


    }

})

export default OrderStore