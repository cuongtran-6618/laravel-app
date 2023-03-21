<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const userAuthStore = useAuthStore();

const form = ref({
  email: "",
  password: "",
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
                Kirjaudu sisään
              </p>
              <h4 class="text-4xl font-bold">Kirjaudu sisään</h4>
            </header>
            <form @submit.prevent="userAuthStore.handleLogin(form)">
              <div>
                <label class="block w-full">
                  <span
                    class="mb-2 inline-block text-base leading-none font-medium lg:text-lg"
                    >Sähköposti</span
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    v-model="form.email"
                    placeholder="Sähköposti"
                    class="text-base font-normal leading-relaxed block w-full border rounded px-4 py-3.5 transition focus:outline-none focus:ring appearance-none placeholder-gray-500 border-gray bg-white mb-4"
                    required
                  />
                </label>
              </div>
              <div>
                <label class="block w-full">
                  <span
                    class="mb-2 inline-block text-base leading-none font-medium lg:text-lg"
                    >Salasana</span
                  >
                  <input
                    type="password"
                    id="password"
                    name="password"
                    v-model="form.password"
                    placeholder="Salasana"
                    class="text-base font-normal leading-relaxed block w-full border rounded px-4 py-3.5 transition focus:outline-none focus:ring appearance-none placeholder-gray-500 border-gray bg-white mb-4"
                    required
                  />
                </label>
              </div>
              <div class="mt-8 text-center">
                <button type="submit" class="button bg-blue-700 text-white py-4 px-8 rounded-full hover:-translate-y-1.5">Kirjaudu sisään</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
