

import { defineStore } from "pinia";

import axios from 'axios';

const UserStore = defineStore('userStore',{
    
    state: () => ({
        user : null
    }),

    getters:{
        GETUSERINFORM : (state) => state.user
    },

    actions:{
        async LOGINSER (user_data) {
            await axios.post('http://localhost:3000/user/login',user_data)
            .then((respond)=>{
                // Set User Item In Storage
                sessionStorage.setItem('user',JSON.stringify(respond.data));
                this.user = respond.data;
                console.log('user is : ',this.user);
            })
            .catch((err)=>{
                console.log('User Login Error : ',err);
            })

        },
        async LOGOUTUSER () {
            this.user=null;
        }
    }

})


export default UserStore;