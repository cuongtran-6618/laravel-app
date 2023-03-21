<script setup>
import { onMounted, computed } from "vue";
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";

const currentTimeNow = getCurrentTimeObject();
const currentHour = ref(currentTimeNow.hour);
const currentMinute = ref(currentTimeNow.minute);
const currentSecond = ref(currentTimeNow.second);
const error = ref(null);
const errorMessage = "Your givent time is invalid, please try again";

const userAuthStore = useAuthStore();

onMounted(async () => {
  setInterval(() => refreshTime(), 1000);
  await userAuthStore.getUser();
});

/**
 * return the current time
 * @return string
 */
const displayCurrentTime = computed({
  get() {
    return `${formatTime(currentHour.value)}:${formatTime(
      currentMinute.value
    )}:${formatTime(currentSecond.value)}`;
  },
  set(newValue) {
    [currentHour.value, currentMinute.value, currentSecond.value] =
      newValue.split(":");
  },
});

function updateTime() {
  const givenHour = document.getElementById("hour").value;
  const givenMinute = document.getElementById("minute").value;
  const givenSecond = document.getElementById("second").value;

  if (isNaN(givenHour) || isNaN(givenMinute) || isNaN(givenSecond)) {
    error.value = errorMessage;
  }

  if (givenHour > 24 || givenMinute > 60 || givenSecond > 60) {
    error.value = errorMessage;
  }

  currentHour.value = givenHour;
  currentMinute.value = givenMinute;
  currentSecond.value = givenSecond;

  // reset the input fields
  setTimeout(() => {
    document.getElementById("hour").value = 0;
    document.getElementById("minute").value = 0;
    document.getElementById("second").value = 0;
    error.value = null;
  }, 3000);
}

/** refresh computed property to update current time */
function refreshTime() {
  const timeObj = getCurrentTimeObject();
  displayCurrentTime.value = `${formatTime(timeObj.hour)}:${formatTime(
    timeObj.minute
  )}:${formatTime(timeObj.second)}`;
}

function getCurrentTimeObject(givenTime = "") {
  const currentTime = new Date();
  return {
    hour: currentTime.getHours(),
    minute: currentTime.getMinutes(),
    second: currentTime.getSeconds(),
  };
}

/**
 * Format the current time
 * @param {int} time
 */
function formatTime(time) {
  if (time > 9) {
    return time;
  }
  return `${time}`.padStart(2, "0");
}
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="flex flex-wrap justify-center">
      <main class="w-full max-w-4xl">
        <div class="max-w-3xl mx-auto flex flex-col">
          <div class="mb-8 p-8 md:p-12 lg:p-16 bg-white shadow-md">
            <header class="mb-12 text-left">
              <h1 class="text-5xl font-bold strong leading-snug">
                <strong class="text-blue-700">Helpoin</strong> tapa myydä auto
                parhaaseen hintaan.
              </h1>
            </header>
            <div>
              <div v-if="userAuthStore.user">
                <p class="text-center">
                  <label class="text-xl strong font-bold">Tervetuloa: </label
                  ><span class="text-blue-700 strong font-semibold">{{
                    userAuthStore.user.name
                  }}</span>
                </p>
                <br />
                <p class="text-center">The current time is {{ displayCurrentTime }}.</p>
                <br />
                <br />
                <div class="flex flex-row justify-center gap-4">
                  <div>
                    <input
                      id="hour"
                      type="number"
                      min="0"
                      max="24"
                      placeholder="00"
                      class="text-base font-normal leading-relaxed block w-full border rounded px-4 py-3.5 transition focus:outline-none focus:ring appearance-none placeholder-gray-500 border-gray bg-white mb-4"
                    />
                  </div>
                  <div>
                    <input
                      id="minute"
                      type="number"
                      min="0"
                      max="60"
                      placeholder="00"
                      class="text-base font-normal leading-relaxed block w-full border rounded px-4 py-3.5 transition focus:outline-none focus:ring appearance-none placeholder-gray-500 border-gray bg-white mb-4"
                    />
                  </div>
                  <div>
                    <input
                      id="second"
                      type="number"
                      min="0"
                      max="60"
                      placeholder="00"
                      class="text-base font-normal leading-relaxed block w-full border rounded px-4 py-3.5 transition focus:outline-none focus:ring appearance-none placeholder-gray-500 border-gray bg-white mb-4"
                    />
                  </div>                  
                  <p v-if="error" style="color: red">{{ error }}</p>
                </div>
                <div class="mt-8 text-center">
                    <button
                      type="submit"
                      class="button bg-blue-700 text-white py-4 px-8 rounded-full hover:-translate-y-1.5 mx-auto"
                      @click="updateTime"
                    >
                      Päivitysaika
                    </button>
                  </div>
              </div>
              <div v-else>
                <p>It required to be login</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
