<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const userAuthStore = useAuthStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="flex flex-wrap justify-center">
      <main class="w-full max-w-4xl">
        <div class="max-w-lg mx-auto flex flex-col">
          <div class="mb-8 p-8 md:p-12 lg:p-16 bg-white shadow-md">
            <header class="mb-12 text-center">
              <p
                class="mb-2 text-sm leading-1 lg:text-base text-blue-900 font-medium"
              >
                Rekisteröinti
              </p>
              <h4 class="text-4xl font-bold">Rekisteröinti</h4>
            </header>
            <form @submit.prevent="userAuthStore.handleRegister(form)">
              <div class="w-full">
                <label class="block w-full">
                  <span
                    class="mb-2 inline-block text-base leading-none font-medium lg:text-lg"
                    >Yrityksen nimi</span
                  >
                  <input
                    type="name"
                    id="name"
                    name="name"
                    class="text-base font-normal leading-relaxed block w-full border rounded px-4 py-3.5 transition focus:outline-none focus:ring appearance-none placeholder-gray-500 border-gray bg-white mb-4"
                    placeholder="Yrityksen nimi"
                    v-model="form.name"
                  />
                </label>
              </div>
              <div class="w-full">
                <label class="block w-full">
                  <span
                    class="mb-2 inline-block text-base leading-none font-medium lg:text-lg"
                    >Sähköposti</span
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="text-base font-normal leading-relaxed block w-full border rounded px-4 py-3.5 transition focus:outline-none focus:ring appearance-none placeholder-gray-500 border-gray bg-white mb-4"
                    placeholder="nimi@autoliike.fi"
                    v-model="form.email"
                  />
                </label>
              </div>
              <div class="w-full flex flex-row gap-4">
                <div class="w-1/2">
                  <label class="block w-full">
                    <span
                      class="mb-2 inline-block text-base leading-none font-medium lg:text-lg"
                      >Salasana</span
                    >
                    <input
                      type="password"
                      id="password"
                      name="password"
                      class="text-base font-normal leading-relaxed block w-full border rounded px-4 py-3.5 transition focus:outline-none focus:ring appearance-none placeholder-gray-500 border-gray bg-white mb-4"
                      v-model="form.password"
                  /></label>
                </div>
                <div class="w-1/2">
                  <label class="block w-full">
                    <span
                      class="mb-2 inline-block text-base leading-none font-medium lg:text-lg"
                      >Salasana uudelleen</span
                    >
                    <input
                      type="password"
                      id="password_confirmation"
                      name="password_confirmation"
                      class="text-base font-normal leading-relaxed block w-full border rounded px-4 py-3.5 transition focus:outline-none focus:ring appearance-none placeholder-gray-500 border-gray bg-white mb-4"
                      v-model="form.password_confirmation"
                  /></label>
                </div>
              </div>
              <div class="mt-8 text-center">
                <button type="submit" class="button bg-blue-700 text-white py-4 px-8 rounded-full hover:-translate-y-1.5">Rekisteröidy</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
