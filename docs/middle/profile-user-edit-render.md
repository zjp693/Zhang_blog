# 渲染用户编辑页面

## 导航到编辑用户资料页面

::: tip 目标
这一小节，我们的目标是 导航到编辑用户资料页面
:::

::: warning 步骤

1. 在 `/src/views/` 目录下新建 `UserEdit` 组件
2. 在路由模块中导入 `UserEdit` 组件
3. 在路由模块的 `routes` 数组中声明 `UserEdit` 组件的路由规则
4. 在 `User` 组件中，为编辑资料的 `<van-cell>` 绑定点击事件处理函数
:::

::: info 体验

* **Step.1：在 `/src/views/` 目录下新建 `UserEdit` 组件**

```html
<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar title="编辑资料" left-arrow @click-left="$router.back()" fixed />

    <!-- 用户资料 -->
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image round class="avatar" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        </template>
      </van-cell>
      <van-cell title="名称" is-link value="张三" />
      <van-cell title="生日" is-link value="2012-12-12" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'UserEdit'
}
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
```

* **Step.2：在路由模块中导入 `UserEdit` 组件**

```js
import UserEdit from '@/views/UserEdit/UserEdit.vue'
```

* **Step.3：在路由模块的 `routes` 数组中声明 `UserEdit` 组件的路由规则**

```js
const routes = [
  // 编辑用户资料的路由规则
  { path: '/user/edit', component: UserEdit, name: 'user-edit' }
]
```

* **Step.4：在 `User` 组件中，为编辑资料的 `<van-cell>` 绑定点击事件处理函数**

