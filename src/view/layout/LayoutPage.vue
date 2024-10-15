<template>
  <div class="flex h-[100vh] relative">
    <div class="bg-[#f8f9fc] px-[0.6vw] border-r-[1.2px] border-[#caced9]">
      <el-menu
        default-active="/work"
        router
        background-color="#f8f9fc"
        class="h-[100vh] !border-none"
        @select="handleOpen"
        collapse="true"
      >
        <el-menu-item index="/work">
          <Icon icon="icon-park-outline:workbench" width="30" height="30" />
          <template #title>工作台</template>
        </el-menu-item>
        <el-menu-item index="/project">
          <Icon icon="solar:folder-open-outline" width="30" height="30" />
          <template #title>项目</template>
        </el-menu-item>
        <el-menu-item index="/ai">
          <Icon icon="ph:open-ai-logo" width="30px" height="30px" />
          <template #title>AI</template>
        </el-menu-item>
        <el-menu-item index="/thing">
          <Icon icon="pepicons-pencil:file" width="24" height="24" />
          <template #title>事项</template>
        </el-menu-item>
        <el-menu-item index="/code">
          <Icon icon="ph:code-fill" width="30" height="30" />
          <template #title>代码</template>
        </el-menu-item>
        <el-menu-item index="/make">
          <Icon icon="system-uicons:cube" width="30" height="30" />
          <template #title>制品</template>
        </el-menu-item>
        <el-menu-item index="/watch">
          <Icon icon="ic:outline-insights" width="30" height="30" />
          <template #title>洞察</template>
        </el-menu-item>
        <el-menu-item index="/knowledge">
          <Icon icon="mage:book-text" width="30" height="30" />
          <template #title>知识</template>
        </el-menu-item>
        <el-menu-item index="/auto">
          <Icon icon="ic:outline-hdr-auto" width="30" height="30" />
          <template #title>自动化</template>
        </el-menu-item>
        <div
          class="flex justify-center mt-[0.5vw] border-b-[2px] border-solid mx-[0.8vw] pb-2"
        >
          <Icon icon="ph:user-list-light" width="25" height="25" />
        </div>
        <el-menu-item>
          <Icon icon="pajamas:dot-grid" width="30" height="30" />
          <template #title>更多</template>
        </el-menu-item>
        <el-menu-item>
          <Icon icon="lsicon:remind-outline" width="30" height="30" />
          <template #title>消息</template>
        </el-menu-item>
        <el-menu-item>
          <Icon icon="basil:settings-outline" width="30" height="30" />
          <template #title>设置</template>
        </el-menu-item>
        <el-menu-item>
          <Icon icon="lets-icons:question-light" width="30" height="30" />
          <template #title>问题</template>
        </el-menu-item>
        <el-menu-item @click="openDrawer((drawer = true))">
          <Icon icon="solar:user-circle-bold-duotone" width="30" height="30" />
          <template #title>个人中心</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="w-[94vw]">
      <div
        class="h-[4vw] leading-[4vw] pl-[2vw] border-b-[2px] text-[20px] font-bold"
      >
        {{ content }}
      </div>
      <RouterView></RouterView>
    </div>
  </div>
  <el-drawer
    v-model="drawer"
    title="I am the title"
    :with-header="false"
    direction="ltr"
    class="!w-[25vw] left-12"
  >
    <span>Hi there!</span>
  </el-drawer>
</template>

<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const drawer = ref(false);
const content = ref();
function handleOpen(key) {
  switch (key) {
    case "/work":
      content.value = "工作区";
      break;
    case "/project":
      content.value = "项目区";
      break;
    case "/ai":
      content.value = "ai区";
      break;
    case "/thing":
      content.value = "事项区";
      break;
    case "/work":
      content.value = "工作区";
      break;
    case "/code":
      content.value = "代码仓库";
      break;
    case "/make":
      content.value = "制品区";
      break;
    case "/watch":
      content.value = "洞察区";
      break;
    case "/knowledge":
      content.value = "知识区";
      break;
    case "/auto":
      content.value = "自动化区";
      break;
    default:
      console.log("error");
  }
  console.log(key);
  console.log(content.value);
}
</script>
<style scoped>
.el-menu-item.is-active {
  background-color: #e6ecfc !important; /* 你可以选择你想要的颜色 */
}
</style>
