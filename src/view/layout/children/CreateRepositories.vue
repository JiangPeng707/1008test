<template>
  <div class="m-[2vw]">
    <div class="flex items-center mb-[2vw]">
      <div
        class="size-[2vw] rounded-[50%] shadow-[0_0_10px_3px_rgba(200,200,200,0.4)] flex items-center justify-center hover:shadow-[0_0_10px_2px_rgba(200,200,200,0.8)] cursor-pointer transition-all"
      >
        <Icon
          icon="ic:round-arrow-back"
          width="24"
          height="24"
          style="color: #2469f6"
        />
      </div>
      <div class="text-[20px] font-bold ml-[1.5vw]">创建代码仓库</div>
    </div>
    <div class="mb-[1.6vw]">
      <div class="text-[16px] font-bold my-[0.8vw]">
        所属项目 <span class="text-[#d94547]">*</span>
      </div>
      <el-cascader
        v-model="value"
        :options="options"
        placeholder="所属项目"
        class="w-[22.2vw]"
        size="large"
      />
    </div>
    <div class="mb-[1.6vw]">
      <div class="text-[16px] font-bold my-[0.8vw] flex">
        <div>仓库类型 <span class="text-[#d94547]">*</span></div>
        <div class="ml-[5vw]">
          仓库名称 <span class="text-[#d94547]">*</span>
        </div>
      </div>
      <div>
        <el-input
          v-model="input1"
          style="max-width: 48.5vw; font-size: 15px"
          placeholder="仓库名称只支持字母、数字、下划线(_)、中划线(-)和点(.)的组合"
          size="large"
          maxlength="100"
          show-word-limit
        >
          <template #prepend
            ><Icon
              icon="devicon:git"
              width="20"
              height="20"
              class="mr-[0.5vw]"
            />
            <div class="text-[black] text-[16px]">GIT仓库</div></template
          >
        </el-input>
      </div>
    </div>
    <div class="mb-[1.6vw]">
      <div class="text-[16px] font-bold my-[0.8vw]">仓库描述</div>
      <el-input
        v-model="textarea"
        style="width: 48.5vw; font-size: 16px"
        type="textarea"
        placeholder="请输入仓库描述"
      />
    </div>
    <div class="mb-[1.6vw]">
      <div class="text-[16px] font-bold my-[0.8vw]">初始化仓库</div>
      <div class="flex flex-col">
        <el-checkbox
          v-model="checked1"
          label="生成 README 文件"
          size="large"
          class="!text-[black]"
        />
        <el-checkbox
          v-model="checked2"
          label="添加 .gitignore 文件"
          size="large"
          class="!text-[black]"
        />
        <el-checkbox
          v-model="checked3"
          label="添加分支模型 (仓库创建后将根据所选模型创建分支)"
          size="large"
          disabled
        />
      </div>
    </div>
    <div class="mb-[1.6vw]">
      <div class="text-[16px] font-bold my-[0.8vw]">是否开源</div>
      <div class="flex flex-col">
        <el-radio :value="1" v-model="radio" size="large">
          <span class="text-[black]"
            >私有仓库 (仅对仓库成员可见，仓库成员可访问仓库)</span
          >
        </el-radio>
        <el-radio :value="2" v-model="radio" size="large">
          <span class="text-[black]">公开仓库</span>
        </el-radio>
      </div>
    </div>
    <div>
      <el-button color="black" size="large">完成创建</el-button
      ><el-button size="large">取消</el-button>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const radio = ref(1);
const input1 = ref("");
const textarea = ref("");
const value = ref([]);
const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const options = [
  {
    value: "guide",
    label: "Guide",
  },
  {
    value: "navigation",
    label: "Navigation",
  },
  {
    value: "component",
    label: "Component",
  },
];
</script>
<style>
.el-input-group__prepend {
  background-color: white;
  width: 9vw;
}
.el-textarea__inner {
  height: 5.2vw !important;
}
</style>
