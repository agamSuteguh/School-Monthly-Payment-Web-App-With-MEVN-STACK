import api from "@/helpers/api";


const siswaModule = {
  namespaced: true,
  state: () => ({
    siswa: null,
    kelas:[]

  }),
  mutations: {
    SET_SISWA(state, siswa) {
      state.siswa = siswa;
    },
    SET_KELAS(state, kelas) {
      state.kelas = kelas;
    },
    SET_SISWAO(state, siswa) {
      state.siswa = siswa;
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

    //ambil data dari api
    async fetchSiswa({ commit }) {
      try {
        const res = await api.get(
          "siswa/getSiswa"
        );

        const siswa = res.data.siswa;

        commit("SET_SISWA", siswa);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async fetchSiswaById({ commit }, payload) {
      try {
        const res = await api.get(`siswa/nis/${payload}`);
   

        const siswaOne = res.data.siswa;

        commit("SET_SISWAO", siswaOne);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
   

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
         

          console.log(res.data);

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
export default siswaModule;
