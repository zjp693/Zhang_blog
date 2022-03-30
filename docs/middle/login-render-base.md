# 渲染登录组件

::: tip 目标
这一小节，我们的目标是基于路由来渲染登录组件
:::

::: warning 步骤

1. 在`/src/views`目录之下，创建Login文件夹，并在其下新建Login.vue登录组件
2. 在`/src/router/index.js`路由模块中，导入需要通过路由渲染的login.vue登录组件
3. 在路由模块的routes数组中，声明登录组件的路由规则
4. 当用户访问`http://localhost:8080/#/login`地址的时候，渲染出登录组件
:::

::: info 体验

* **Step.1：在`/src/views`目录之下，创建Login文件夹，并在其下新建Login.vue登录组件**

```html
<template>
  <div>登录组件</div>
</template>

<script>
export default {
  // name 是当前组件的名称（建议为每个组件都指定唯一的 name 名称）
  name: 'Login'
}
</script>

<style lang="less" scoped></style>
```

* **Step.2：在`/src/router/index.js`路由模块中，导入需要通过路由渲染的login.vue登录组件**

```js
// 导入需要的路由组件
import Login from '@/views/Login/Login.vue'
```

* **Step.3：在路由模块的routes数组中，声明登录组件的路由规则**

```js
const routes = [
  // 带有 name 名称的路由规则，叫做“命名路由”
  { path: '/login', component: Login, name: 'login' }
]
```

* **Step.4：当用户访问`http://localhost:8080/#/login`地址的时候，渲染出登录组件**

```vue
<template>
  <div>
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped></style>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
