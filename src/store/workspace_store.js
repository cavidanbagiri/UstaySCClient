import { defineStore } from "pinia";

import axios from "axios";

const WorkSpaceStore = defineStore("WorkSpaceStore", {
  state: () => ({
    tasks: null,
    new_task_data: null, // new Task Data
    selecting_tasks: [],
    taskcreatedmethod: false,
    show_edit_task: false
  }),

  getters: {},

  actions: {

    // Fetch Tasks
    async fetchTasks() {
      try {
        await axios.get("http://localhost:3000/workspace/").then((respond) => {
          this.tasks = respond.data;
        });
      } catch (err) {}
    },

    // Create New Task
    async createNewTask(task_data) {
      try {
        await axios
          .post("http://localhost:3000/workspace/createnewtask", task_data)
          .then((respond) => {
            this.new_task_data = respond.data;
          });
      } catch (err) {}
    },

    // Find Task By Id
    async updateData(data){

      try{
        await axios.post("http://localhost:3000/workspace/updatetask",data)
        .then((respond)=>{
          console.log('update respond : ',respond);
        }).catch((err)=>{
          console.log('update error : ',err);
        })
      }
      catch(err){
        console.log('common error : ',err);
      }
    }

  },
});

export default WorkSpaceStore;
