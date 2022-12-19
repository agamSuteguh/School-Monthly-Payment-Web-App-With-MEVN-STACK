
<script setup>
import api from "@/helpers/api";
import { onBeforeMount, ref } from "vue";
import { useRoute } from 'vue-router';
import { useStore } from "vuex";



const store = useStore();
const route = useRoute();

const siswa = reactive({
  nis:''

});

onBeforeMount(async () => {
  const res = await api.get(`siswa/nis/search`, siswa);
  siswa.value = res.data;
});




</script>

<template>
<!-- component -->
<div class="bg-slate-700 h-screen px-10 py-20 w-full">
  <form>
    <div class="max-w-xl">
      <div class="flex space-x-1 items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-white text-lg font-semibold">Masukan Nis Siswa</p>
      </div>
      <div class="flex space-x-4">
        <div class="flex rounded-md overflow-hidden w-full">
          <input type="text" class="w-full rounded-md rounded-r-none"  v-model.trim="siswa.nis"/>
          <button class="bg-yellow-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Check</button>
        </div>

      </div>
    </div>
  </form>
</div>
</template>


