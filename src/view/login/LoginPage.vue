<template>
  <div class="h-[100%] flex">
    <div class="h-[100%] w-[40vw]">
      <img
        src="../assets/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
        alt=""
        class="h-[100vh]"
      />
    </div>
    <div class="w-[60vw] flex flex-col items-center">
      <div
        class="text-[30px] font-bold text-[#20274b] w-[25vw] text-center mt-[13.5vw] mb-[5vw]"
      >
        登录,即刻创造您的应用
      </div>
      <div>
        <input
          type="text"
          placeholder="账号"
          v-model="username"
          class="w-[30vw] h-[3.6vw] border-solid border-[2px] rounded-[10px] outline-none text-[20px] mb-[1vw] pl-[1.2vw]"
        /><br />
        <input
          type="password"
          placeholder="密码"
          v-model="password"
          class="w-[30vw] h-[3.6vw] border-solid border-[2px] rounded-[10px] outline-none text-[20px] mb-[1vw] pl-[1.2vw]"
        />
        <div class="flex mb-[3vw] items-center">
          <input type="checkbox" class="w-[1vw] h-[1vw]" />
          <div class="text-[#8f91a4] pl-[5px]">
            我已阅读并同意 <span class="text-[#0035e3]">服务协议</span> 和
            <span class="text-[#0035e3]">隐私协议</span>
          </div>
        </div>
        <button
          class="w-[30vw] h-[3.6vw] bg-[#0035e3] rounded-[10px] text-[#fff] text-[20px]"
          @click="login"
        >
          登 录
        </button>
        <div class="text-[#8f91a4] text-center mt-[1.2vw]">
          还未注册? <span class="text-[#0035e3]">立即注册</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
function login() {
  if (username.value == "admin" && password.value == "123456") {
    router.push("/layout");
  }
}
</script>
