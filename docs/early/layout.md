# 模板页面开发

## 渲染模板页面组件

::: tip 目标
这一小节，我们的目标是 渲染Main主页组件
:::

::: warning 步骤

1. 在`src/views`目录下新建`Main`文件夹，并在其下新建`Main.vue`主页组件
2. 在`/src/router/index.js`路由模块中，导入`Main.vue`组件
3. 在`routes`数组中，创建`Main.vue`组件对应的路由规则
:::

::: info 体验

* **Step. 1：在`src/views`目录下新建`Main`文件夹，并在其下新建`Main.vue`主页组件**

```vue
<template>
  <div>Main.vue 主页</div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="less" scoped></style>
```

* **Step. 2：在`/src/router/index.js`路由模块中，导入`Main.vue`组件**

```js
import Main from '@/views/Main/Main.vue'
```

* **Step. 3：在`routes`数组中，创建`Main.vue`组件对应的路由规则**

```js
const routes = [
  // 登录的路由规则
  { path: '/login', component: Login, name: 'login' },
  // 主页的路由规则
  { path: '/', component: Main }
]
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 渲染模板页面底部的TabBar

::: tip 目标
这一小节，我们的目标是 渲染主页底部的TabBar,
基于 Vant 的 [Tabbar](https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar)标签栏组件，可以轻松实现底部 tabbar 的效果
:::

::: warning 步骤

* **Step. 1：渲染基本的tabbar效果**

```html
<template>
  <div>
    <!-- 底部的 TabBar -->
    <van-tabbar>
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
```

* **Step. 2：为底部的tabbar开启路由跳转功能**

```html
<template>
  <div>
    <!-- 底部的 TabBar -->
    <!-- route 属性：是否开启路由模式 -->
    <van-tabbar route>
      <!-- to 属性：点击后要跳转到的路由地址 -->
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
