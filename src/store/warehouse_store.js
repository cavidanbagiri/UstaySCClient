
import { defineStore } from 'pinia';

import axios from 'axios';

const WarehouseStore = defineStore('WarehouseStore',{

    state:()=>({
        waiting_sms : [],
        filtered_sms : [],
        accepted_items : [],
        processing_checked_values : [],
        tab_num : 0,
        received_items : null,
        after_created : false,
        processing_sm_headers : [],
        receiving_sm_headers : [],
    }),

    getters:{
        GETWAITINGSMS : (state) => state.waiting_sms,
        GETACCEPTEDITEMS : (state) => state.accepted_items,
        GETCHECKEDVALUES : (state) => state.processing_checked_values,
        GETRECEIVEDVALUES : (state) => state.received_items
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
        async acceptWaitingSM(data){
            console.log('data  : ',data);
            await axios.post('http://localhost:3000/warehouse/accept',data)
            .then((respond)=>{
                this.accepted_items = respond;
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
        },

        // Get Table Headers and show in STF
        async getProcessingSMHeaders(){
            if(this.waiting_sms){
                for(let [key, value] of Object.entries(this.waiting_sms[0])){
                    if(key!=='id'){
                        let header_cond = {};
                        let val = key.charAt(0).toUpperCase() + key.slice(1)
                        val = val.split('_').join(' ');
                        if(key === 'stf_num' || key === 'sm_num' || key==='created_at' || key==='situation'  || key==='material_name' || key==='unit' || key==='count' ||
                            key==='sm_num' || key==='username' || key==='orderer'){
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = true;
                        }
                        else{
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = false;
                        }
                        this.processing_sm_headers.push(header_cond);
                    }
                }
                // Sort Headers
                for(let i = 0 ; i < this.processing_sm_headers?.length ; i ++){
                    if(this.processing_sm_headers[i].name === 'stf_num'){
                        let temp = this.processing_sm_headers[0];
                        this.processing_sm_headers[0] = this.processing_sm_headers[i];
                        this.processing_sm_headers[i] = temp;
                    }
                    if(this.processing_sm_headers[i].name === 'sm_num'){
                        let temp = this.processing_sm_headers[1];
                        this.processing_sm_headers[1] = this.processing_sm_headers[i];
                        this.processing_sm_headers[i] = temp;
                    }
                    if(this.processing_sm_headers[i].name === 'situation'){
                        let temp = this.processing_sm_headers[2];
                        this.processing_sm_headers[2] = this.processing_sm_headers[i];
                        this.processing_sm_headers[i] = temp;
                    }
                }
            }
        },

        // Get Table Headers and show in STF
        async getReceivingSMHeaders(){
            if(this.received_items){
                for(let [key, value] of Object.entries(this.received_items[0])){
                    if(key!=='id'){
                        let header_cond = {};
                        let val = key.charAt(0).toUpperCase() + key.slice(1)
                        val = val.split('_').join(' ');
                        if(key === 'stf_num' || key === 'sm_num' || key==='created_at' || key==='situation'  || key==='material_name' || key==='unit' || key==='count' ||
                            key==='sm_num' || key==='username' || key==='orderer'){
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = true;
                        }
                        else{
                            header_cond['showname'] = `${val}`
                            header_cond['name'] = `${key}`;
                            header_cond['value'] = false;
                        }
                        this.receiving_sm_headers.push(header_cond);
                    }
                }
                // Sort Headers
                for(let i = 0 ; i < this.receiving_sm_headers?.length ; i ++){
                    if(this.receiving_sm_headers[i].name === 'stf_num'){
                        let temp = this.receiving_sm_headers[0];
                        this.receiving_sm_headers[0] = this.receiving_sm_headers[i];
                        this.receiving_sm_headers[i] = temp;
                    }
                    if(this.receiving_sm_headers[i].name === 'sm_num'){
                        let temp = this.receiving_sm_headers[1];
                        this.receiving_sm_headers[1] = this.receiving_sm_headers[i];
                        this.receiving_sm_headers[i] = temp;
                    }
                    if(this.receiving_sm_headers[i].name === 'situation'){
                        let temp = this.receiving_sm_headers[2];
                        this.receiving_sm_headers[2] = this.receiving_sm_headers[i];
                        this.receiving_sm_headers[i] = temp;
                    }
                }
            }
        },

    }

})

export default WarehouseStore;
