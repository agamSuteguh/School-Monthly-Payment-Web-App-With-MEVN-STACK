
<script setup>
import api from "@/helpers/api";
import { onBeforeMount, computed, reactive } from "vue";
import { useStore } from "vuex";
import Cookies from 'js-cookie';

const account = reactive(JSON.parse(Cookies.get('account')));

const store = useStore();
const deleteAccount = async(_id) =>
 {
  store.commit('setLoading', true, { root: true });
  try {
    await api.delete(`admin/delete/${_id}`);

    store.commit('setLoading', false, { root: true });
    store.commit(
      'setToast',
      { show: true, msg: "berhasil Hapus!", type: 'success' },
      { root: true }
    );
    setTimeout(function () {
        window.location.reload();
          }, 2000);
  } catch (error) {
    store.commit('setLoading', false, { root: true });
    store.commit(
      'setToast',
      { show: true, msg: error.message, type: 'error' },
      { root: true }
    );
  }

};

const admin = computed(() => store.state.admin.admin);


onBeforeMount(() => {
    store.dispatch("admin/fetchAdmin");

});
</script>





<template>
    <!-- component -->

    <body class="antialiased font-sans text-gray-100 bg-gray-900">
        <div class="container mx-auto  px-4 sm:px-8">
            <div v-if="account.level === 1" class="py-8">
                <div>
                    <h2 class="text-2xl font-semibold leading-tight">Data Admin</h2>
                    <div class="flex leading-5"><router-link style="display: inline-flex;"  :to="{ name: 'AdminAdd'}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save w-5 h-5 mr-1">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                    Tambah Admin</router-link></div>
                </div>
                <div class="my-2 flex sm:flex-row flex-col">
                    <div class="flex flex-row mb-1 sm:mb-0">
                        <div class="relative">

                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                        <div class="relative">

                        </div>
                    </div>

                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Username
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        noTelp
                                    </th>
                              
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Action Delete
                                    </th>
      
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="admins in admin" :key="admins._id">
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-10 h-10">
                                                <img class="w-full h-full rounded-full"
                                                    :src="`https://avatars.dicebear.com/api/initials/${admins.username}.svg`"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap">

                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm ">
                                        <p class="text-lg text-gray-900 underline decoration-sky-500">{{ admins.username
                                        }}</p>

                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-lg text-gray-900 underline decoration-sky-500">{{ admins.fullname }}</p>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-lg text-gray-900 underline decoration-sky-500">{{ admins.noTelp }}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                    <div class="contents">
                                                <div class="flex-1 ...">
                                                    <div class="mb-2"><button  @click="deleteAccount(admins._id)" type="submit"
                                                            class="px-5 py-3 rounded-xl text-sm font-medium text-gray-100 bg-pink-800 outline-none border text-gray-300 focus:outline-none bg-gray-100 m-1 hover:m-0 focus:m-0 border text-pink-600 hover: bg-gray-100 border-4 focus:border-4 hover:border-800 hover:text-pink-800 focus:border-pink-200 active:border-pink-900 active:text-grey-900 transition-all"><a
                                                                class="text-gray-100">Delete</a><i
                                                                class="mdi mdi-circle-outline ml-2 text-xl align-middle leading-none"></i></button>
                                                    </div>
                                                </div>

                                            </div>
                                            </td>
                                        
                             
                             

                                </tr>
                            </tbody>
                        </table>
                        <div
                            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
    
                            <div class="inline-flex mt-2 xs:mt-0">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="py-8">
               
               <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
       <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
           <div class="max-w-md text-center">
               <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                   <span class="sr-only">Error</span>511
               </h2>
               <p class="text-2xl font-semibold md:text-3xl">Maaf, kita tidak bisa menampilkan halaman ini.</p>
               <p class="mt-4 mb-8 dark:text-gray-400">Hanya admin yang memiliki akses ke halaman berikut</p>
               
           </div>
       </div>
   </section>
            
               <hr style=" border: 95px solid transparent;border-radius: 100px;">
           </div>
     
        </div>

    </body>
</template>