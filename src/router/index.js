import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import Admin from "@/views/Admin.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "home",
    name: "Home",
    component: Home,
  },
  {
    path: "login",
    name: "Login",
    component: Login,
  },
  {
    path: "register",
    name: "Register",
    component: Register,
  },
  {
    path: "profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "404",
    name: "/404",
    component: Login,
  },
  {
    path: "401",
    name: "/401",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
