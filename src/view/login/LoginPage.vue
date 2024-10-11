<template>
  <div class="h-[100vh] flex">
    <div class="h-[100vh] w-[40vw]">
      <el-carousel height="100vh">
        <el-carousel-item>
          <img
            src="../../assets/images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png"
            alt=""
            class="h-[100vh]"
          />
        </el-carousel-item>
        <el-carousel-item
          ><img
            src="../../assets/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
            alt=""
            class="h-[100vh]"
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="../../assets/images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png"
            alt=""
            class="h-[100vh]"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="w-[60vw] h-[100vh] flex flex-col items-center">
      <div
        class="text-[30px] font-bold text-[#20274b] w-[25vw] text-center mt-[13.5vw] mb-[5vw]"
      >
        登录,即刻创造您的应用
      </div>
      <div>
        <input
          type="text"
          placeholder="账号"
          v-model="userLoginInfo.username"
          autofocus="autofocus"
          class="w-[30vw] h-[3.6vw] border-solid border-[2px] rounded-[10px] outline-none text-[20px] mb-[1vw] pl-[1.2vw]"
        /><br />
        <input
          type="password"
          placeholder="密码"
          v-model.lazy="userLoginInfo.password"
          class="w-[30vw] h-[3.6vw] border-solid border-[2px] rounded-[10px] outline-none text-[20px] mb-[1vw] pl-[1.2vw]"
          :autocomplete="password"
        />
        <div class="flex mb-[3vw] items-center">
          <input type="checkbox" class="w-[1vw] h-[1vw]" />
          <div class="text-[#8f91a4] pl-[5px]">
            我已阅读并同意
            <a href="#" class="text-[#0035e3] hover:text-[#1a62fd]">服务协议</a>
            和
            <a href="#" class="text-[#0035e3] hover:text-[#1a62fd]">隐私协议</a>
          </div>
        </div>
        <button
          class="w-[30vw] h-[3.6vw] bg-[#0035e3] rounded-[10px] text-[#fff] text-[20px] hover:bg-[#1a62fd] transition-all"
          @click="loginHandle"
        >
          登 录
        </button>
        <div class="text-[#8f91a4] text-center mt-[1.2vw]">
          还未注册?
          <a href="#" class="text-[#0035e3] hover:text-[#1a62fd]">立即注册</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import to from "await-to-js";
import { getAccessToken } from "@/service/api";
import { notification } from "ant-design-vue";
const router = useRouter();
const userLoginInfo = ref({
  username: "2177478959@qq.com",
  password: "jp20030826",
});
const loginHandle = async () => {
  const loginData = {
    grant_type: "password",
    username: userLoginInfo.value.username,
    password: userLoginInfo.value.password,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    scope: import.meta.env.VITE_CLIENT_SCOPE,
  };
  const [err, res] = await to(getAccessToken(loginData));
  console.log(res);
  if (!err) {
    notification.success({ message: "恭喜你登陆成功" });
    router.push("/work");
  }
};
</script>
