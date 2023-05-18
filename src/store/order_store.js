
import { defineStore } from "pinia";

import axios from 'axios';

const OrderStore = defineStore('OrderStore',{

    state: () => ({
        orders : null,
        filtered_orders : null,
        fields : [],
        show_mtf_toast : false,
        created_last_mtf : null,
        statistic_result : null,
        order_list : [],
    }),
    getters:{
        GETORDERSDATA : (state) => state.orders, 
        GETFILTEREDORDERSDATA : (state) => state.filtered_orders,
        GETFIELDSNAME : (state) => state.fields,
        GETSHOWMTFTOAST : (state) => state.show_mtf_toast,
        GETCREATEDLASTMTF : (state) => state.created_last_mtf
    },
    actions:{

        // Send MTF Data for creating MTF
        async createMTF(data){
            try{
                await axios.post('http://localhost:3000/order/stf', data)
                .then((respond)=>{
                    console.log('respond : ',respond);
                    this.created_last_mtf = respond.data
                    this.show_mtf_toast = true;
                    console.log('this.orderlist : ',this.order_list);
                    // this.order_list.
                    console.log('this.orderlist : ',this.order_list);
                    return respond;
                })
            }catch(err){
                return err
            }
        },

        async orderstoretemp(){
            console.log(':::', this.order_list);
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
        },

        // Get User Statistic Result
        async getUserStatisticResult(user_id){
            console.log('user id is : ',user_id);
            await axios.get(`http://localhost:3000/order/userstatistic/${user_id}`,)
            .then((respond)=>{
                this.statistic_result = respond.data;
            }).catch((err)=>{
                  console.log('Get Statistics Result Error : ',err);
            })
        }

    }

})

export default OrderStore