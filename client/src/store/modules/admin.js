import api from "@/helpers/api";
import Cookies from "js-cookie";

const adminModule = {
  namespaced: true,
  state: () => ({
 
    account: Cookies.get("account") ? Cookies.get("account") : {},
    token: Cookies.get("token") ? Cookies.get("token") : "",
    

  }),
  mutations: {
    SET_ADMIN(state, admin) {
      state.admin = admin;
    },
    setAccount(state, payload) {
      state.account = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
 
  },
  actions: {
    //ambil data dari api
    async fetchAdmin({ commit }) {
      try {
        const res = await api.get(
          "admin/getAdmin"
        );

        const admin = res.data.admin;

        commit("SET_ADMIN", admin);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

   

    //tambah Admin
    async addAdmin({ commit }, payload) {
      commit("setLoading", true, { root: true });
      try {
        const res = await api.post("admin/addAdmin", payload);

        if (res.data.status === "bad") {
          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            { show: "true", type: "error", msg: res.data.msg },
            { root: true }
        
          );    console.log(res.data.msg)
        } else {
         
          console.log(res.data);

          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            { show: "true", type: "success", msg: res.data.msg },
            { root: true }
          );

          setTimeout(function () {
            window.location.href = "admin";
          }, 2000);
        } // knp klo tambah malah explore/explore/admin hapus 1 /explore nya soalnya belom gw pasangin router link waktu itu gabisa makenya
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
export default adminModule;
