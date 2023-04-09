<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const toastOptions = computed(() => {
  return store.state.toast;
});
const toastDisable = computed(() => {
  return (store.state.toast.show = false);
});
const toastOff = computed(() => {
  if ((store.state.toast.show = true)) {
    setTimeout(function () {
      store.state.toast.show = false;
    }, 2000);
  } else {
    return false;
  }
});
</script>

<template>
  <div v-show="toastOff" class="toast fixed top-2 mx-2 sm:mx-0 left-0 w-full flex">
    <div v-if="toastOptions.type === 'error'"
      class="flex flex-row items-center rounded shadow-lg overflow-hidden w-full sm:w-11/12 md:max-w-2xl hover:shadow-xl bg-white hover:bg-green-50  transition-transform hover:scale-95 group">
      <div class="h-full py-8 px-2 bg-red-900	 group-hover:bg-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-700 group-hover:text-red-800" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div class="mx-4 flex-row w-full">
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-lg sm:text-xl font-bold text-gray-800 ">
            Error
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" @click="toastDisable"
            class="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <p class="text-xs sm:text-sm font-medium text-gray-500 pr-2 sm:pr-0 ">
          {{ toastOptions.msg }}
        </p>
      </div>
    </div>
    <div v-if="toastOptions.type === 'danger'"
      class="flex flex-row items-center rounded shadow-lg overflow-hidden w-full sm:w-11/12 md:max-w-2xl hover:shadow-xl bg-white hover:bg-yellow-50  transition-transform hover:scale-95 group">
      <div class="h-full py-8 px-2 bg-yellow-300 group-hover:bg-yellow-400 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-700 group-hover:text-yellow-800 " fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div class="mx-4 flex-row w-full">
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-lg sm:text-xl font-bold text-gray-800">
            Warning
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" @click="toastDisable"
            class="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-600 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <p class="text-xs sm:text-sm font-medium text-gray-500 pr-2 sm:pr-0 ">
          {{ toastOptions.msg }}
        </p>
      </div>
    </div>
    <div v-if="toastOptions.type === 'info'"
      class="flex flex-row items-center rounded shadow-lg overflow-hidden w-full sm:w-11/12 md:max-w-2xl hover:shadow-xl bg-white hover:bg-blue-50  transition-transform hover:scale-95 group">
      <div class="h-full py-8 px-2 bg-blue-300 group-hover:bg-blue-400 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-700 group-hover:text-blue-800 " fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div class="mx-4 flex-row w-full">
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-lg sm:text-xl font-bold text-gray-800 ">
            Info
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" @click="toastDisable"
            class="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-600 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <p class="text-xs sm:text-sm font-medium text-gray-500 pr-2 sm:pr-0 ">
          {{ toastOptions.msg }}
        </p>
      </div>
    </div>
    <div v-if="toastOptions.type === 'success'"
      class="flex flex-row items-center rounded shadow-lg overflow-hidden w-full sm:w-11/12 md:max-w-2xl hover:shadow-xl bg-white hover:bg-green-50  transition-transform hover:scale-95 group">
      <div class="h-full py-8 px-2 bg-green-300 group-hover:bg-green-400 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-700 group-hover:text-green-800 " fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div class="mx-4 flex-row w-full">
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-lg sm:text-xl font-bold text-gray-800 ">
            Sucsess
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" @click="toastDisable"
            class="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-600 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <p class="text-xs sm:text-sm font-medium text-gray-500 pr-2 sm:pr-0 ">
          {{ toastOptions.msg }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast {
  z-index: 99999999999999999999;
}

.toast-box {
  animation: fade-up 0.4s ease;
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(-30%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
