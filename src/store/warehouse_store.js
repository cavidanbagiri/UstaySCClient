
import { defineStore } from 'pinia';

import axios from 'axios';

const WarehouseStore = defineStore('WarehouseStore',{

    state:()=>({
        waiting_sms : [],
    }),

    getters:{
        GETWAITINGSMS : (state) => state.waiting_sms,
    },
    actions:{

        // Get Waiting SM
        async getWaitingsSMS () { 
            await axios.get('http://localhost:3000/warehouse/waitingsm')
            .then((respond)=>{
                console.log('respond is : ',respond.data);
                this.waiting_sms = respond.data
            }).catch((err)=>{
                console.log('Get Warehouse Waiting Error : ',err);
            })
        },

        // Post Accepted waiting to Warehouse
        async acceptWaitingSM(items){
            console.log('items is : ',items.value);
        }

    }

})

export default WarehouseStore;
