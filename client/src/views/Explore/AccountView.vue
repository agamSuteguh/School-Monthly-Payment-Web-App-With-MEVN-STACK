<script setup>
import Cookies from 'js-cookie';
import { computed, reactive } from 'vue';
import api from '@/helpers/api';
import { useStore } from 'vuex';

const store = useStore();

const loading = computed(() => {
  return store.state.loading;
});

const account = reactive(JSON.parse(Cookies.get('account')));

console.log(account)
const updateAccount = async () => {
  store.commit('setLoading', true, { root: true });
  try {                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    const res = await api.put(`/admin/update/${account._id}`, { account });
    Cookies.remove('account');
    Cookies.set('account', JSON.stringify(res.data.account)); 
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
const logOut = () => {
  Cookies.remove('token');
  Cookies.remove('account');
  window.location.reload();
};
const deleteAccount = async () => {
  store.commit('setLoading', true, { root: true });
  try {
    const res = await api.delete(`/admin/delete/${account._id}`);
    Cookies.remove('account');
    Cookies.remove('token');
    store.commit('setLoading', false, { root: true });
    store.commit(
      'setToast',
      { show: true, msg: res.data.msg, type: 'success' },
      { root: true }
    );
    setTimeout(() => {
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
</script>
<template>
  <div  class="pb-3">
    <div class="account-page bg-gray-900 pb-12 mb-12">
      <div class="account flex py-12 justify-center items-center">
        <div class="account-img outline outline-offset-1 outline-blue-500 shadow-lg shadow-pink-500/40 w-44">
          <img class="w-full object-cover rounded bg-gray-200"
            :src="`https://avatars.dicebear.com/api/initials/${account.fullname}.svg`" alt="" />
        </div>
        <div class="account-content text-gray-100 ml-4">
          <div class="input-field mt-4 px-2 py-1">
            <label for="fullname">Fullname&nbsp; &nbsp;: </label>
            <input id="fullname" placeholder="Fullname" v-model="account.fullname" type="text"
              class="bg-gray-50 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div class="input-field mt-4 px-2 py-1">
            <label for="Username">Username &nbsp;: </label>
            <input id="Username" placeholder="Username" v-model="account.username" type="text"
              class="bg-gray-50 border border-gray-300 py-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div class="input-field mt-4 px-2 py-1">
            <label for="Age">No Telpon &nbsp;:
            </label>
            <input id="Age" placeholder="Umur" v-model="account.noTelp" type="number"
              class="bg-gray-50 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div v-if="account.level == 0" class="input-field mt-4 px-2 py-1">
            <label for="Age">Status &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Petugas 
            </label>
          </div>
          <div v-else class="input-field mt-4 px-2 py-1">
            <label for="Age">Status &nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Admin 
            </label>
            
          </div>

          <div class="mb-9 px-2 py-1">

          </div>
        </div>
      </div>
      <div class="account-button flex py-12 justify-center items-center">
        <div class="left mr-10">
          <button @click="updateAccount()" :disabled="loading"
            class="save-btn rounded px-4 py-2 bg-green-400 delay-150 duration-150 ease-in-out hover:bg-green-800 disabled:bg-green-800 text-gray-50">
            Update
          </button>
        </div>
        <div class="right ml-5">
          <button :disabled="loading" @click="deleteAccount()"
            class="delete-btn rounded px-4 py-2 bg-purple-400 delay-150 duration-150 ease-in-out hover:bg-purple-800 disabled:bg-purple-800 text-gray-50 ml-2">
            Delete&nbsp;
          </button>
          <button :disabled="loading" @click="logOut()"
            class="logout-btn rounded ml-4 px-4 py-2 bg-purple-400 delay-150 duration-150 ease-in-out hover:bg-purple-800 disabled:bg-purple-800 text-gray-50">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
