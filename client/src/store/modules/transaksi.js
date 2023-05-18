import api from "@/helpers/api";

const modulTransaksi = {
  namespaced: true,
  state: () => ({
    transaksi: [] ? [] : {},
  }),
  mutations: {
    SET_TRANSAKSI(state, transaksi) {
      state.transaksi = transaksi;
    },
  },
  actions: {
    // Mengambil data dari API
    async fetchTransaksi({ commit }) {
      try {
        const res = await api.get("transaksi/getTransaksi");

        const transaksi = res.data.transaksi;

        commit("SET_TRANSAKSI", transaksi);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchTransaksiById({ commit }, payload) {
      try {
        const res = await api.get(`transaksi/nis/${payload}`);

        const transaksiSatu = res.data.transaksi;

        commit("SET_SISWAO", transaksiSatu);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchSiswaById({ commit }, payload) {
      try {
        const res = await api.get(`siswa/nis/${payload}`);

        const siswaSatu = res.data.siswa;

        commit("SET_SISWAO", siswaSatu);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    // Menambahkan transaksi
    async addTransaksi({ commit }, payload) {
      commit("setLoading", true, { root: true });
      try {
        const res = await api.post("transaksi/addTransaksi", payload);

        if (res.data.status === "bad") {
          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            { show: "true", type: "error", msg: res.data.msg },
            { root: true }
          );
        } else {
          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            { show: "true", type: "success", msg: res.data.msg },
            { root: true }
          );
          setTimeout(function () {
            // ...
          }, 2000);
        }
      } catch (error) {
        commit("setLoading", false, { root: true });
        commit(
          "setToast",
          { show: "true", type: "error", msg: error.message },
          { root: true }
        );
      }
    },
  },
  modules: {},
};
export default modulTransaksi;
