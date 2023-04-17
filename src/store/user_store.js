

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
            // console.log('user inform is : ',user_data);
            console.log('user login work and ');
            axios.post('http://localhost:3000/user/login',user_data)
            .then((respond)=>{
                // Set User Item In Storage
                sessionStorage.setItem('user',JSON.stringify(respond.data));
                // Get User Item From storage and write in state user;
                // this.user = JSON.parse(sessionStorage.getItem('user')); 
                // console.log('first : ',this.user);
                // this.user = respond.data;
                // console.log('second : ',this.user);
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