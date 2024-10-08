<template>
  <div class="w-[87.5vw]">
    <div
      class="h-[4vw] leading-[4vw] pl-[2vw] border-b-[2px] text-[18px] font-bold"
    >
      代码仓库
    </div>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="最近访问" name="first">最近访问</el-tab-pane>
      <el-tab-pane label="全部仓库" name="second">全部仓库</el-tab-pane>
      <el-tab-pane label="开源仓库" name="third">开源仓库</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const activeName = ref("first");
</script>
<style>
.el-tabs__item {
  margin: 0 1.5vw;
  width: 4.4vw;
}
</style>
