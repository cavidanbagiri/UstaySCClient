import { defineStore } from "pinia";

import axios from "axios";

const WorkSpaceStore = defineStore("WorkSpaceStore", {
  state: () => ({
    tasks: null,
    new_task_data: null, // new Task Data
  }),

  getters: {},

  actions: {
    // Fetch Tasks
    async fetchTasks() {
      try {
        await axios.get("http://localhost:3000/workspace/").then((respond) => {
          this.tasks = respond.data;
          console.log('tasks : ',this.tasks);
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
  },
});

export default WorkSpaceStore;
