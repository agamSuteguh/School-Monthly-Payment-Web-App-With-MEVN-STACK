import { createStore } from "vuex";
import authModule from "./modules/auth";
import siswahModule from "./modules/siswa";

export default createStore({
  state: {
    loading: false,
    toast: {
      show: false,
      type: "",
      msg: "",
    },
  },
  getters: {},
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setToast(state, payload) {
      state.toast = payload;
    },
  },
  actions: {},
  modules: {
    auth: authModule,
    siswa: siswahModule,
  },
});
