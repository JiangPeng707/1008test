<template>
  <el-row class="tac">
    <el-col :span="3">
      <el-menu default-active="/layout/code" router background-color="#f8f9fc">
        <el-menu-item index="/layout/1">
          <el-icon><icon-menu /></el-icon>
          <div>工作台</div>
        </el-menu-item>
        <el-menu-item index="/layout/2">
          <el-icon><icon-menu /></el-icon>
          <div>项目</div>
        </el-menu-item>
        <el-menu-item index="/layout/3">
          <el-icon><document /></el-icon>
          <div>AI</div>
        </el-menu-item>
        <el-menu-item index="/layout/4">
          <el-icon><setting /></el-icon>
          <div>事项</div>
        </el-menu-item>
        <el-menu-item index="/layout/code">
          <el-icon><setting /></el-icon>
          <div>代码</div>
        </el-menu-item>
        <el-menu-item index="/layout/6">
          <el-icon><setting /></el-icon>
          <div>制品</div>
        </el-menu-item>
        <el-menu-item index="/layout/7">
          <el-icon><setting /></el-icon>
          <div>洞察</div>
        </el-menu-item>
        <el-menu-item index="/layout/8">
          <el-icon><setting /></el-icon>
          <div>知识</div>
        </el-menu-item>
        <el-menu-item index="/layout/9">
          <el-icon><setting /></el-icon>
          <div>自动化</div>
        </el-menu-item>
      </el-menu>
    </el-col>
    <RouterView class="float-right"></RouterView>
  </el-row>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Setting } from "@element-plus/icons-vue";
import { RouterView } from "vue-router";
</script>
<style scoped>
.el-menu-item.is-active {
  background-color: #e6ecfc !important; /* 你可以选择你想要的颜色 */
}
</style>
