
import { defineStore } from 'pinia';

import axios from 'axios';

const WarehouseStore = defineStore('WarehouseStore',{

    state:()=>({
        waiting_sms : [],
        accepted_items : [],
    }),

    getters:{
        GETWAITINGSMS : (state) => state.waiting_sms,
        GETACCEPTEDITEMS : (state) => state.accepted_items,
    },
    actions:{

        // Get Waiting SM
        async getWaitingsSMS () { 
            await axios.get('http://localhost:3000/warehouse/waitingsm')
            .then((respond)=>{
                this.waiting_sms = respond.data
            }).catch((err)=>{
                console.log('Get Warehouse Waiting Error : ',err);
            })
        },

        // Post Accepted waiting to Warehouse
        async acceptWaitingSM(items){
            // console.log(items.value);
            await axios.post('http://localhost:3000/warehouse/accept',items.value)
            .then((respond)=>{
                this.accepted_items = respond;
                console.log('accepted items is : ',this.accepted_items);
            })
            .catch((err)=>{
                console.log('Accepted Materials Error From Warehouse Store : ',err);
            })
        }

    }

})

export default WarehouseStore;
