<script setup>
const navItemClass =
  "pt-13px pb-15px px-5 inline-block text-base leading-none text-center rounded-full transition ring-2 ring-transparent border-transparent text-black ring-transparent border-2 border-gray-100 hover:bg-gray-900 hover:bg-opacity-6 text-center";
const navItemContainerClass = "p-0.5 whitespace-nowrap relative";
</script>
<template>
  <div class="px-4 bg-white">
    <nav class="flex items-center justify-between">
      <div class="flex-shrink-0 py-8">
        <span class="text-2xl font-bold">AutoVex</span>
      </div>
      <div class="flex h-16 items-center justify-between push-right">
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <ul class="flex items-center ml-auto text-xl">
              <li class="p-0.5 whitespace-nowrap relative">
                <router-link to="/" class="py-4 px-5 inline-block text-base leading-none rounded-full transition ring-2 border-transparent text-black ring-transparent border-2 border-gray-100 hover:bg-gray-100 hover:bg-opacity-6 text-center"
                  >Home</router-link
                >
              </li>
              <li class="p-0.5 whitespace-nowrap relative">
                <router-link to="/login" class="py-4 px-5 inline-block text-base leading-none rounded-full transition ring-2 border-transparent text-black ring-transparent border-2 border-gray-100 hover:bg-gray-100 hover:bg-opacity-6 text-center"
                  >Login</router-link
                >
              </li>
              <li class="p-0.5 whitespace-nowrap relative">
                <router-link to="/register" class="py-4 px-5 inline-block text-base leading-none rounded-full transition ring-2 border-transparent text-black ring-transparent border-2 border-gray-100 hover:bg-gray-100 hover:bg-opacity-6 text-center"
                  >Register</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
