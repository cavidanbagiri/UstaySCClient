
import { defineStore } from "pinia";

import axios from 'axios';

const OrderStore = defineStore('OrderStore',{

    actions:{

        // Send MTF Data for creating MTF
        async createMTF(){
            const body = {
                mtf_num:'SRU.2023.0001',
                material_type: 'Consumable',
                material_name: 'Kesme Tas 115mm Karbonsteel',
                material_name_other: 'Cutting Disc 115mm Carbonsteel',
                count: 1000,
                unit: 'Adet',
                field: 'SRU Area Gazprom',
                comment: 'Urgently Request',
                "ProjectModelId":1,
                "UserModelId":1,
                "DepartmentModelId":1
            }
            await axios.post('http://localhost:3000/order/createmtf', body)
            .then((respond)=>{
                console.log('Respond Is : ',respond);
            })
            .catch((err)=>{
                console.log('Error Is : ',err);
            })
        }

    }

})

export default OrderStore