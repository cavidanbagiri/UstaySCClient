
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
        async getWaitingsSMS () { 
            await axios.get('http://localhost:3000/warehouse/waitingsm')
            .then((respond)=>{
                console.log('respond is : ',respond.data);
                this.waiting_sms = respond.data
            }).catch((err)=>{
                console.log('Get Warehouse Waiting Error : ',err);
            })
        }
    }

})

export default WarehouseStore;
