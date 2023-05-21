
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
        statistic_result_data : []
    }),
    getters:{
        GETORDERSDATA : (state) => state.orders, 
        GETFILTEREDORDERSDATA : (state) => state.filtered_orders,
        GETFIELDSNAME : (state) => state.fields,
        GETSHOWMTFTOAST : (state) => state.show_mtf_toast,
        GETCREATEDLASTMTF : (state) => state.created_last_mtf,
        GETORDERLIST : (state) => state.order_list
    },
    actions:{

        // Send MTF Data for creating MTF
        async createMTF(data){
            try{
                await axios.post('http://localhost:3000/order/stf', data)
                .then((respond)=>{
                    this.created_last_mtf = respond.data
                    this.show_mtf_toast = true;
                    this.$reset();
                    return respond;
                })
            }catch(err){
                return err
            }
        },

        // Reset order_list data
        $reset () {
            this.order_list.length = 0;
            console.log('state reset : ',this.order_list);
        },

        // Fetch Statistic Data
        async fetchStatisticResult (data) {
            await axios.get(`
                http://localhost:3000/order/getstatisticresult?user_id=${data.user_id}&result_value_id=${data.statistic_result_value}
            `)
            .then((respond)=>{
                // this.statistic_result_data = respond.data;
                // console.log('statistic_result : ',this.statistic_result_data);
                this.orders = respond.data;
                this.filtered_orders = respond.data;
                return respond;
            })
            .catch((err)=>{
                console.log('Statistics Result Error Is : ',err);
            })
        },

        // Show User MTF For User Page
        async showMTF(user) {
            await axios.get(`
                http://localhost:3000/order/showorders?id=${user?.id}&ProjectModelId=${user?.ProjectModelId}
            `)
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