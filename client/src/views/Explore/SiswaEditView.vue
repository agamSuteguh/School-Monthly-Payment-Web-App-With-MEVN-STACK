
<script setup>
import api from "@/helpers/api";
import { onBeforeMount, ref } from "vue";
import { useRoute } from 'vue-router';
import { useStore } from "vuex";



const store = useStore();
const route = useRoute();

const siswa = ref({});
console.log(siswa)
onBeforeMount(async () => {
  const res = await api.get(`siswa/nis/${route.params.id}`);
  siswa.value = res.data;
});
const updateSiswa = async () => {
  store.commit('setLoading', true, { root: true });
  try {
    const res = await api.put(`/siswa/update/${siswa._id}`, { 'siswa': siswa.value }); 
  
    store.commit('setLoading', false, { root: true });
    
    store.commit(
      'setToast',
      { show: true, msg: res.data.msg, type: 'success' },
      { root: true }
    );


  } catch (error) {
    store.commit('setLoading', false, { root: true });
    store.commit(
      'setToast',
      { show: true, msg: error.message, type: 'error' },
      { root: true }
    );
  }
};



</script>

<template>
  <div class="pb-3">
    <div class="account-page bg-gray-900 pb-12 mb-12">
      <div class="account flex py-12 justify-center items-center">
        <div class="account-img outline outline-offset-1 outline-blue-500 shadow-lg shadow-pink-500/40 w-44">
          <img class="w-full object-cover rounded bg-gray-200"
            :src="`https://avatars.dicebear.com/api/initials/${siswa.username}.svg`" alt="" />
        </div>
        <div class="account-content text-gray-100 ml-4">
          <div class="input-field mt-4 px-2 py-1">
            <label for="fullname">Fullname &nbsp;: </label>
            <input id="fullname" placeholder="Fullname" v-model="siswa.username" type="text"
              class="bg-gray-50 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div class="input-field mt-4 px-2 py-1">
            <label for="Username">Alamat&nbsp;&nbsp;&nbsp;&nbsp;: </label>
            <input id="Username" placeholder="alamat" v-model="siswa.alamat" type="text"
              class="bg-gray-50 border border-gray-300 py-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div class="input-field mt-4 px-2 py-1">
            <label for="Number">No Telp:&nbsp;&nbsp;&nbsp;:
            </label>
            <input id="Number" placeholder="gender" v-model="siswa.noTelp" type="Number"
              class="bg-gray-50 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div class="mb-9 px-2 py-1">

          </div>
        </div>
      </div>
      <div class="account-button flex py-12 justify-center items-center">
        <div class="left mr-10">
          <button @click="updateSiswa()" :disabled="loading"
            class="save-btn rounded px-4 py-2 bg-green-400 delay-150 duration-150 ease-in-out hover:bg-green-800 disabled:bg-green-800 text-gray-50">
            Update
          </button>
        </div>
    
      </div>
    </div>
  </div>
</template>
