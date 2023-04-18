
import { defineStore } from "pinia";

import axios from 'axios';

const OrderStore = defineStore('OrderStore',{

    actions:{

        // Send MTF Data for creating MTF
        async createMTF(data){
            console.log('data : ',data);
            return await axios.post('http://localhost:3000/order/createmtf', data)
            .then((respond)=>{
                console.log('Respond Is : ',respond);
                return respond;
            })
            .catch((err)=>{
                console.log('Error Is : ',err);
            })
        }

    }

})

export default OrderStore