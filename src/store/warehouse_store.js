import { defineStore } from "pinia";

import axios from "axios";

const WarehouseStore = defineStore("WarehouseStore", {
  state: () => ({
    waiting_sms: [],
    accepted_sms: [],
    processing_checked_values: [],
    tab_num: 0,
    received_sms: null,
    after_created: false,
    warehouse_statistic_result: null,
    processing_sm_headers: [],
    receiving_sm_headers: [],
  }),

  getters: {
    GETWAITINGSMS: (state) => state.waiting_sms,
    GETACCEPTEDITEMS: (state) => state.accepted_sms,
    GETCHECKEDVALUES: (state) => state.processing_checked_values,
    GETRECEIVEDVALUES: (state) => state.received_sms,
  },
  actions: {
    // Get Waiting SM
    async getWaitingsSMS() {
      await axios
        .get(`${import.meta.env.VITE_API}/warehouse/waitingsm`)
        .then((respond) => {
          this.waiting_sms = respond.data;
        })
        .catch((err) => {
          console.log("Get Warehouse Waiting Error : ", err);
        });
    },

    // Post Accepted waiting to Warehouse
    async acceptWaitingSM(data) {
      await axios
        .post(`${import.meta.env.VITE_API}/warehouse/accept`, data)
        .then((respond) => {
          this.accepted_sms = respond;
        })
        .catch((err) => {
          console.log("Accepted Materials Error From Warehouse Store : ", err);
        });
    },

    // Fetch Received Items and Show In Warehouse/received
    async fetchReceivingSM() {
      await axios
        .get(`${import.meta.env.VITE_API}/warehouse/receivedsm`)
        .then((respond) => {
          this.received_sms = respond.data;
          console.log("received items : ", this.received_sms);
        })
        .catch((err) => {
          console.log("Received Items Error : ", err);
        });
    },

    // Get Statistic Result
    async getStatisticResult() {
      console.log("called ");
      await axios
        .get(`${import.meta.env.VITE_API}/warehouse/statisticresult`)
        .then((respond) => {
          console.log("data : ", respond.data);
          this.warehouse_statistic_result = respond.data;
        })
        .catch((err) => {
          console.log("Get Statistic Result Error : ", err);
        });
    },

    // Fetch SM Statistics Result Data
    async getStatisticResultData(statistic_result_value) {
      await axios
        .get(
          `${
            import.meta.env.VITE_API
          }/warehouse/statisticresultdata?result_value_id=${statistic_result_value}`
        )
        .then((respond) => {
          this.waiting_sms = respond.data;
        })
        .catch((err) => {
          console.log("all sm Error : ", err);
        });
    },

    // Get Table Headers and show in STF
    async getProcessingSMHeaders() {
      if (this.waiting_sms) {
        for (let [key, value] of Object.entries(this.waiting_sms[0])) {
          if (key !== "id") {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "stf_num" ||
              key === "sm_num" ||
              key === "created_at" ||
              key === "situation" ||
              key === "material_name" ||
              key === "unit" ||
              key === "count" ||
              key === "sm_num" ||
              key === "username" ||
              key === "orderer" ||
              key === "sms_amount" ||
              key === "left_over_amount"
            ) {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.processing_sm_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.processing_sm_headers?.length; i++) {
          if (this.processing_sm_headers[i].name === "stf_num") {
            let temp = this.processing_sm_headers[0];
            this.processing_sm_headers[0] = this.processing_sm_headers[i];
            this.processing_sm_headers[i] = temp;
          }
          if (this.processing_sm_headers[i].name === "sm_num") {
            let temp = this.processing_sm_headers[1];
            this.processing_sm_headers[1] = this.processing_sm_headers[i];
            this.processing_sm_headers[i] = temp;
          }
          if (this.processing_sm_headers[i].name === "situation") {
            let temp = this.processing_sm_headers[2];
            this.processing_sm_headers[2] = this.processing_sm_headers[i];
            this.processing_sm_headers[i] = temp;
          }
        }
      }
    },

    // Get Table Headers and show in STF
    async getReceivingSMHeaders() {
      if (this.received_sms) {
        for (let [key, value] of Object.entries(this.received_sms[0])) {
          if (key !== "id") {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "stf_num" ||
              key === "sm_num" ||
              key === "created_at" ||
              key === "situation" ||
              key === "material_name" ||
              key === "unit" ||
              key === "count" ||
              key === "sm_num" ||
              key === "username" ||
              key === "orderer" ||
              key === "delivery_amount"
            ) {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.receiving_sm_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.receiving_sm_headers?.length; i++) {
          if (this.receiving_sm_headers[i].name === "stf_num") {
            let temp = this.receiving_sm_headers[0];
            this.receiving_sm_headers[0] = this.receiving_sm_headers[i];
            this.receiving_sm_headers[i] = temp;
          }
          if (this.receiving_sm_headers[i].name === "sm_num") {
            let temp = this.receiving_sm_headers[1];
            this.receiving_sm_headers[1] = this.receiving_sm_headers[i];
            this.receiving_sm_headers[i] = temp;
          }
          if (this.receiving_sm_headers[i].name === "situation") {
            let temp = this.receiving_sm_headers[2];
            this.receiving_sm_headers[2] = this.receiving_sm_headers[i];
            this.receiving_sm_headers[i] = temp;
          }
        }
      }
    },

    // Get Filtered Data For SM
    async getFilteredDataWaitingSMS(filtered_object) {
      const queries = this.createUrlQuery(filtered_object);

      await axios
        .get(
          `
              ${import.meta.env.VITE_API}/order/filteredobject${queries}
            `
        )
        .then((respond) => {
          this.waiting_sms = respond.data;
          return respond;
        })
        .catch((err) => {
          console.log("Error Is : ", err);
        });
    },

    // Get Filtered Data For SM
    async getFilteredDataReceivedSMS(filtered_object) {
        const queries = this.createUrlQuery(filtered_object);
  
        await axios
          .get(
            `
                ${import.meta.env.VITE_API}/order/filteredobject${queries}
              `
          )
          .then((respond) => {
            this.received_sms = respond.data;
            return respond;
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      },

    // Create URL query from table filter watcher
    createUrlQuery(filtered_object) {
      let queries = "";

      // Get All Keys from filtered_object
      for (let [key, value] of Object.entries(filtered_object)) {
        // If queries_string is empty and question mark
        if (queries === "") {
          queries += "?";
        }
        if (filtered_object[key] !== "") {
        }
        queries += `${key}=${filtered_object[key]}`;
        queries += "&";
      }
      queries = queries.slice(0, -1);
      console.log(queries);

      return queries;
    },
  },
});

export default WarehouseStore;
