<template>
  <div class="overflow-hidden">
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="flex flex-col items-center justify-between xl:flex-row">
        <div class="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
          >
            LOGIN ADMIN<br class="hidden md:block" />
          </h2>
          <router-link
            to="/checkspp"
            aria-label=""
            class="text-white hover:text-teal-accent-700"
          >

          
          </router-link>
        </div>
        <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
          <div class="relative bg-white">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
            >
              <defs>
                <pattern
                  id="766323e1-e594-4ffd-a688-e7275079d540"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <div class="relative bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3
                class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl bg-white"
              >
                login
              </h3>
              <form class="bg-white" @submit="(e) => login(e)">
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >Name</label
                  >
                  <input
                    v-model.trim="Admin.username"
                    placeholder="Masukan nama anda!"
                    required=""
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                  />
                </div>
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="email"
                    class="inline-block mb-1 font-medium bg-white"
                    >password</label
                  >
                  <input
                    v-model.trim="Admin.password"
                    placeholder="Masukan password anda!"
                    required=""
                    type="password"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                <div class="mt-4 mb-2 sm:mb-4 bg-white">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none disabled:bg-black-200 disabled:cursor-default"
                  >
                    login Sekarang!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr style="
  border: 10px solid transparent;
  border-radius: 100px;">
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { reactive, computed } from "vue";

const store = useStore();

const Admin = reactive({
  username: "",
  password: "",
});

const loading = computed(() => {
  return store.state.loading;
});

const login = async (e) => {
  e.preventDefault();
  if (!Admin.username || !Admin.password) {
  } else {
    store.dispatch("auth/login", Admin);
  }
};
</script>
