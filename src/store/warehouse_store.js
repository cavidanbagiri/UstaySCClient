
import { defineStore } from 'pinia';

import axios from 'axios';

const WarehouseStore = defineStore('WarehouseStore',{

    state:()=>({
        waiting_sms : [],
        accepted_items : [],
        checked_values : [],
        tab_num : 0,
        received_items : null,
    }),

    getters:{
        GETWAITINGSMS : (state) => state.waiting_sms,
        GETACCEPTEDITEMS : (state) => state.accepted_items,
        GETCHECKEDVALUES : (state) => state.checked_values,
        GETRECEIVEDVALUES : (state) => state.received_items
    },
    actions:{

        // Get Waiting SM
        async getWaitingsSMS () { 
            await axios.get('http://localhost:3000/warehouse/waitingsm')
            .then((respond)=>{
                this.waiting_sms = respond.data
                console.log(this.waiting_sms);
            }).catch((err)=>{
                console.log('Get Warehouse Waiting Error : ',err);
            })
        },

        // Post Accepted waiting to Warehouse
        async acceptWaitingSM(data){
            console.log('data  : ',data);
            await axios.post('http://localhost:3000/warehouse/accept',data)
            .then((respond)=>{
                this.accepted_items = respond;
                console.log('accepted items is : ',this.accepted_items);
            })
            .catch((err)=>{
                console.log('Accepted Materials Error From Warehouse Store : ',err);
            })
        },
        
        // Fetch Received Items and Show In Warehouse/received
        async fetchReceivingSM(){
            await axios.get(`http://localhost:3000/warehouse/receivedsm`)
            .then((respond)=>{
                this.received_items = respond.data;
                console.log('received items : ',this.received_items);
            }).catch((err)=>{
                console.log('Received Items Error : ',err);
            })
        }

    }

})

export default WarehouseStore;
