import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Title from "../views/Title.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/search/:query", name: "Search", component: Search },
  { path: "/title/:titleId", name: "Title", component: Title },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;