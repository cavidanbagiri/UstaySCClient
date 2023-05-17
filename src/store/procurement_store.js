
import { defineStore } from "pinia";

import axios from 'axios';

const ProcurementStore = defineStore('ProcurementStore',{

    state: () => ({
        // Get All MTF where wait
        waiting_orders : null,
        // For Filter Waiting data show in client side 
        waiting_orders_filter: null,
        // For choosing MTF and sending for creating STF
        checked_values: [],
        // Show Error Message in when choosing different MTF's
        show_error_message : false,
        // When MTF choosing and Create STF btn clicked, Open Create STF Component
        tab_num : 0,
        // Choose STF and send backend for inserting `stfs` table
        creating_STF_datas: [],
        // Choose Companies Name
        companies_names: [],
        // Users Names
        procurement_users_names: [],
        // Get All SM for Project
        all_sms : [],
        // Get Processing SM
        processing_sms : null,
        // Get Receiving SM
        receiving_sms : null
    }),
    getters:{
        GETWAITINGORDERS : (state) => state.waiting_orders, 
        GETWAITINGORDERSFILTER : (state) => state.waiting_orders_filter, 
        GETCHECKEDVALUES : (state) => state.checked_values,
        GETERRORMESSAGE : (state) => state.show_error_message,
        GETTABNUM : (state) => state.tab_num,
        GETCREATINGSTFDATA : (state) => state.creating_STF_datas,
        GETCOMPANIESNAMES : (state) => state.companies_names,
        GETPROCUREMENTUSERSNAMES : (state) => state.procurement_users_names,
        GETALLSMS : (state) => state.all_sms
    },
    actions:{

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
                    console.log('respond is : ',respond);
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

        // Fetch Processing SM
        async fetchProcessingSM () {
            await axios.get('http://localhost:3000/procurement/processing')
            .then((respond)=>{
                this.processing_sms = respond.data;
            }).catch((err)=>{
                console.log('Het All Sms Errors : ',err);
            })
        },

        // Fetch Receiving SM
        async fetchReceivingSM () {
            await axios.get('http://localhost:3000/procurement/receiving')
            .then((respond)=>{
                this.receiving_sms = respond.data;
            }).catch((err)=>{
                console.log('Het All Sms Errors : ',err);
            })
        },

        // Get All SM
        async getAllSms () {
            await axios.get('http://localhost:3000/procurement')
            .then((respond)=>{
                this.all_sms = respond.data;
            }).catch((err)=>{
                console.log('Het All Sms Errors : ',err);
            })
        }

    }

})

export default ProcurementStore