import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../view/login/LoginPage.vue";
import LayoutPage from "../view/layout/LayoutPage.vue";
import CodePage from "../view/layout/children/CodePage.vue";
import WorkPage from "@/view/layout/children/WorkPage.vue";
import ProjectPage from "@/view/layout/children/ProjectPage.vue";
import AiPage from "@/view/layout/children/AiPage.vue";
import WatchPage from "@/view/layout/children/WatchPage.vue";
import AutoPage from "@/view/layout/children/AutoPage.vue";
import MakePage from "@/view/layout/children/MakePage.vue";
import KnowledgePage from "@/view/layout/children/KonwledgePage.vue";
import ThingPage from "@/view/layout/children/ThingPage.vue";
import CreateRepositories from "@/view/layout/children/CreateRepositories.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: LoginPage },
    {
      path: "/",
      component: LayoutPage,
      children: [
        { path: "code", component: CodePage },
        { path: "work", component: WorkPage },
        { path: "project", component: ProjectPage },
        { path: "ai", component: AiPage },
        { path: "auto", component: AutoPage },
        { path: "knowledge", component: KnowledgePage },
        { path: "watch", component: WatchPage },
        { path: "make", component: MakePage },
        { path: "thing", component: ThingPage },
        { path: "createRps", component: CreateRepositories },
      ],
    },
  ],
});
export default router;
