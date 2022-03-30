
# 修改用户头像

## 实现选择图片的功能

::: tip 目标

这一小节，我们的目标是实现选择图片的功能
:::

::: warning 步骤

1. 在 `class="avatar"` 的 `<van-image>` 之后，渲染图片的文件选择框
2. 在 `UserEdit.vue` 组件的 `methods` 中定义 `onFileChange` 方法，从 `e.currentTarget` 中获取用户选择的文件
:::

::: info 体验

* **Step.1：在 `class="avatar"` 的 `<van-image>` 之后，渲染图片的文件选择框**

```html
<van-cell title="头像" is-link center>
  <template #default>
    <!-- 用户的头像 -->
    <van-image round class="avatar" :src="userProfile.photo" />
    <!-- 文件选择框 -->
    <input type="file" accept="image/*" @change="onFileChange" />
  </template>
</van-cell>
```

* **Step.2：在 `UserEdit.vue` 组件的 `methods` 中定义 `onFileChange` 方法，从 `e.currentTarget` 中获取用户选择的文件**

```js
// 选中的文件发生了变化
onFileChange(e) {
  // 获取到用户选择的文件列表
  const files = e.currentTarget.files
  // 如果没有选择任何文件，则不执行后续的业务逻辑
  if (files.length === 0) return

  // 打印用户选择的第一个文件
  console.log(files[0])
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 点击头像时展示文件选择框

::: tip 目标
这一小节，我们的目标是实现点击头像时展示文件选择框
:::

::: warning 步骤

1. 基于 `v-show` 指令隐藏选择头像的文件选择框
2. 为文件选择框添加 `ref`引用名称
3. 当点击 `<van-image>` 组件时，获取到文件选择框的 `ref` 引用，并模拟原生 `DOM` 元素的点击事件
:::

::: info 体验

* **Step.1：基于 `v-show` 指令隐藏选择头像的文件选择框**

```html
<!-- 文件选择框 -->
<input type="file" accept="image/*" @change="onFileChange" v-show="false" />
```

* **Step.2：为文件选择框添加 `ref`引用名称**

```html
<!-- 文件选择框 -->
<input type="file" accept="image/*" @change="onFileChange" v-show="false" ref="fileRef" />
```

* **Step.3：当点击 `<van-image>` 组件时，获取到文件选择框的 `ref` 引用，并模拟原生 `DOM` 元素的点击事件**

```html
<!-- 用户的头像 -->
<van-image round class="avatar" :src="userProfile.photo" @click="$refs.fileRef.click()" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 实现修改头像的功能

::: tip 目标
这一小节，我们的目标是实现修改头像的功能
:::

::: warning 步骤

1. 在 `userAPI.js` 模块中，定义名为 `updateUserAvatarAPI` 的接口，用来更新用户的头像
2. 在 `UserEdit.vue` 组件中，按需导入更新头像的 `API` 接口
3. 修改 `UserEdit.vue` 组件 `methods` 节点下的 `onFileChange` 方法，创建 `FormData` 对象并调用更新头像的 `API` 接口：
:::

::: info 体验

* **Step.1：在 `userAPI.js` 模块中，定义名为 `updateUserAvatarAPI` 的接口，用来更新用户的头像**

```js
// 修改头像的 API（形参中的 fd 表示 FormData 格式的表单数据）
export const updateUserAvatarAPI = fd => {
  return request.patch('/v1_0/user/photo', fd)
}
```

* **Step.2：在 `UserEdit.vue` 组件中，按需导入更新头像的 `API` 接口**

```js
// 按需导入 API 接口
import { updateUserProfileAPI, updateUserAvatarAPI } from '@/api/userAPI.js'
```

* **Step.3：修改 `UserEdit.vue` 组件 `methods` 节点下的 `onFileChange` 方法，创建 `FormData` 对象并调用更新头像的 `API` 接口**

```js
// 选中的文件发生了变化
async onFileChange(e) {
  // 获取到用户选择的文件列表
  const files = e.currentTarget.files
  // 如果没有选择任何文件，则不执行后续的业务逻辑
  if (files.length === 0) return

  // 1.1 创建 FormData 的对象
  const fd = new FormData()
  // 1.2 向 fd 中追加数据项
  fd.append('photo', files[0])

  // 2. 调用 API 接口，更新头像
  const { data: res } = await updateUserAvatarAPI(fd)
  if (res.message === 'OK') {
    // 2.1 更新用户的简介信息
    this.initUserProfile()
    // 2.2 提示用户更新成功
    this.$notify({ type: 'success', message: '更新头像成功！', duration: 2000 })
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
