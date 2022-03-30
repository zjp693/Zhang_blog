# 渲染个人中心

## 渲染个人中心的基础布局

::: tip 目标
这一小节，我们的目标是 渲染个人中心的基础布局
:::

::: warning 步骤

1. 在 `/src/views/` 目录下新建 `User.vue` 组件
2. 在 `/src/router/index.js` 模块中导入 `User.vue` 组件
3. 在路由模块的 `routes` 数组中，声明路由规则
4. 在`/User` 组件中，声明模板结构
5. 在 `User` 组件中编写样式
:::

::: info 体验

* **Step.1：在 `/src/views/` 目录下新建 `User.vue` 组件**
* **Step.2：在 `/src/router/index.js` 模块中导入 `User.vue` 组件**
* **Step.3：在路由模块的 `routes` 数组中，声明路由规则**
* **Step.4：在`/User` 组件中，声明模板结构**

```html
<template>
  <div class="user-container">
    <!-- 用户基本信息面板 -->
    <div class="user-card">
      <!-- 用户头像、姓名 -->
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #icon>
          <img src="" alt="" class="avatar">
        </template>
        <template #title>
          <span class="username">用户名</span>
        </template>
        <template #label>
          <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
        </template>
      </van-cell>
      <!-- 动态、关注、粉丝 -->
      <div class="user-data">
        <div class="user-data-item">
          <span>0</span>
          <span>动态</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>关注</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>

    <!-- 操作面板 -->
    <van-cell-group class="action-card">
      <van-cell icon="edit" title="编辑资料" is-link />
      <van-cell icon="chat-o" title="小思同学" is-link />
      <van-cell icon="warning-o" title="退出登录" is-link />
    </van-cell-group>
  </div>
</template>
```

* **Step.5：在 `User` 组件中编写样式**

```css
.user-container {
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
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 在 vuex 中请求用户的基本信息

::: tip 目标
这一小节，我们的目标是在Vuex中请求用户的基本信息
:::

::: warning 步骤

1. 在 `userAPI.js` 模块中，定义请求用户基本信息的 `API` 方法
2. 在 `vuex` 模块中，按需导入请求用户基本信息的 `API` 方法
3. 在 `vuex`模块中，定义`initUserInfo`异步方法
4. 在 `vuex` 模块中，在 `initState` 对象中新增 `userInfo` 数据节点
5. 在 `vuex` 模块中定义`updateUserInfo` 同步方法，负责请求到的数据转存到 `state` 中
6. 在`initUserInfo` 方法中，触发指定名称的 `Mutation` 方法
:::

::: info 体验

* **Step.1：在`userAPI.js`模块中，定义请求用户基本信息的方法**

```js
// 请求用户基本信息的 API
export const getUserInfoAPI = () => {
  return request.get('/v1_0/user')
}
```

* **Step.2：在 `vuex` 模块中，按需导入请求用户基本信息的方法**

```js
// 按需导入 API 方法
import { getUserInfoAPI } from '@/api/userAPI.js'
```

* **Step.3：在 `vuex`模块中，定义`initUserInfo`异步方法**

```js
actions: {
  // 初始化用户的基本信息
  async initUserInfo(ctx) {
    // 调用 API 接口
    const { data: res } = await getUserInfoAPI()
    if (res.message === 'OK') {
      // TODO：把数据转交给 Mutation 方法   ctx.commit('Mutation方法名')
    }
  }
}
```

* **Step.4：在 `vuex` 模块中，在 `initState` 对象中新增 `userInfo` 数据节点**

```js
// 初始的 state 对象
let initState = {
  // token 的信息对象
  tokenInfo: {},
  // 用户的基本信息
  userInfo: {}
}
```

* **Step.5：在 `vuex` 模块中定义`updateUserInfo` 同步方法，负责请求到的数据转存到 `state` 中**

```js
// 更新 userInfo 的方法
updateUserInfo(state, payload) {
  // 1. 把用户信息转存到 state 中
  state.userInfo = payload
  // 2. 将最新的 state 对象持久化存储到本地
  this.commit('saveStateToStorage')
}
```

* **Step.6：在`initUserInfo` 方法中，触发指定名称的同步方法**

```js
// 初始化用户的基本信息
async initUserInfo(ctx) {
  // 调用 API 接口
  const { data: res } = await getUserInfoAPI()
  if (res.message === 'OK') {
    // TODO：把数据转交给 Mutation 方法   ctx.commit('Mutation方法名')
    ctx.commit('updateUserInfo', res.data)
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 在组件中使用 Action 方法

::: tip 目标
这一小节，我们的目标是在组件中使用 Actions中的方法
:::

::: warning 步骤

1. 在`User`组件中，导入 `mapActions` 辅助函数
2. 在`User`组件中，调用`mapActions`辅助函数，将方法映射到组件中
3. 在`User`组件的 `created` 函数中调用映射过来的 `initUserInfo` 方法
:::

::: info 体验

* **Step.1：在`User`组件中，导入 `mapActions` 辅助函数**

```js
// 按需导入辅助函数
import { mapActions } from 'vuex'
```

* **Step.2：在`User`组件中，调用`mapActions`辅助函数，将方法映射到组件中**

```js
export default {
  name: 'User',
  methods: {
    // 从 vuex 中把指定名称的 Action 方法映射到组件中使用
    ...mapActions(['initUserInfo'])
  }
}
```

* **Step.3：在`User`组件的 `created` 函数中调用映射过来的 `initUserInfo` 方法**

```js
created() {
  this.initUserInfo()
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 在组件中使用 state 数据

::: tip 目标
这一小节，我们的目标是在组件中使用vuex中的state数据
:::

::: warning 步骤

1. 在 `User` 组件中，导入 `mapState` 辅助函数
2. 在 `User` 组件的 `computed` 节点下调用 `mapState` 辅助函数,映射数据
3. 把映射过来的数据，渲染到 `User` 组件的模板结构中

:::

::: info 体验

* **Step.1：在 `User` 组件中，导入 `mapState` 辅助函数**

```js
// 按需导入辅助函数
import { mapActions, mapState } from 'vuex'
```

* **Step.2：在 `User` 组件的 `computed` 节点下调用 `mapState` 辅助函数,映射数据**

```js
computed: {
  // 从 vuex 中把指定名称的 State 数据映射到组件中使用
  ...mapState(['userInfo'])
}
```

* **Step.3：把映射过来的数据，渲染到 `User` 组件的模板结构中**

```html
<template>
  <div class="user-container">
    <!-- 用户基本信息面板 -->
    <div class="user-card">
      <!-- 用户头像、姓名 -->
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #icon>
          <img :src="userInfo.photo" alt="" class="avatar">
        </template>
        <template #title>
          <span class="username">{{userInfo.name}}</span>
        </template>
        <template #label>
          <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
        </template>
      </van-cell>
      <!-- 动态、关注、粉丝 -->
      <div class="user-data">
        <div class="user-data-item">
          <span>{{userInfo.art_count}}</span>
          <span>动态</span>
        </div>
        <div class="user-data-item">
          <span>{{userInfo.follow_count}}</span>
          <span>关注</span>
        </div>
        <div class="user-data-item">
          <span>{{userInfo.fans_count}}</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>

    <!-- 操作面板 -->
    <van-cell-group class="action-card">
      <van-cell icon="edit" title="编辑资料" is-link />
      <van-cell icon="chat-o" title="小思同学" is-link />
      <van-cell icon="warning-o" title="退出登录" is-link />
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
