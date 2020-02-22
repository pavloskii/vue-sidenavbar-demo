import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Photos from "../views/Photos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/photos",
    component: Photos
  },
  {
    path: "/profile",
    component: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes
});

export default router;
