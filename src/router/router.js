import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../view/login/LoginPage.vue";
import LayoutPage from "../view/layout/LayoutPage.vue";
import CodePage from "../view/layout/children/CodePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LoginPage },
    {
      path: "/layout",
      component: LayoutPage,
      children: [{ path: "code", component: CodePage }],
    },
  ],
});
export default router;
