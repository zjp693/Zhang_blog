<template>
  <div class="login">
    <!-- navBar -->
    <van-nav-bar
      title="黑马头条-登录"
      fixed
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 表单 -->
    <!-- 登录的表单 -->
    <van-form @submit="Login">
      <van-field
        type="tel"
        label="手机号码"
        v-model="form.mobile"
        placeholder="请输入手机号码"
        :rules="rules.mobile"
        required
      ></van-field>
      <van-field
        type="password"
        label="登录密码"
        v-model="form.code"
        placeholder="请输入登录密码"
        :rules="rules.code"
        required
      ></van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { userLogin } from "../../api/userAPI";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        mobile: "13811111111",
        code: "",
      },
      rules: {
        // 一个字段，会对应多条校验规则
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "onBlur" },
          { pattern: /^1\d{10}/, message: "手机号格式错误", trigger: "onBlur" },
        ],
        code: [{ required: true, message: "密码不能为空", trigger: "onBlur" }],
      },
    };
  },
  methods: {
    ...mapMutations(["updateTokenInfo"]),
    async Login() {
      // console.log(this.form);
      const { data: res } = await userLogin(this.form);
      // console.log(res);

      if (res.message === "OK") {
        // 调用更新token的方法来更新token
        this.updateTokenInfo(res.data);
        //
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.login {
  padding-top: 46px;
}
</style>
