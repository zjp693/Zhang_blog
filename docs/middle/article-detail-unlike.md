# 取消点赞

::: tip 目标
这一小节，我们的目标是实现取消点赞的功能
:::

::: warning 步骤

1. 在 `articleAPI.js` 模块中，定义名为 `delLikeAPI` 的接口
2. 在 `ArticleDetail` 组件中按需导入 `delLikeAPI` 方法
3. 在 `ArticleDetail` 组件的 `methods` 节点下声明 `setDislike` 的方法
4. 为已点赞的按钮绑定点击事件处理函数

:::

::: info 体验

* **Step.1：在 `articleAPI.js` 模块中，定义名为 `delLikeAPI` 的接口**

```js
// 取消点赞的 API（形参中的 artId 是文章的 Id）
export const delLikeAPI = artId => {
  return request.delete(`/v1_0/article/likings/${artId}`)
}
```

* **Step.2：在 `ArticleDetail` 组件中按需导入 `delLikeAPI` 方法**

```js
// 按需导入 API 接口
import { getArticleDetailAPI, followUserAPI, unfollowUserAPI, addLikeAPI, delLikeAPI } from '@/api/articleAPI.js'
```

* **Step.3：在 `ArticleDetail` 组件的 `methods` 节点下声明 `setDislike` 的方法**

```js
methods: {
  // 取消点赞
  async setDislike() {
    // 调用 API 接口
    const res = await delLikeAPI(this.id)
    if (res.status === 204) {
      // 提示用户
      this.$toast.success('取消点赞成功！')
      // 手动变更点赞的状态
      this.article.attitude = -1
    }
  }
}
```

* **Step.4：为已点赞的按钮绑定点击事件处理函数**

```html
<van-button icon="good-job" type="danger" size="small" v-if="article.attitude === 1" @click="setDislike">已点赞</van-button>
```

:::
