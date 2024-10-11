<template>
  <div class="flex h-[100vh]">
    <el-menu
      default-active="/work"
      router
      background-color="#f8f9fc"
      class="w-[6vw]"
      mode="vertical"
      @select="handleOpen"
    >
      <el-menu-item index="/work">
        <el-icon><Monitor /></el-icon>
        <div class="">工作台</div>
      </el-menu-item>
      <el-menu-item index="/project">
        <el-icon><Folder /></el-icon>
        <div>项目</div>
      </el-menu-item>
      <el-menu-item index="/ai">
        <el-icon><ElementPlus /></el-icon>
        <div>AI</div>
      </el-menu-item>
      <el-menu-item index="/thing">
        <el-icon><Document /></el-icon>
        <div>事项</div>
      </el-menu-item>
      <el-menu-item index="/code">
        <el-icon><Help /></el-icon>
        <div>代码</div>
      </el-menu-item>
      <el-menu-item index="/make">
        <el-icon><Cpu /></el-icon>
        <div>制品</div>
      </el-menu-item>
      <el-menu-item index="/watch">
        <el-icon><View /></el-icon>
        <div>洞察</div>
      </el-menu-item>
      <el-menu-item index="/knowledge">
        <el-icon><Coin /></el-icon>
        <div>知识</div>
      </el-menu-item>
      <el-menu-item index="/auto">
        <el-icon><setting /></el-icon>
        <div>自动化</div>
      </el-menu-item>
    </el-menu>
    <div class="w-[94vw]">
      <div
        class="h-[4vw] leading-[4vw] pl-[2vw] border-b-[2px] text-[20px] font-bold"
      >
        {{ content }}
      </div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
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
