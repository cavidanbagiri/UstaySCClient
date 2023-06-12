
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
        //Get All SM for Project
        all_sms : [],
        // SM Statistic Result
        sm_statistic_result : null,
        // For Showing Selecting Rows
        // selecting_rows : [],
        // Show After Created Message
        sm_success_show_message : false,
        // After Create SM, for unchecked all selected rows
        after_created : false 
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
        async createSTF (orders){
            try{
                await axios.post('http://localhost:3000/procurement/createstf', orders)
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