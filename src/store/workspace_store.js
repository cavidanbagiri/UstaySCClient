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
        await axios.get(`${import.meta.env.VITE_API}/workspace`).then((respond) => {
          this.tasks = respond.data;
          console.log('task is : ',this.tasks);
        });
      } catch (err) {}
    },

    // Create New Task
    async createNewTask(task_data) {
      try {
        await axios
          .post(`${import.meta.env.VITE_API}/workspace/createnewtask`, task_data)
          .then((respond) => {
            this.new_task_data = respond.data;
          });
      } catch (err) {}
    },

    // Find Task By Id
    async updateData(data){

      try{
        await axios.post(`${import.meta.env.VITE_API}/workspace/updatetask`,data)
        .then((respond)=>{
          console.log('update respond : ',respond);
        }).catch((err)=>{
          console.log('update error : ',err);
        })
      }
      catch(err){
        console.log('common error : ',err);
      }
    },

    // Remove Task From Workspace Main Table
    async removeTaskFromMain(data) {
      console.log('sending data is : ',data);
      try{
        await axios.post(`${import.meta.env.VITE_API}/workspace/deletetask`,data)
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
