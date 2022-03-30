# 取消关注

::: tip 目标
这一小节，我们的目标是实现取消关注的功能
:::

::: warning 步骤

1. 在 `articleAPI.js` 模块中，定义名为 `unfollowUserAPI` 的接口
2. 在 `ArticleDetail` 组件中按需导入 `unfollowUserAPI` 方法
3. 在 `ArticleDetail` 组件的 `methods` 节点下声明 `setUnfollow` 的方法
4. 为`已关注`的按钮绑定点击事件处理函数
:::

::: info 体验

* **Step.1：在 `articleAPI.js` 模块中，定义名为 `unfollowUserAPI` 的接口**

```js
// 取消关注用户的 API
export const unfollowUserAPI = userId => {
  return request.delete(`/v1_0/user/followings/${userId}`)
}
```

* **Step.2：在 `ArticleDetail` 组件中按需导入 `unfollowUserAPI` 方法**

```js
// 按需导入 API 接口
import { getArticleDetailAPI, followUserAPI, unfollowUserAPI } from '@/api/articleAPI.js'
```

* **Step.3：在 `ArticleDetail` 组件的 `methods` 节点下声明 `setUnfollow` 的方法**

```js
methods: {
  // 取关作者
  async setUnfollow() {
    // 1. 调用 API 接口
    const res = await unfollowUserAPI(this.article.aut_id.toString())

    // 2. 判断响应的状态码
    if (res.status === 204) {
      // 2.1 提示用户
      this.$toast.success('取关成功！')
      // 2.2 手动更改关注的状态
      this.article.is_followed = false
    }
  }
}
```

* **Step.4：为`已关注`的按钮绑定点击事件处理函数**

```html
<van-button type="info" size="mini" v-if="article.is_followed" @click="setUnfollow">已关注</van-button>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
