import api from "@/helpers/api";


const sppModule = {
  namespaced: true,
  state: () => ({
    spp: [] ? [] : { } ,



  }),
  mutations: {
    SET_spp(state, spp) {
      state.spp = spp;
    },
  

  },
  actions: {
    //ambil data dari api
    async fetchspp({ commit }) {
      try {
        const res = await api.get(
          "spp/getspp"
        );

        const spp = res.data.spp;

        commit("SET_spp", spp);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },



    //tambah spp
    async addspp({ commit }, payload) {
      commit("setLoading", true, { root: true });
      try {
        const res = await api.post("spp/addspp", payload );


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
            window.location.href = "/explore/siswa";
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
export default sppModule;
