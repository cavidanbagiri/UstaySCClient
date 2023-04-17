
import { defineStore } from "pinia";

const IndexStore = defineStore('IndexStore',{

    state : () => ({
        canvas_toggle : false,
        user_teleport : false,
    }),

    getters:{
        GETCANVASTOGGLE : (state) => state.canvas_toggle,
        GETUSERTELEPORT : (state) => state.user_teleport,
    },

    actions:{
        TOGGLECANVAS () {
            this.canvas_toggle = !this.canvas_toggle;
        },
        TOGGLEUSERTELEPORT () { 
            this.user_teleport = !this.user_teleport;
        }

    }

})

export default IndexStore

