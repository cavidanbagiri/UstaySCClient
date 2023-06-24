
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
        after_created : false,
        statistic_result_data : [],
        selecting_rows : [],
        row_inform_condition : false,
        row_detail_data : null,
        table_headers : [],
        tab_num : 0
    }),
    getters:{
        GETORDERSDATA : (state) => state.orders, 
        GETFILTEREDORDERSDATA : (state) => state.filtered_orders,
        GETFIELDSNAME : (state) => state.fields,
        GETSHOWMTFTOAST : (state) => state.show_mtf_toast,
        GETCREATEDLASTMTF : (state) => state.created_last_mtf,
        GETORDERLIST : (state) => state.order_list,
        GETROWINFORMCONDITION : (state) => state.row_inform_condition
    },
    actions:{

        // Send MTF Data for creating MTF
        async createSTF(data){
            try{
                await axios.post('http://localhost:3000/order/stf', data)
                .then((respond)=>{
                    this.created_last_mtf = respond.data
                    this.show_mtf_toast = true;
                    return respond;
                })
            }catch(err){
                return err
            }
        },

        // Get User Inform from dell
        async getRowDetails (stfid){
          await axios.get(`
            http://localhost:3000/order/getrowdetails/${stfid}
          `).then((respond)=>{
            this.row_detail_data = respond.data;
        }).catch((err)=>{
            console.log('row detail respond Error : ',err);
          })
        },

        // Fetch Statistic Data
        async fetchStatisticResult (data) {
            await axios.get(`
                http://localhost:3000/order/getstatisticresult?user_id=${data.user_id}&result_value_id=${data.statistic_result_value}
            `)
            .then((respond)=>{
                this.orders = respond.data;
                this.filtered_orders = respond.data;
                return respond;
            })
            .catch((err)=>{
                console.log('Statistics Result Error Is : ',err);
            })
        },

        // Show User MTF For User Page
        async showSTF(user) {
            console.log(`http://localhost:3000/order/showorders?id=${user?.id}&ProjectModelId=${user?.ProjectModelId}`);
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

        // Get Table Headers and show in STF
        async getHeaders(){
            if(this.orders?.length){

                // Add Header To Header List
                for(let [key, value] of Object.entries(this?.orders[0])){
                    if(key!=='id'){
                        let header_cond = {};
                        let val = key.charAt(0).toUpperCase() + key.slice(1)
                        val = val.split('_').join(' ');
                        if(key === 'stf_num' || key === 'sm_num' || key==='created_at' || key==='situation' || key==='material_type' || key==='material_name' || key==='unit' || key==='count'){
                            // header_cond[`${key}`] = true;
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = true;
                        }
                        else{
                            // header_cond[`${key}`] = false;
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = false;
                        }
                        this.table_headers.push(header_cond);
                    }
                }
                // Sort Headers
                for(let i = 0 ; i < this.table_headers?.length ; i ++){
                    if(this.table_headers[i].name === 'stf_num'){
                        let temp = this.table_headers[0];
                        this.table_headers[0] = this.table_headers[i];
                        this.table_headers[i] = temp;
                    }
                    if(this.table_headers[i].name === 'sm_num'){
                        let temp = this.table_headers[1];
                        this.table_headers[1] = this.table_headers[i];
                        this.table_headers[i] = temp;
                    }
                    if(this.table_headers[i].name === 'situation'){
                        let temp = this.table_headers[2];
                        this.table_headers[2] = this.table_headers[i];
                        this.table_headers[i] = temp;
                    }
                }
            }
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