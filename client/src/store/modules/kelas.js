import api from "@/helpers/api";


const kelasModule = {
  namespaced: true,
  state: () => ({
    kelas:[]
  }),
  mutations: {
    SET_KELAS(state, kelas) {
      state.kelas = kelas;
    },
  
  },
  actions: {
    //ambil data dari api
    async fetchKelas({ commit }) {
      try {
        const res = await api.get(
          "kelas/getKelas"
        );

        const kelas = res.data.kelas;

        commit("SET_KELAS", kelas);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

   
   

    //tambah murid
    async addKelas({ commit }, payload) {
      commit("setLoading", true, { root: true });
      try {
        const res = await api.post("kelas/addKelas", payload);

        if (res.data.status === "bad") {
          commit("setLoading", false, { root: true });
          setTimeout(function () {
            window.location.href = "/explore/kelas";
          }, 2000);
       
        } else {
         

          console.log(res.data);

          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            { show: "true", type: "success", msg: res.data.msg },
            { root: true }
          );

          setTimeout(function () {
            window.location.href = "/explore/kelas";
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
export default kelasModule;
