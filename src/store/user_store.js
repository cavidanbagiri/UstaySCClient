

import { defineStore } from "pinia";

import axios from 'axios';

const UserStore = defineStore('userStore',{
    
    state: () => ({
        user : {}
    }),

    getters:{
        GETUSERINFORM : (state) => state.user
    },

    actions:{
        async LOGINSER (user_data) {
            // console.log('user inform is : ',user_data);
            axios.post('http://localhost:3000/user/login',user_data)
            .then((respond)=>{
                console.log('User Login Repsonse : '.respond);
            })
            .catch((err)=>{
                console.log('User Login Error : ',err);
            })

        },
        async LOGOUTUSER () {

        }
    }

})


export default UserStore;