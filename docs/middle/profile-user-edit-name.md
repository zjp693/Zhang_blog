# 修改用户姓名

## 实现修改姓名的弹出框效果

::: tip 目标
这一小节，我们的目标是实现修改姓名的弹出框效果，基于 Vant 的 [Dialog 弹出框组件](https://vant-contrib.gitee.io/vant/#/zh-CN/dialog)，可以方便的实现修改用户姓名的弹出框效果
:::

::: warning 步骤

1. 在 `UserEdit.vue` 组件的 `data` 中定义如下的两个数据项
2. 和用户资料平级，在用户资料的下面，基于 `<van-dialog>` 组件渲染修改名称的弹出框组件
3. 点击名称的 `<van-cell>` 时展示修改名称的对话框
4. 在 `UserEdit.vue` 的 `methods` 中声明 `onNameCellClick` 方法
:::

::: info 体验

* **Step.1：在 `UserEdit.vue` 组件的 `data` 中定义如下的两个数据项**

```js
data() {
  return {
    // 是否展示修改姓名的对话框
    showNameDialog: false,
    // 用户填写的姓名
    name: ''
  }
},
```

* **Step.2：和用户资料平级，在用户资料的下面，基于 `<van-dialog>` 组件渲染修改名称的弹出框组件**

```html
<!-- 修改用户名称的对话框 -->
<van-dialog v-model="showNameDialog" title="修改名称" show-cancel-button>
  xxx
</van-dialog>
```

* **Step.3：点击名称的 `<van-cell>` 时展示修改名称的对话框**

```html
<van-cell title="名称" is-link :value="userProfile.name" @click="onNameCellClick" />
```

* **Step.4：在 `UserEdit.vue` 的 `methods` 中声明 `onNameCellClick` 方法**

```js
// 点击了修改名称的 cell
onNameCellClick() {
  this.showNameDialog = true
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 渲染修改名称的表单项

::: tip 目标
这一小节，我们的目标是渲染修改名称的表单项
:::

::: warning 步骤

1. 基于 Vant 的 `<van-field>` 组件可以在 Dialog 对话框组件内部渲染名称的表单项
2. 在 UserEdit.vue 组件中修改 methods 中的 onNameCellClick 方法

:::

::: info 体验

* **Step.1：基于 Vant 的 `<van-field>` 组件可以在 Dialog 对话框组件内部渲染名称的表单项**

```html
<!-- 修改用户名称的对话框 -->
<van-dialog v-model="showNameDialog" title="修改名称" show-cancel-button>
  <!-- input-align 文本横向的对其方式 -->
  <van-field v-model.trim="name" placeholder="请输入用户名" input-align="center" maxlength="7" />
</van-dialog>
```

* **Step.2：在 UserEdit.vue 组件中修改 methods 中的 onNameCellClick 方法**

```js
// 点击了修改名称的 cell
onNameCellClick() {
  // 把用户的名称赋值给 data 中的 name
  this.name = this.userProfile.name
  // 展示对话框
  this.showNameDialog = true
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 文本框自动获得焦点

::: tip 目标
这一小节，我们的目标是使得文本框自动获得焦点
:::

::: warning 步骤

1. 为名称的 `<van-field>` 组件添加 `ref` 引用名称
2. 改造 `UserEdit.vue` 组件中的 `onNameCellClick` 方法
:::

::: info 体验

* **Step.1：为名称的 `<van-field>` 组件添加 `ref` 引用名称**

```html
<van-field v-model.trim="name" placeholder="请输入用户名" input-align="center" maxlength="7" ref="nameRef" />
```

* **Step.2：改造 `UserEdit.vue` 组件中的 `onNameCellClick` 方法**

```js
// 点击了修改名称的 cell
onNameCellClick() {
  // 把用户的名称赋值给 data 中的 name
  this.name = this.userProfile.name
  // 展示对话框
  this.showNameDialog = true
  // DOM 更新完毕之后，让文本框自动获得焦点
  this.$nextTick(() => {
    this.$refs.nameRef.focus()
  })
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 自定义 Dialog 关闭时的行为

::: tip 目标
这一小节，我们的目标是实现自定义Dialog关闭时的行为
:::

::: warning 步骤

1. 为 `<van-dialog>` 组件绑定 `before-close` 属性，并指定对应的处理函数
2. 在 `UserEdit.vue` 组件的 `methods` 中定义 `beforeClose` 函数，用来自定义 `Dialog` 关闭时的行为
3. 在 `beforeClose` 中自定义 `Dialog` 关闭时的行为
:::

::: info 体验

* **Step.1：为 `<van-dialog>` 组件绑定 `before-close` 属性，并指定对应的处理函数**

```html
<!-- 修改用户名称的对话框 -->
<van-dialog v-model="showNameDialog" title="修改名称" show-cancel-button :before-close="beforeClose"></van-dialog>
```

* **Step.2：在 `UserEdit.vue` 组件的 `methods` 中定义 `beforeClose` 函数，用来自定义 `Dialog` 关闭时的行为**

```js
// Dialog 关闭前的处理函数
beforeClose(action, done) {
  // action 可能的值有两个：cancel 和 confirm
  console.log(action)

  // 调用 done() 时会关闭对话框；调用 done(false) 时会阻止对话框关闭
  done()
}
```

* **Step.3：在 `beforeClose` 中自定义 `Dialog` 关闭时的行为**

```js
// Dialog 关闭前的处理函数
beforeClose(action, done) {
  // 点击了“取消”按钮
  if (action === 'cancel') return done()

  // 判断名称的长度是否不合法
  if (this.name === '' || this.name.length > 7) {
    // 1. 提示用户“名称的长度为1-7个字符”
    this.$notify({ type: 'warning', message: '名称的长度为1-7个字符', duration: 2000 })
    // 2. 让文本框持续获得焦点
    this.$refs.nameRef.focus()
    // 3. 阻止对话框关闭
    return done(false)
  }

  // TODO：发起修改名称的请求：
  // A. 如果请求成功，则调用 done() 关闭对话框
  // B. 如果请求失败，则提示用户失败的信息，并调用 done(false) 阻止对话框关闭
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 实现修改名称的功能

::: tip 目标
这一小节，我们的目标是实现修改名称的功能
:::

::: warning 步骤

1. 在 `userAPI.js` 模块中，定义修改用户简介信息的 `API` 接口
2. 在 `UserEdit.vue` 组件中按需导入 `API` 方法
3. 改造 `UserEdit.vue` 组件中的 `beforeClose` 方法，在最后调用 `this.updateName(done)` 方法更新用户的名称
4. 在 `UserEdit.vue` 组件中，定义 `updateName` 方法，实现更新名称的功能
5. 如果请求接口失败，且报错的消息是`409 (CONFLICT)`，则证明当前提交的名称被占用了，需要进行 `try...catch` 的处理
:::

::: info 体验

* **Step.1：在 `userAPI.js` 模块中，定义修改用户简介信息的 `API` 接口**

```js
// 修改用户简介信息的 API（形参中的 obj 是对象格式的简介信息）
// 可能的格式有以下两种：
// { name: 'xxx' } 或 { birthday: '2012-12-12' }
export const updateUserProfileAPI = obj => {
  return request.patch('/v1_0/user/profile', obj)
}
```

* **Step.2：在 `UserEdit.vue` 组件中按需导入 `API` 方法**

```js
// 按需导入 API 接口
import { updateUserProfileAPI } from '@/api/userAPI.js'
```

* **Step.3：改造 `UserEdit.vue` 组件中的 `beforeClose` 方法，在最后调用 `this.updateName(done)` 方法更新用户的名称**

```js
// Dialog 关闭前的处理函数
beforeClose(action, done) {
  // 点击了“取消”按钮
  if (action === 'cancel') return done()

  // 判断名称的长度是否不合法
  if (this.name === '' || this.name.length > 7) {
    // 1. 提示用户“名称的长度为1-7个字符”
    this.$notify({ type: 'warning', message: '名称的长度为1-7个字符', duration: 2000 })
    // 2. 让文本框持续获得焦点
    this.$refs.nameRef.focus()
    // 3. 阻止对话框关闭
    return done(false)
  }

  // TODO：发起修改名称的请求：
  // A. 如果请求成功，则调用 done() 关闭对话框
  // B. 如果请求失败，则提示用户失败的信息，并调用 done(false) 阻止对话框关闭
  this.updateName(done)
},
```

* **Step.4：在 `UserEdit.vue` 组件中，定义 `updateName` 方法，实现更新名称的功能**

```js
// 更新用户的简介信息
async updateName(done) {
  const { data: res } = await updateUserProfileAPI({ name: this.name })
  if (res.message === 'OK') {
    // 1. 关闭对话框
    done()
    // 2. 重新请求用户的简介信息
    this.initUserProfile()
    // 3. 提示用户更新成功
    this.$notify({ type: 'success', message: '名称更新成功！', duration: 2000 })
  }
}
```

* **Step.5：如果请求接口失败，且报错的消息是`409 (CONFLICT)`，则证明当前提交的名称被占用了，需要进行 `try...catch` 的处理**

```js
// 更新用户的简介信息
async updateName(done) {
  try {
    const { data: res } = await updateUserProfileAPI({ name: this.name })
    if (res.message === 'OK') {
      // 关闭对话框
      done()
      // 重新请求用户的简介信息
      this.initUserProfile()
      // 提示用户更新成功
      this.$notify({ type: 'success', message: '名称更新成功！', duration: 2000 })
    }
  } catch (e) {
    if (e.response.status === 409) {
      // 提示用户名称被占用
      this.$notify({ type: 'warning', message: '名称被占用，请更换后重试！', duration: 2000 })
      // 阻止关闭对话框
      done(false)
      // 让文本框持续获得焦点
      this.$refs.nameRef.focus()
    } else {
      // 关闭对话框
      done()
      // 提示用户名称被占用
      this.$notify({ type: 'danger', message: '名称更新失败！', duration: 2000 })
    }
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
