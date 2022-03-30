<template>
  <div class="layout">
    <!-- 1. 用来显示 / 的子路由的 容器 -> router-view -->
    <!-- 路由占位符 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 2. 菜单 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="question" to="/question">问答</van-tabbar-item>
      <van-tabbar-item icon="video" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style></style>
