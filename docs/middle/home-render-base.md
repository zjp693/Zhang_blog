# 渲染首页组件

::: tip 目标
这一小节，我们的目标是渲染Home组件
:::

::: warning 步骤

1. 将资料目录下的`toutiao_logo.png`图片拷贝到项目`assets`资源目录
2. 在`/src/views` 目录下新建`Home`文件夹，并在其下新建`Home.vue`组件
3. 在路由模块中，导入刚才新建的`Home.vue`组件
4. 找到主页`Main.vue`对应的路由规则，遇到`children`数组声明嵌套的子路由规则
5. 在`Main.vue`组件的模板结构中，通过`router-view`声明`Home`的路由占位符

:::

::: info 体验

* **Step. 1：将资料目录下的`toutiao_logo.png`图片拷贝到项目`assets`资源目录**
* **Step. 2：在`/src/views` 目录下新建`Home`文件夹，并在其下新建`Home.vue`组件**

```vue
<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar fixed>
      <!-- 左侧的插槽 -->
      <template #left>
        <img src="../../assets/toutiao_logo.png" alt="logo" class="logo" />
      </template>
      <!-- 右侧的插槽 -->
      <template #right>
        <van-icon name="search" color="white" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
// 组件外层容器的样式
.home-container {
  padding-top: 46px;
  padding-bottom: 50px;
}
// logo 样式
.logo {
  height: 80%;
}
</style>
```

* **Step. 3：在路由模块中，导入刚才新建的`Home.vue`组件**

```js
import Home from '@/views/Home/Home.vue'
```

* **Step. 4：找到主页`Main.vue`对应的路由规则，遇到`children`数组声明嵌套的子路由规则**

```js
const routes = [
  // 带有 name 名称的路由规则，叫做“命名路由”
  { path: '/login', component: Login, name: 'login' },
  {
    path: '/',
    component: Main,
    children: [
      // path 为"空字符串"的子路由规则，叫做"默认子路由"
      { path: '', component: Home, name: 'home' },
    ]
  }
]
```

* **Step. 5：在`Main.vue`组件的模板结构中，通过`router-view`声明`Home`的路由占位符**

```vue
<template>
  <div>
    <!-- Home 和 User 的路由占位符 -->
    <router-view></router-view>

    <!-- 底部的 TabBar -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
