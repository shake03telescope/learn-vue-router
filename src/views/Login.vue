<template>
  <div>
    <h1>这是登录页面</h1>
    <el-input v-model="username" placeholder="username"></el-input>
    <el-input
      v-model="password"
      placeholder="password"
      show-password
    ></el-input>
    <el-button @click="login">登录</el-button>
    <!-- <router-link to="/home"><a>这是点击链接跳转的方式</a> </router-link> -->
  </div>
</template>
<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // TODO: 用户信息验证
      this.$notify({
        title: "成功",
        message: "您已成功登录，已成功为您跳转至控制台",
        type: "success",
      });
      // TODO: 跳转路由 一定要记住$router
      this.$router.push("/home");
    },
  },
};
</script>