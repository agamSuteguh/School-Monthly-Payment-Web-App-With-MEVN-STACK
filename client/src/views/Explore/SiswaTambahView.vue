<script setup>
import { useStore } from 'vuex';
import { reactive, computed, onBeforeMount } from 'vue';

const store = useStore();

const kelas = computed(() => store.state.kelas.kelas);
const kelass = kelas.value



const siswa = reactive({
  username: '',
  nis: '',
  gender: '',
  jurusan:'',
  kelas:'',
  alamat:'',
  nisn:'',
  noTelp:'', 
  password:''

  
});

const loading = computed(() => {
  return store.state.loading;
});

const addSiswa = async e => {
  e.preventDefault();

  if (!siswa.username || !siswa.nis || !siswa.gender || !siswa.jurusan || !siswa.kelas || !siswa.alamat || !siswa.nisn || !siswa.noTelp|| !siswa.password ) {
    store.commit(
      'setToast',
      { show: true, msg: "isi bris kosong", type: 'error' },
      { root: true }
    );
  } else {
    store.dispatch('siswa/addSiswa', siswa);
    router.push('/explore/siswa')
  } 

  
};  
onBeforeMount(() => {
  store.dispatch("kelas/fetchKelas");
   
});
</script>

<template>
  <div class="overflow-hidden bg-gray-900">
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="flex flex-col items-center justify-center xl:flex-row">
      
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
                Tambah Siswa
              </h3>
              <form @submit="e => addSiswa(e)" class="register-box bg-white">
                <div class="grid grid-cols-2 gap-4">
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >Nama Siswa</label
                  >
                  <input
                    v-model.trim="siswa.username"
                    placeholder="username"
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    name="username"
              
                  />
                </div>
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >Password Siswa</label
                  >
                  <input
                    v-model.trim="siswa.password"
                    placeholder="password"
                    type="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="alamat"
                    name="alamat"
              
                  />
                </div>
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >Alamat Siswa</label
                  >
                  <input
                    v-model.trim="siswa.alamat"
                    placeholder="alamat"
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="alamat"
                    name="alamat"
              
                  />
                </div>
          
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >No Telpon Siswa</label
                  >
                  <input
                    v-model.trim="siswa.noTelp"
                    placeholder="no Telpon"
                    type="number"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="int"
                    name="int"
                  />
                </div>
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >Nis</label
                  >
                  <input
                    v-model.trim="siswa.nis"
                    placeholder="number"
                    type="number"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="int"
                    name="int"
                  />
                </div>
                <div class="mb-1 sm:mb-2 bg-white">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >Nisn</label
                  >
                  <input
                    v-model.trim="siswa.nisn"
                    placeholder="number"
                    type="number"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="int"
                    name="int"
                  />
                </div>
                <div class="mt-4 px-2 py-1">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >gender</label
                  ><br> 
            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900    leading-tight focus:outline-none focus:shadow-outline" v-model="siswa.gender">
              <option :selected="siswa.gender === 'siswa.gender'" value="Cowo">
               Cowo
              </option>
              <option :selected="siswa.gender === 'kelas.gender'" value="Cewe">
               Cewe
              </option>
             
            </select>
          </div>
                <div class="mt-4 px-2 py-1">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >Jurusan</label
                  ><br> 
            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900    leading-tight focus:outline-none focus:shadow-outline" v-model="siswa.jurusan">
              <option v-for="kelas in kelass" :selected="siswa.jurusan === 'kelas.jurusan'" :value="kelas.jurusan">
                {{kelas.jurusan}}
              </option>
             
            </select>
          </div>
          <div class="mt-4 px-2 py-1">
                  <label
                    for="name"
                    class="inline-block mb-1 font-medium bg-white"
                    >kelas</label
                  ><br> 
            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900    leading-tight focus:outline-none focus:shadow-outline" v-model="siswa.kelas">
              <option v-for="kelas in kelass" :selected="siswa.kelas === 'kelas.kelas'" :value="kelas.kelas">
                {{kelas.kelas}}
              </option>
             
            </select></div>
          </div>
      
                <div class="mt-4 mb-2 sm:mb-4 bg-white">
                  <button
                    :disabled="loading"
                    type="submit"
                    button
                    class="bg-white inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none disabled:bg-black-200 disabled:cursor-default"
                  >
                    Tambah Sekarang!
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

