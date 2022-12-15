<template>
  <div class="overflow-hidden bg-gray-900">
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="flex flex-col items-center justify-between xl:flex-row">
        <div class="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
          >
            Sudah Punya Akun? <br class="hidden md:block" />
          </h2>
          <router-link
            to="/login"
            aria-label=""
            class="text-white hover:text-teal-accent-700"
          >
            Ayo Login Disini!
            <svg
              class="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path
                d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
              ></path>
            </svg>
          </router-link>
        </div>
        <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
          <div class="relative">
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
                Daftar
              </h3>
              <form @submit="e => register(e)" class="register-box bg-white">
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >Full Name</label
                  >
                  <input
                    v-model.trim="admin.fullname"
                    placeholder="fullname"
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="fullname"
                    name="fullname"
                    required=""
                  />
                </div>
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >Username</label
                  >
                  <input
                    v-model.trim="admin.username"
                    placeholder="username"
                    type="text"
                    required=""
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="username"
                    name="username"
                  />
                </div>
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="password"
                    class="inline-block mb-1 font-medium bg-white"
                    >Password</label
                  >
                  <input
                    v-model.trim="admin.password"
                    placeholder="password"
                    type="password"
                    required=""
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                  />
                </div>
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="password"
                    class="inline-block mb-1 font-medium bg-white"
                  >
                    no telp
                  </label>
                  <input
                    v-model.trim="admin.noTelp"
                    placeholder="password"
                    type="number"
                    required=""
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="notelp"
                    name="notelp"
                  />
                </div>
                <div class="mt-4 mb-2 sm:mb-4 bg-white">
                  <button
                    :disabled="loading"
                    type="submit"
                    button
                    class="bg-white inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none disabled:bg-black-200 disabled:cursor-default"
                  >
                    Daftar Sekarang!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';

const store = useStore();

const admin = reactive({
  username: '',
  password: '',
  fullname: '',
  noTelp: '',
});
const loading = computed(() => {
  return store.state.loading;
});

const register = async e => {
  e.preventDefault();

  if (!admin.username || !admin.password) {
  } else {
    store.dispatch('auth/register', admin);
  }
};
</script>
