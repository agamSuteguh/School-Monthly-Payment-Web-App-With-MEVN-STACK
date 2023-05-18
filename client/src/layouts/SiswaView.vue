<template>
  <div class="bg-gray-900">
    <div
      class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div
        class="relative flex items-center justify-between lg:justify-center lg:space-x-16"
      >
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <div class="search">
           
          </div>
          <li>
            <router-link
            :to="{ name: 'LaporanSiswa'}"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              ></router-link
            >
          </li>
        
          <li>
            <router-link
            :to="{ name: 'LaporanSiswa'}"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Laporan </router-link
            >
          </li>
        </ul>
        <router-link
        :to="{ name: 'Indexs'}"
          aria-label="Merk"
          title="BM3"
          class="inline-flex items-center"
        >
          <svg
            class="w-8 text-teal-accent-400"
            viewBox="0 0 24 24"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke="white"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span
            class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
            >BM3 Spp</span
          >
          </router-link
            >
        <ul class="flex items-center hidden space-x-8 lg:flex">
        
         
          <li>
            <router-link
            :to="{  name: 'AccountsViewS'}" @click="logOut()"
            
              aria-label="Sign up"
              title="Sign up"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >
              Profile</router-link
            >
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import { BeakerIcon } from '@heroicons/vue/24/solid';

export default {
  components: { BeakerIcon },
  data() {
    return {
      Search: false,
    };
  },
};

</script>
