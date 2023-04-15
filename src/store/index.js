
import { defineStore } from "pinia";

import axios from 'axios';

const IndexStore = defineStore('IndexStore',{

    state : () => ({
        canvas_toggle : false
    }),

    getters:{
        GETCANVASTOGGLE : (state) => state.canvas_toggle,
    },

    actions:{
        TOGGLECANVAS () {
            this.canvas_toggle = !this.canvas_toggle;
        }
        

    }

})

export default IndexStore