```html
<!-- 通过命名路由实现导航跳转 -->
<van-cell icon="edit" title="编辑资料" is-link @click="$router.push({name: 'user-edit'})" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 请求用户的简介信息

::: tip 目标
这一小节，我们的目标是请求用户的简介信息
:::

::: warning 步骤

1. 在 `userAPI.js` 模块中，定义请求用户简介信息的接口
2. 在 `Vuex` 模块中，按需导入请求用户简介信息的接口
3. 在 `vuex` 模块中定义名为 `initUserProfile` 的异步方法
:::

::: info 体验

* **Step.1：在 `userAPI.js` 模块中，定义请求用户简介信息的接口**

```js
// 请求用户简介信息的 API
export const getUserProfileAPI = () => {
  return request.get('/v1_0/user/profile')
}
```

* **Step.2：在 `Vuex` 模块中，按需导入请求用户简介信息的接口**

```js
// 按需导入 API 方法
import { getUserInfoAPI, getUserProfileAPI } from '@/api/userAPI.js'
```

* **Step.3：在 `vuex` 模块中定义名为 `initUserProfile` 的异步方法**

```js
// 初始化用户的简介信息
async initUserProfile(ctx) {
  // 调用 API 接口
  const { data: res } = await getUserProfileAPI()
  if (res.message === 'OK') {
    // TODO：把请求到的数据转交给 Mutation 方法   ctx.commit('Mutation方法名')
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 把请求到的数据转存到 state

::: tip 目标
这一小节，我们的目标是把请求到的数据转存到 state中
:::

::: warning 步骤

1. 在 `vuex` 模块中，在 `initState` 对象中新增 `userProfile` 数据节点，用来全局存储用户的简介信息
2. 在 `vuex` 模块中的 `mutations` 节点下，定义名为 `updateUserProfile` 的 `Mutation` 方法，负责把 `Action` 请求到的数据转存到 `state` 中
3. 在名为 `initUserProfile` 的 `Action` 方法中，通过 `ctx.commit()` 触发指定名称的 `Mutation` 方法
4. 改造 `vuex` 模块中的 `cleanState` 函数，当用户退出登录时清空 `state.userProfile`
:::

::: info 体验

* **Step.1：在 `vuex` 模块中，在 `initState` 对象中新增 `userProfile` 数据节点，用来全局存储用户的简介信息**

```js
// 初始的 state 对象
let initState = {
  // token 的信息对象
  tokenInfo: {},
  // 用户的基本信息
  userInfo: {},
  // 用户的简介信息
  userProfile: {}
}
```

* **Step.2：在 `vuex` 模块中的 `mutations` 节点下，定义名为 `updateUserProfile` 的 `Mutation` 方法，负责把 `Action` 请求到的数据转存到 `state` 中**

```js
// 更新 userProfile 的方法
updateUserProfile(state, payload) {
  state.userProfile = payload
  this.commit('saveStateToStorage')
},
```

* **Step.3: 在名为 `initUserProfile` 的 `Action` 方法中，通过 `ctx.commit()` 触发指定名称的 `Mutation` 方法**

```js
// 初始化用户的简介信息
async initUserProfile(ctx) {
  // 调用 API 接口
  const { data: res } = await getUserProfileAPI()
  if (res.message === 'OK') {
    // TODO：把请求到的数据转交给 Mutation 方法   ctx.commit('Mutation方法名')
    ctx.commit('updateUserProfile', res.data)
  }
}
```

* **Step.4：改造 `vuex` 模块中的 `cleanState` 函数，当用户退出登录时清空 `state.userProfile`**

```js
// 清空 vuex 和本地的数据
cleanState(state) {
  // 1. 清空 vuex 中的数据
  state.tokenInfo = {}
  state.userInfo = {}
  state.userProfile = {}

  // 2. 将清空后的 state 存储到本地
  this.commit('saveStateToStorage')
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 在组件中使用 Actions 方法

::: tip 目标
这一小节，我们的目标是在组件中使用 Actions方法
:::

::: warning 步骤

1. 在 `UserEdit.vue` 组件中，从 `vuex` 中按需导入 `mapActions` 辅助函数
2. 在 `UserEdit.vue` 组件的 `methods` 节点下调用 `mapActions` 辅助函数，将需要的 `Action` 方法映射到当前组件中使用
3. 在 `UserEdit.vue` 组件的 `created` 生命周期函数中调用映射过来的 `initUserProfile` 方法
:::

::: info 体验

* **Step.1：在 `UserEdit.vue` 组件中，从 `vuex` 中按需导入 `mapActions` 辅助函数**

```js
// 按需导入辅助函数
import { mapActions } from 'vuex'
```

* **Step.2：在 `UserEdit.vue` 组件的 `methods` 节点下调用 `mapActions` 辅助函数，将需要的 `Action` 方法映射到当前组件中使用**

```js
export default {
  name: 'UserEdit',
  methods: {
    // 从 vuex 中把指定名称的 Action 方法映射到组件中使用
    ...mapActions(['initUserProfile'])
  }
}
```

* **Step.3：在 `UserEdit.vue` 组件的 `created` 生命周期函数中调用映射过来的 `initUserProfile` 方法**

```js
created() {
  this.initUserProfile()
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 在组件中使用 state中的数据

::: tip 目标
这一小节，我们的目标是在组件中使用state中的数据
:::

::: warning 步骤

1. 在 `UserEdit.vue` 组件中，从 `vuex` 中按需导入 `mapState` 辅助函数
2. 在 `UserEdit.vue` 组件的 `computed` 节点下调用 `mapState` 辅助函数，将需要的 `State` 数据映射到当前组件中使用
3. 把映射过来的数据，渲染到 `UserEdit.vue` 组件的模板结构中
:::

::: info 体验

* **Step.1：在 `UserEdit.vue` 组件中，从 `vuex` 中按需导入 `mapState` 辅助函数**

```js
// 按需导入辅助函数
import { mapActions, mapState } from 'vuex'
```

* **Step.2：在 `UserEdit.vue` 组件的 `computed` 节点下调用 `mapState` 辅助函数，将需要的 `State` 数据映射到当前组件中使用**

```js
computed: {
  // 从 vuex 中把指定名称的 State 数据映射到组件中使用
  ...mapState(['userProfile'])
}
```

* **Step.3：把映射过来的数据，渲染到 `UserEdit.vue` 组件的模板结构中**

```html
<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar title="编辑资料" left-arrow @click-left="$router.back()" fixed />

    <!-- 用户资料 -->
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image round class="avatar" :src="userProfile.photo" />
        </template>
      </van-cell>
      <van-cell title="名称" is-link :value="userProfile.name" />
      <van-cell title="生日" is-link :value="userProfile.birthday" />
    </van-cell-group>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
