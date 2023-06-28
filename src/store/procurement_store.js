
import { defineStore } from "pinia";

import axios from 'axios';

const ProcurementStore = defineStore('ProcurementStore',{

    state: () => ({
        // Get All MTF where wait
        waiting_orders : null,
        // For Filter Waiting data show in client side 
        waiting_orders_filter: null,
        // For choosing STF and sending for creating STF
        checked_values: [],
        // For choosing STF and sending for creating SM
        checked_values_sm: [],
        // Disable Or Enable Create SM Button
        toggle_createsm : false,
        // When MTF choosing and Create STF btn clicked, Open Create STF Component
        tab_num : 0,
        // Choose STF and send backend for inserting `stfs` table
        creating_STF_datas: [],
        // Choose Companies Name
        companies_names: [],
        // Users Names
        procurement_users_names: [],
        // Get Statistic Result and Show Analyz Component
        statistic_result : null,
        // Get All STF
        all_stf : [],
        filtered_stf : [],
        //Get All SM for Project
        all_sms : [],
        // SM Statistic Result
        sm_statistic_result : null,
        // For Showing Selecting Rows
        // selecting_rows : [],
        // Show After Created Message
        sm_success_show_message : false,
        // After Create SM, for unchecked all selected rows
        after_created : false,
        // For Showing STF Table Headers
        stf_table_headers : [],
        // For Showing SM Table Headers
        sm_table_headers : [],

    }),
    getters:{
        GETWAITINGORDERS : (state) => state.waiting_orders, 
        GETWAITINGORDERSFILTER : (state) => state.waiting_orders_filter, 
        GETCHECKEDVALUES : (state) => state.checked_values,
        GETTOGGLEDISABLESM : (state) => state.toggle_createsm,
        GETTABNUM : (state) => state.tab_num,
        GETCREATINGSTFDATA : (state) => state.creating_STF_datas,
        GETCOMPANIESNAMES : (state) => state.companies_names,
        GETPROCUREMENTUSERSNAMES : (state) => state.procurement_users_names,
    },
    actions:{
        
        // Get Table Headers and show in STF
        async getSTFHeaders(){
            if(this.all_stf){
                for(let [key, value] of Object.entries(this.all_stf[0])){
                    if(key!=='id'){
                        let header_cond = {};
                        let val = key.charAt(0).toUpperCase() + key.slice(1)
                        val = val.split('_').join(' ');
                        if(key === 'stf_num' || key === 'sm_num' || key==='created_at' || key==='situation'  || key==='material_name' || key==='unit' || key==='count'){
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = true;
                        }
                        else{
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = false;
                        }
                        this.stf_table_headers.push(header_cond);
                    }
                }
                // Sort Headers
                for(let i = 0 ; i < this.stf_table_headers?.length ; i ++){
                    if(this.stf_table_headers[i].name === 'stf_num'){
                        let temp = this.stf_table_headers[0];
                        this.stf_table_headers[0] = this.stf_table_headers[i];
                        this.stf_table_headers[i] = temp;
                    }
                    if(this.stf_table_headers[i].name === 'sm_num'){
                        let temp = this.stf_table_headers[1];
                        this.stf_table_headers[1] = this.stf_table_headers[i];
                        this.stf_table_headers[i] = temp;
                    }
                    if(this.stf_table_headers[i].name === 'situation'){
                        let temp = this.stf_table_headers[2];
                        this.stf_table_headers[2] = this.stf_table_headers[i];
                        this.stf_table_headers[i] = temp;
                    }
                }
            }
        },
        // Get Table Headers and show in STF
        async getSMHeaders(){
            if(this.all_sms){
                for(let [key, value] of Object.entries(this.all_sms[0])){
                    if(key!=='id'){
                        let header_cond = {};
                        let val = key.charAt(0).toUpperCase() + key.slice(1)
                        val = val.split('_').join(' ');
                        // const val = key.charAt(0).toUpperCase() + key.slice(1);
                        if(key === 'stf_num' || key === 'sm_num' || key==='created_at' || key==='situation'  || key==='material_name' || key==='unit' || key==='count' ||
                            key==='sm_num' || key==='username' || key==='orderer'
                        ){
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = true;
                        }
                        else{
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = false;
                        }
                        this.sm_table_headers.push(header_cond);
                    }
                }
                // Sort Headers
                for(let i = 0 ; i < this.sm_table_headers?.length ; i ++){
                    if(this.sm_table_headers[i].name === 'stf_num'){
                        let temp = this.sm_table_headers[0];
                        this.sm_table_headers[0] = this.sm_table_headers[i];
                        this.sm_table_headers[i] = temp;
                    }
                    if(this.sm_table_headers[i].name === 'sm_num'){
                        let temp = this.sm_table_headers[1];
                        this.sm_table_headers[1] = this.sm_table_headers[i];
                        this.sm_table_headers[i] = temp;
                    }
                    if(this.sm_table_headers[i].name === 'situation'){
                        let temp = this.sm_table_headers[2];
                        this.sm_table_headers[2] = this.sm_table_headers[i];
                        this.sm_table_headers[i] = temp;
                    }
                }
            }
        },

        // Get STF Statistics Result
        async getSTFStatisticsResult (){
            await axios.get(`http://localhost:3000/procurement/stfstatisticsresult`)
            .then((respond)=>{
                this.statistic_result = respond.data;
            }).catch((err)=>{
                console.log('statistics result Error : ',err);
            })
        },

        // Fetch All STF
        async fetchAllSTF(){
            await axios.get(`http://localhost:3000/procurement/allstf`)
            .then((respond)=>{
                this.all_stf = respond.data;
                this.filtered_stf = this.all_stf;
                console.log('all stf : ',this.all_stf);
            }).catch((err)=>{
                console.log('all stf Error : ',err);
            })
        },

        // Fetch STF Statistics Result Data
        async fetchStatisticResultData(statistic_result_value){
            await axios.get(`http://localhost:3000/procurement/getstatisticresult?result_value_id=${statistic_result_value}`)
            .then((respond)=>{
                this.all_stf = respond.data;
            }).catch((err)=>{
                console.log('all stf Error : ',err);
            })
        },

        // Fetch All SMS
        async fetchAllSM(){
            await axios.get(`http://localhost:3000/procurement/allsm`)
            .then((respond)=>{
                this.all_sms = respond.data;
            }).catch((err)=>{
                console.log('all stf Error : ',err);
            })
        },
        // Get SM Statistics Result
        async getSMStatisticsResult (){
            await axios.get(`http://localhost:3000/procurement/smstatisticsresult`)
            .then((respond)=>{
                this.sm_statistic_result = respond.data;
            }).catch((err)=>{
                console.log('statistics result Error : ',err);
            })
        },
        // Fetch SM Statistics Result Data
        async fetchStatisticResultDataSM(statistic_result_value){
            await axios.get(`http://localhost:3000/procurement/getstatisticresultsm?result_value_id=${statistic_result_value}`)
            .then((respond)=>{
                this.all_sms = respond.data;
            }).catch((err)=>{
                console.log('all sm Error : ',err);
            })
        },

        // Get Waiting MTF
        async showWaitingMTF (){
            await axios.get('http://localhost:3000/procurement/waitingmtf')
            .then((respond)=>{
                this.waiting_orders = respond.data;
                this.waiting_orders_filter = respond.data
            }).catch((err)=>{
                console.log('Waiting MTF Error : ',err);
            })
        },

        // Create STF
        async createSM (orders){
            try{
                await axios.post('http://localhost:3000/procurement/createsm', orders)
                .then((respond)=>{
                    return respond;
                })
            }
            catch(err){
                return err;
            }

        },

        // Get Companies Names
        async getCompaniesNames (){
            await axios.get('http://localhost:3000/procurement/companies')
            .then((respond)=>{
                this.companies_names = respond.data
            }).catch((err)=>{
                console.log('Getting Companies Names Errors : ', err);
            })
        },

        // Get Procurement Users Names
        async getProcurementUsersNames () {
            await axios.get('http://localhost:3000/procurement/users')
            .then((respond)=>{
                this.procurement_users_names = respond.data
            }).catch((err)=>{
                console.log('Get Users Names Errors : ',err);
            })
        },

    }

})

export default ProcurementStore