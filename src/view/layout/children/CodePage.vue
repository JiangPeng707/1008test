<template>
  <div>
    <div class="relative">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="最近访问" name="first">
          <div class="flex flex-col items-center">
            <div class="flex flex-col mt-[6vw]">
              <img
                src="../../../assets/images/4.png"
                class="w-[7.2vw] h-[6.2vw]"
                alt=""
              />
              <div class="text-[#777d8c] text-center mt-[2vw]">暂无数据</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="全部仓库" name="second">
          <div class="flex flex-col items-center">
            <div class="mt-[9vw]">
              <div class="text-[25px] font-bold text-center mb-[1vw]">
                欢迎使用代码仓库
              </div>
              <div class="text-center text-[#626c7e]">
                <div class="mt-[0.5vw]">
                  代码仓库用于托管基于GIT或SVN管理的代码库。通过Review合并请求来审查代码变更。
                </div>
                <div>版本发布可以用来标记、发布新版本</div>
              </div>
              <div class="flex text-center justify-between">
                <div class="flex flex-col items-center mx-[2vw]">
                  <img src="../../../assets//images/1.svg" class="w-[10vw]" />
                  <div class="text-[20px] font-bold">创建代码仓库</div>
                  <div class="w-[13vw] text-[#626c7e]">
                    浏览、编辑代码以及查看代码提交记录
                  </div>
                </div>
                <div class="flex flex-col items-center mx-[2vw]">
                  <img src="../../../assets//images/2.svg" class="w-[10vw]" />
                  <div class="text-[20px] font-bold">合并请求</div>
                  <div class="w-[11vw] text-[#626c7e]">
                    发起合并请求并遂请协作者Review变更内容
                  </div>
                </div>
                <div class="flex flex-col items-center mx-[2vw]">
                  <img src="../../../assets//images/3.svg" class="w-[10vw]" />
                  <div class="text-[20px] font-bold">代码版本</div>
                  <div class="w-[13vw] text-[#626c7e]">发布、标记代码版本</div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="开源仓库" name="third">
          <div class="flex flex-col items-center">
            <div class="flex flex-col mt-[6vw]">
              <img
                src="../../../assets/images/4.png"
                class="w-[7.2vw] h-[6.2vw]"
                alt=""
              />
              <div class="text-[#777d8c] text-center mt-[2vw]">暂无数据</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <el-button
        color="black"
        class="absolute top-4 right-10 !h-[2.2vw] w-[7.6vw] !text-[16px]"
        @click="createRps"
        >创建代码仓库</el-button
      >
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
function createRps() {
  router.push("/createRps");
}
const activeName = ref("first");
</script>
<style>
.el-tabs__item {
  height: 4vw !important;
  font-size: 16px !important;
  margin-left: 1vw;
}
</style>
