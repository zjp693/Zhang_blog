# 点赞功能

::: tip 目标
这一小节，我们的目标是实现点赞功能
:::

::: warning 步骤

1. 在 `articleAPI.js` 模块中，定义名为 `addLikeAPI` 的接口
2. 在 `ArticleDetail` 组件中按需导入 `addLikeAPI` 方法
3. 在 `ArticleDetail` 组件的 `methods` 节点下声明 `setLike` 的方法
4. 为点赞的按钮绑定点击事件处理函数
:::

::: info 体验

* **Step.1：在 `articleAPI.js` 模块中，定义名为 `addLikeAPI` 的接口**

```js
// 点赞的 API（形参中的 artId 是文章的 Id）
export const addLikeAPI = artId => {
  return request.post('/v1_0/article/likings', {
    target: artId
  })
}
```

* **Step.2：在 `ArticleDetail` 组件中按需导入 `addLikeAPI` 方法**

```js
// 按需导入 API 接口
import { getArticleDetailAPI, followUserAPI, unfollowUserAPI, addLikeAPI } from '@/api/articleAPI.js'
```

* **Step.3：在 `ArticleDetail` 组件的 `methods` 节点下声明 `setLike` 的方法**

```js
methods: {
  // 文章点赞
  async setLike() {
    // 调用 API 接口
    const { data: res } = await addLikeAPI(this.id)
    if (res.message === 'OK') {
      // 提示用户
      this.$toast.success('点赞成功！')
      // 手动变更点赞的状态
      this.article.attitude = 1
    }
  }
}
```

* **Step.4：为点赞的按钮绑定点击事件处理函数**

```html
<van-button icon="good-job-o" type="danger" plain size="small" v-else @click="setLike">点赞</van-button>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
