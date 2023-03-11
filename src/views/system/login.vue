<template>
  <v-main class="first-class">
    <!-- <v-img src="" height="836"> </v-img> -->
    <v-container class="second-class">
      <div>
        <h2 class="font-class">欢迎登录财富管理系统</h2>
      </div>
      <div>
        <v-input color="white">
          <v-text-field
            :prepend-inner-icon="icon.account"
            placeholder="请输入用户名"
            :rules="[rules.required]"
            outlined
            dense
            light
            v-model="username"
          ></v-text-field>
        </v-input>
        <v-input>
          <v-text-field
            :prepend-inner-icon="icon.password"
            :append-icon="pwdShow ? icon.eyeOff : icon.eye"
            :type="pwdShow ? 'password' : 'text'"
            placeholder="请输入密码"
            :rules="[rules.required, rules.counter]"
            outlined
            dense
            v-model="password"
            @click:append="changePwd"
          ></v-text-field>
        </v-input>

        <v-btn block color="primary">登录</v-btn>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import { mdiAccount, mdiLock, mdiEye, mdiEyeOff } from "@mdi/js";
export default {
  data: () => ({
    icon: {
      account: mdiAccount,
      password: mdiLock,
      eye: mdiEye,
      eyeOff: mdiEyeOff,
    },
    pwdShow: true,
    username: "",
    password: "",
    rules: {
      required: (value) => !!value || "必填项, 不能为空",
      counter: (value) => value.length < 20 || "密码长度不能大于20",
    },
  }),
  methods: {
    changePwd() {
      this.pwdShow = !this.pwdShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.first-class {
  background-image: url("@/assets/login.png");
  background-size: cover;
}
.second-class {
  width: 500px;
  height: 300px;
  margin: 150px auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.font-class {
  margin-left: 125px;
  margin-bottom: 25px;
  width: 60%;
  color: #42a5f5;
}
</style>
