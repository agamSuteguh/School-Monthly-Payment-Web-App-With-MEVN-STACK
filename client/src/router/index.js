import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import LandingLayout from "../layouts/LandingView.vue";
import ExploreView from "../layouts/ExplortView.vue";
import SiswaLayout from "../layouts/SiswaView.vue";

import AccountView from "../views/Explore/AccountView.vue";
import HomeView from "../views/Explore/HomeView.vue";

import KelasAdd from "../views/Explore/KelasTambahView.vue"
import KelasView from "../views/Explore/KelasView.vue"

import SiswaAdd from "../views/Explore/SiswaTambahView.vue";
import SiswaView from "../views/Explore/SiswaView.vue";
import SiswaEdit from "../views/Explore/SiswaEditView.vue"
import SiswaSpp from "../views/Explore/SiswaSppView.vue"

import AdminView from "../views/Explore/AdminView.vue";
import AdminAdd from "../views/Explore/AdminTambahView.vue"

import Transaksi from "../views/Explore/TransaksiView.vue";
import TransaksiAdd from "../views/Explore/TransaksiTambahView.vue"
import SppTambah from "../views/Explore/SppTambahView.vue"

import LoginView from "../views/Landing/LoginView.vue";
import LoginSiswaView from "../views/Landing/LoginSiswa.vue";
import IndexView from "../views/Landing/IndexView.vue";
import CheckView from "../views/Landing/CheckSppView.vue"

import AccountsViewS from "../views/Siswa/AccountView.vue"
import indexs from "../views/Siswa/HomeView.vue";
import LaporanSiswa from "../views/Siswa/LaporanView.vue";
import Kwitansis from "../views/Siswa/KwitansiView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingLayout,
    children: [
      {
        path: "",
        name: "index",
        component: IndexView,
      },
      {
        path: "login",
        name: "Login",
        component: LoginView,
      },
      {
        path: "loginSiswa",
        name:"LoginSiswa",
        component: LoginSiswaView,
      },
      {
      path:"checkspp",
      name:"checkspp",
      component:CheckView }
    ],
    beforeEnter: (to, from, next) => {
      if (Cookies.get("token")) {
       
        window.location.href = "/explore";
      } else {
        next();
      }
    },
  },
  {
    path: "/explore",
    name: "Explore",
    component: ExploreView,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: 'account',
        name: "Account",
        component: AccountView
      },
      {
        path: "siswa-add",
        name: "SiswaAdd",
        component: SiswaAdd,
      },
      {
      path:"siswa",
      name:"Siswa",
      component:SiswaView
      },
     {
          path:"siswa-edit/:id",
          name:"SiswaEdit",
          component:SiswaEdit
     },
     {
      path:"siswa-spp/:id",
      name:"SiswaSpp",
      component:SiswaSpp

     },
      {
        path: "admin",
        name: "Admin",
        component: AdminView,
      },
      {
        path: "admin-add",
        name: "AdminAdd",
        component: AdminAdd,
      },
      {
        path: "transaksi",
        name: "Transaksi",
        component: Transaksi,
      },
      {
        path: "transaksi-add",
        name:"TransaksiAdd",
        component:TransaksiAdd
      },
      {
        path: "kelas-add",
        name:"KelasAdd",
        component:KelasAdd
      },
     { path:"kelas",
      name:"KelasView",
    component:KelasView
  },
  { path:"sppTambah",
  name:"SppTambah",
component:SppTambah
},

  
    ],
    beforeEnter: (to, from, next) => {
      if (!Cookies.get("token")) {
        window.location.href = "/login";
      } else {
        next();
      }
    },
  },
  {
    path: "/siswas",
    name: "SiswaLayout",
    component: SiswaLayout,
    children: [
      {
        path: 'accountsViewS',
        name: "AccountsViewS",
        component: AccountsViewS
      },
      {
        path: 'indexs',
        name: "Indexs",
        component: indexs
      },
      {
        path: 'laporanSiswa',
        name: "LaporanSiswa",
        component: LaporanSiswa
      },
      {
        path: 'kwitansis/:id',
        name: "Kwitansis",
        component: Kwitansis
      }
      
      
      
    
    
    ],
    beforeEnter: (to, from, next) => {
      if (!Cookies.get("token")) {
        window.location.href = "/loginSiswa";
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
