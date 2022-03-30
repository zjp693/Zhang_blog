<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar
      title="编辑资料"
      left-arrow
      @click-left="$router.back()"
      fixed
    />

    <!-- 用户资料 -->
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image
            round
            class="avatar"
            :src="userProfile.photo"
            @click="$refs.fileRef.click()"
          />
          <!-- 文件选择框 -->
          <input
            type="file"
            accept="image/*"
            @change="onFileChange"
            v-show="false"
            ref="fileRef"
          />
        </template>
      </van-cell>
      <van-cell
        title="名称"
        is-link
        :value="userProfile.name"
        @click="onNameCellClick"
      />
      <van-cell
        title="生日"
        is-link
        :value="userProfile.birthday"
        @click="onBirthCellClick"
      />
    </van-cell-group>
    <!-- 修改名称弹出框 -->
    <van-dialog
      v-model="showNameDialog"
      :before-close="beforeClose"
      title="修改名称"
      show-cancel-button
    >
      <!-- input-align 文本横向的对其方式 -->
      <van-field
        v-model.trim="name"
        placeholder="请输入用户名"
        input-align="center"
        ref="nameRef"
        maxlength="11"
      />
    </van-dialog>
    <!-- 修改生日弹出框 -->
    <van-action-sheet v-model="showBirthDialog">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="showBirthDialog = false"
        @confirm="updateBirthday"
      />
    </van-action-sheet>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// 导入 dayjs
import dayjs from "dayjs";
import { updateUserProfile, updateUserAvatar } from "../../api/userAPI";
export default {
  name: "UserEdit",
  data() {
    return {
      // 是否展示修改姓名的对话框
      showNameDialog: false,
      // 用户填写的姓名
      name: "",
      // 是否展示修改生日的动作面板
      showBirthDialog: false,

      // 最小可选日期（0 表示 1月份）
      minDate: new Date(1900, 0, 1),
      // 最大可选日期（11 表示 12月份）
      maxDate: new Date(2050, 11, 31),
      // 当前日期
      currentDate: new Date(),
    };
  },
  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {
    ...mapActions(["initUserProfile"]),
    // 点击修改名称
    onNameCellClick() {
      this.showNameDialog = true;
      // 当打开弹出框的时候，把用户的姓名 显示在弹出框中
      this.name = this.userProfile.name;

      this.$nextTick(() => {
        // 获取dom元素/ 也可以获取 组件
        // console.log(this.$refs.nameRef)
        this.$refs.nameRef.focus();
      });
    },
    // 点击修改生日
    onBirthCellClick() {
      // 如果用户生日的值存在，则初始值为用户的生日；否则为当前日期
      this.currentDate = this.userProfile.birthday
        ? new Date(this.userProfile.birthday)
        : new Date();

      // 展示动作面板
      this.showBirthDialog = true;
    },
    async updateBirthday(value) {
      // 关闭动作面板
      this.showBirthDialog = false;

      // 打印用户选择的日期
      // console.log(value)

      // / 调用 .format() 方法对时间进行格式化
      const dateStr = dayjs(value).format("YYYY-MM-DD");
      // 打印用户选择的日期
      // console.log(dateStr)
      // 调用 API 接口，修改用户的生日
      const { data: res } = await updateUserProfile({ birthday: dateStr });

      if (res.message === "OK") {
        // 重新获取用户的简介信息
        this.initUserProfile();
        // 提示用户更新成功
        this.$notify({
          type: "success",
          message: "生日修改成功！",
          duration: 2000,
        });
      }
    },
    beforeClose(action, done) {
      // action 是一个值 有可能是 cancel 有可能是 confirm
      // done 是一个方法 如果调用done() 弹出框要关闭 如果调用了 done(false)阻止弹出框关闭
      // console.log("dialog关闭了")
      // console.log(action);
      // done();
      // 1. 如果点击了 取消按钮
      if (action === "cancel") done();
      // 如果 name 为空 或者 name的值大于7 那么不让关闭 提示name的值犯了哪些错误  让提示框持续获得焦点
      if (this.name.length === 0 || this.name.length > 11) {
        // 不让关闭
        done(false);
        // 提示
        this.$notify({
          type: "warning",
          message: "名称的长度为1-11个字符",
          duration: 2000,
        });
        // 让提示框持续获得焦点
        this.$nextTick(() => {
          this.$refs.nameRef.focus();
        });
      }
      // TODO：发起修改名称的请求：
      // A. 如果请求成功，则调用 done() 关闭对话框
      // B. 如果请求失败，则提示用户失败的信息，并调用 done(false) 阻止对话框关闭
      this.updateName(done);
    },
    async updateName(done) {
      try {
        const { data: res } = await updateUserProfile({ name: this.name });

        // console.log(res);
        if (res.message === "OK") {
          this.$toast.success("姓名更新成功");
          this.userProfile.name = this.name;
          done();
        }
      } catch (error) {
        // 如果 网络状态为 409 那么代表 名称重复了
        if (error.response.status === 409) {
          this.$notify({
            type: "error",
            message: "名称被占用，请更换后重试！",
            duration: 2000,
          });
          // 持续显示 弹出框 不要让弹出框隐藏
          done(false);
          // 让文本框持续获得焦点
          this.$refs.nameRef.focus();
        } else {
          // 否则 代表 更新用户名失败
          this.$notify({
            type: "danger",
            message: "名称更新失败",
            duration: 2000,
          });
          // 持续显示 弹出框 不要让弹出框隐藏
          done();
        }
      }
    },

    // 选中的文件发生了变化
    async onFileChange(e) {
      // 获取到用户选择的文件列表
      const files = e.currentTarget.files;
      // 如果没有选择任何文件，则不执行后续的业务逻辑
      if (files.length === 0) return;

      // 打印用户选择的第一个文件
      // 1.1 创建 FormData 的对象
      const fd = new FormData();
      // 1.2 向 fd 中追加数据项
      fd.append("photo", files[0]);

      // 2. 调用 API 接口，更新头像
      const { data: res } = await updateUserAvatar(fd);
      if (res.message === "OK") {
        // 2.1 更新用户的简介信息
        this.initUserProfile();
        // 2.2 提示用户更新成功
        this.$notify({
          type: "success",
          message: "更新头像成功！",
          duration: 2000,
        });
      }
    },
  },
  created() {
    this.initUserProfile();
  },
};
</script>

<style lang="less" scoped>
.user-edit-container {
  padding-top: 46px;
}

.user-edit-container {
  padding-top: 46px;
  .avatar {
    width: 50px;
    height: 50px;
  }
}
</style>
