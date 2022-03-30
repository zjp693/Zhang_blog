# 关注功能

::: tip 目标
这一小节，我们的目标是实现关注功能
:::

::: warning 步骤

1. 在 `articleAPI.js` 模块中，定义名为 `followUserAPI` 的接口
2. 在 `ArticleDetail` 组件中按需导入 `followUserAPI` 方法
3. 在 `ArticleDetail` 组件的 `methods` 节点下声明 `setFollow` 的方法
4. 为关注的按钮绑定点击事件处理函数
:::

::: info 体验

* **Step.1：在 `articleAPI.js` 模块中，定义名为 `followUserAPI` 的接口**

```js
// 关注用户的 API（形参中的 userId 是文字作者的 id）
export const followUserAPI = userId => {
  return request.post('/v1_0/user/followings', {
    target: userId
  })
}
```

* **Step.2：在 `ArticleDetail` 组件中按需导入 `followUserAPI` 方法**

```js
// 按需导入 API 接口
import { getArticleDetailAPI, followUserAPI } from '@/api/articleAPI.js'
```

* **Step.3：在 `ArticleDetail` 组件的 `methods` 节点下声明 `setFollow` 的方法**

```js
methods: {
  // 关注作者
  async setFollow() {
    // 调用关注作者的 API 接口
    const { data: res } = await followUserAPI(this.article.aut_id.toString())
    if (res.message === 'OK') {
      // 提示用户成功
      this.$toast.success('关注成功！')
      // 手动更改关注的状态
      this.article.is_followed = true
    }
  }
}
```

* **Step.4：为关注的按钮绑定点击事件处理函数**

```html
<van-button icon="plus" type="info" size="mini" plain v-else @click="setFollow">关注</van-button>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
