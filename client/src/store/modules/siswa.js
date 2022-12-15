import api from "@/helpers/api";
import Cookies from "js-cookie";

const siswaModule = {
  namespaced: true,
  state: {
    account: Cookies.get("account") ? Cookies.get("account") : {},


  },
  getters: {},
  mutations: {
    setAccount(state, payload) {
      state.account = payload;
    },
   
  },
  actions: {
    //tambah murid
    async addSiswa({ commit }, payload) {
      commit("setLoading", true, { root: true });
      try {
        const res = await api.post("siswa/addSiswa", payload);

        if (res.data.status === "bad") {
          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            { show: "true", type: "error", msg: res.data.msg },
            { root: true }
          );
        } else {
          Cookies.set("account", JSON.stringify(res.data.siswa));
        
          console.log(res.data);

          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            { show: "true", type: "success", msg: res.data.msg },
            { root: true }
          );

          setTimeout(function () {
            window.location.href = "/siswa";
          }, 2000);
        }
      } catch (error) {
        commit("setLoading", false, { root: true });
        commit(
          "setToast",
          { show: "true", type: "error", msg: error.message },
          { root: true }
        );
        console.log(error.message);
      }
    },

  },
  modules: {},
};
export default siswaModule;
