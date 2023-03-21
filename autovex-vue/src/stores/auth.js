import { defineStore } from "pinia";
import axios from "axios";

// name should be start with use.. this is a convntion of pinia
export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    currentTime: new Date(),
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async getToken() {
      try {
        await axios.get("/sanctum/csrf-cookie");
      } catch (err) {
        console.error(`Error getting token ${err.message}`);
      }
    },

    async getUser() {
      try {
        await this.getToken();
        const response = await axios.get("api/user");
        this.authUser = response.data;
      } catch (err) {
        console.error(`Error get use ${err.message}`);
      }
    },

    async handleLogin(formData) {
      try {
        await this.getToken();
        await axios.post("/login", {
          email: formData.email,
          password: formData.password,
        });

        this.router.push("/");
      } catch (err) {
        console.error(`Error when login ${err.message}`);
      }
    },

    async handleRegister(form) {
      try {
        await axios.post("/register", {
          name: form.name,
          email: form.email,
          password: form.password,
          password_confirmation: form.password_confirmation,
        });

        this.router.push("/");
      } catch (err) {
        console.error(`Error when login ${err.message}`);
      }
    },
  },
});
