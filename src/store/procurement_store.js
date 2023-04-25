
import { defineStore } from "pinia";

import axios from 'axios';

const ProcurementStore = defineStore('ProcurementStore',{

    state: () => ({
        waiting_orders : null,
        waiting_orders_filter: null,
        checked_values: [],
        show_error_message : false,
        tab_num : 0,
    }),
    getters:{
        GETWAITINGORDERS : (state) => state.waiting_orders, 
        GETWAITINGORDERSFILTER : (state) => state.waiting_orders_filter, 
        GETCHECKEDVALUES : (state) => state.checked_values,
        GETERRORMESSAGE : (state) => state.show_error_message,
        GETTABNUM : (state) => state.tab_num,
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
            // await axios.post('http://localhost:3000/procurement/createstf', orders)
            // .then((respond)=>{
            //     console.log(respond.data);
            // }).catch((err)=>{
            //     console.log('Waiting MTF Error : ',err);
            // })
        }
    }

})

export default ProcurementStore