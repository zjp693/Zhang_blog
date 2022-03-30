<template>
  <div class="user">
    <!-- 用户基本信息面板 -->
    <div class="user-card">
      <!-- 用户头像、姓名 -->
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #icon>
          <img :src="userInfo.photo" alt class="avatar" />
        </template>
        <template #title>
          <span class="username">{{ userInfo.name }}</span>
        </template>
        <template #label>
          <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
        </template>
      </van-cell>
      <!-- 动态、关注、粉丝 -->
      <div class="user-data">
        <div class="user-data-item">
          <span>{{ userInfo.art_count }}</span>
          <span>动态</span>
        </div>
        <div class="user-data-item">
          <span>{{ userInfo.follow_count }}</span>
          <span>关注</span>
        </div>
        <div class="user-data-item">
          <span>{{ userInfo.fans_count }}</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>

    <!-- 操作面板 -->
    <van-cell-group class="action-card">
      <van-cell icon="edit" title="编辑资料" is-link @click="editUser" />
      <van-cell icon="chat-o" title="小思同学" is-link to="/chat" />
      <van-cell icon="warning-o" title="退出登录" is-link @click="logout" />
    </van-cell-group>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["cleanState"]),
    ...mapActions(["initUserInfo"]),
    async logout() {
      let confirmResult = await this.$dialog.confirm({
        title: "提示",
        message: "确认退出登录吗？",
      });
      // .then(() => {
      //   // on confirm
      //   console.log("确定")
      // })
      // .catch((error) => {
      //   // on cancel
      //   // console.log(error);
      //   return error;
      //   // console.log("取消")
      // });

      // console.log(confirmResult)

      if (confirmResult === "confirm") {
        // console.log("我退出了")
        this.cleanState();
        this.$router.push("/login");
      }
    },
    editUser() {
      // console.log(id);
      this.$router.push(`/useredit`);
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  created() {
    this.initUserInfo();
  },
  // 被激活了
  activated() {
    // 只要组件被激活了，就重新初始化用户的信息
    this.initUserInfo();
  },
};
</script>

<style lang="less" scoped>
.user {
  .user-card {
    background-color: #007bff;
    color: white;
    padding-top: 20px;
    .van-cell {
      background: #007bff;
      color: white;
      &::after {
        display: none;
      }
      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .user-data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
    .user-data-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
    }
  }
}
</style>
