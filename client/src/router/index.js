import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import LandingLayout from "../layouts/LandingView.vue";
import ExploreView from "../layouts/ExplortView.vue";

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


import CheckSppView from "../views/Landing/CheckSppView.vue";
import LoginView from "../views/Landing/LoginView.vue";
import IndexView from "../views/Landing/IndexView.vue";

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
        path: "checkspp",
        name: "Checkspp",
        component: CheckSppView,
      },
      {
        path: "login",
        name: "Login",
        component: LoginView,
      },
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
  }
    ],
    beforeEnter: (to, from, next) => {
      if (!Cookies.get("token")) {
        window.location.href = "/login";
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
