# 退出登录

## 渲染退出登录的确认提示框

::: tip 目标
这一小节，我们的目标是 渲染退出登录的确认提示框
:::

::: warning 步骤

1. 在 `User` 组件中，为退出登录的 `<van-cell>` 组件绑定点击事件
2. 在 `User` 组件的 `methods` 节点下，定义 `logout` 方法
3. 基于 `async/await` 简化 `Promise` 的调用
4. 基于 `.catch()` 方法捕获 `Promise` 中产生的错误
5. 判断用户点击了确认还是取消按钮
:::

::: info 体验

* **Step.1：在 `User` 组件中，为退出登录的 `<van-cell>` 组件绑定点击事件**

```html
<van-cell icon="warning-o" title="退出登录" is-link @click="logout" />
```

* **Step.2：在 `User` 组件的 `methods` 节点下，定义 `logout` 方法**

```js
// 点击了退出登录
logout() {
  // 展示确认的提示框
  const confirmResult = this.$dialog.confirm({
    title: '提示',
    message: '确认退出登录吗？'
  })

  // 经过打印输出，发现 confirmResult 是一个 Promise 对象
  console.log(confirmResult)
}
```

* **Step.3：基于 `async/await` 简化 `Promise` 的调用**

```js
// 点击了退出登录
async logout() {
  // 展示确认的提示框
  const confirmResult = await this.$dialog.confirm({
    title: '提示',
    message: '确认退出登录吗？'
  })

  // 经过打印输出，发现 confirmResult 是一个 string 字符串
  console.log(confirmResult, typeof confirmResult)
}
```

* **Step.4：基于 `.catch()` 方法捕获 `Promise` 中产生的错误**

```js
// 点击了退出登录
async logout() {
  // 展示确认的提示框
  const confirmResult = await this.$dialog
    .confirm({
      title: '提示',
      message: '确认退出登录吗？'
    })
    .catch(err => {
      // err 是错误的结果
      console.log(err)
      // 这里把 err return 给了 confirmResult
      return err
    })

  // 经过打印输出发现：
  // 点击“确认”按钮时，confirmResult 的值为字符串 confirm
  // 点击“取消”按钮时，confirmResult 的值为字符串 cancel
  console.log(confirmResult)
}
```

* **Step.5：判断用户点击了确认还是取消按钮**

```js
// 点击了退出登录
async logout() {
  // 展示确认的提示框
  const confirmResult = await this.$dialog
    .confirm({
      title: '提示',
      message: '确认退出登录吗？'
    })
    .catch(err => {
      // err 是错误的结果
      console.log(err)
      // 这里把 err return 给了 confirmResult
      return err
    })
2
  // 如果点击了取消，则不执行后续的操作
  if (confirmResult === 'cancel') return

  // TODO：实现退出的登录操作：
  // 1. 清空 vuex 中的数据
  // 2. 清空本地的数据
  // 3. 跳转到登录页
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 实现退出登录的功能

::: tip 目标
这一小节，我们的目标是 实现退出登录的功能
:::

::: warning 步骤

1. 在 `vuex` 中定义名为 `cleanState` 的同步方法
2. 在 `User` 组件中按需导入 `mapMutations` 辅助函数
3. 调用 `mapMutations` 辅助函数，把 `cleanState`映射到`User`组件中
4. 在 `User` 组件的 `logout` 方法中，调用映射过来的方法，并跳转到登录页
:::

::: info 体验

* **Step.1：在 `vuex` 中定义名为 `cleanState` 的同步方法**

```js
// 清空 vuex 和本地的数据
cleanState(state) {
  // 1. 清空 vuex 中的数据
  state.tokenInfo = {}
  state.userInfo = {}

  // 2. 将清空后的 state 存储到本地
  this.commit('saveStateToStorage')
}

```

* **Step.2：在 `User` 组件中按需导入 `mapMutations` 辅助函数**

```js
// 按需导入辅助函数
import { mapActions, mapState, mapMutations } from 'vuex'
```

* **Step.3：调用 `mapMutations` 辅助函数，把 `cleanState`映射到`User`组件中**

```js
methods: {
  ...mapMutations(['cleanState']),
}
```

* **Step.4：在 `User` 组件的 `logout` 方法中，调用映射过来的方法，并跳转到登录页**

```js
// 点击了退出登录
async logout() {
  // 展示确认的提示框
  const confirmResult = await this.$dialog
    .confirm({
      title: '提示',
      message: '确认退出登录吗？'
    })
    .catch(err => {
      // err 是错误的结果
      console.log(err)
      // 这里把 err return 给了 confirmResult
      return err
    })

  // 如果点击了取消，则不执行后续的操作
  if (confirmResult === 'cancel') return

  // TODO：实现退出的登录操作：
  // 1. 清空 vuex 中的数据
  // 2. 清空本地的数据
  this.cleanState()
  // 3. 跳转到登录页
  this.$router.push('/login')
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
