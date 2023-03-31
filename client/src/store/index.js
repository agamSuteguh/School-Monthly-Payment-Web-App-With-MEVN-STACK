import { createStore } from "vuex";
import authModule from "./modules/auth";
import siswaModule from "./modules/siswa";
import adminModule from "./modules/admin"
import transaksiModule from "./modules/transaksi";
import kelasModule from "./modules/kelas"
import sppModule from "./modules/spp";

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
    siswa: siswaModule,
    admin: adminModule,
    transaksi: transaksiModule,
    kelas:kelasModule,
    spp:sppModule
    
  },
});
