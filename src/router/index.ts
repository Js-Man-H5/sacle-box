/*
 * @Author: jack.hai
 * @Date: 2023-01-05 10:29:31
 * @LastEditTime: 2023-01-05 11:01:10
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
