
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
            console.log('Get Waiting SMS');
        }
    }

})

export default WarehouseStore;
