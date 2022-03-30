# 评论取消点赞

::: tip 目标
这一小节，我们的目标是实现评论的取消点赞功能
:::

::: warning 步骤

1. 在 `articleAPI.js` 模块中，声明评论取消点赞的 `API` 接口
2. 在 `ArtCmt.vue` 中按需导入评论取消点赞的 `API` 接口
3. 在 `ArtCmt.vue` 组件中，为 `name="like"` 的 `<van-icon>` 图标绑定点击事件处理函数，并把当前评论作为参数传递进去
4. 在 `ArtCmt.vue` 组件的 `methods` 中声明 `delLike` 方法
:::

::: info 体验

* **Step.1：在 `articleAPI.js` 模块中，声明评论取消点赞的 `API` 接口**

```js
// 评论取消点赞的 API
export const delLikeCmtAPI = cmtId => {
  return request.delete(`/v1_0/comment/likings/${cmtId}`)
}
```

* **Step.2：在 `ArtCmt.vue` 中按需导入评论取消点赞的 `API` 接口**

```js
// 按需导入 API
import { getCmtListAPI, addLikeCmtAPI, delLikeCmtAPI } from '@/api/articleAPI.js'
```

* **Step.3：在 `ArtCmt.vue` 组件中，为 `name="like"` 的 `<van-icon>` 图标绑定点击事件处理函数，并把当前评论作为参数传递进去**

```html
<van-icon name="like" size="16" color="red" v-if="item.is_liking" @click="delLike(item)" />
```

* **Step.4：在 `ArtCmt.vue` 组件的 `methods` 中声明 `delLike` 方法**

```js
methods: {
  // 评论取消点赞
  async delLike(cmt) {
    // 1. 调用 API 接口（注意：由于取消点赞的 API 没有响应体，不需要进行解构赋值）
    const res = await delLikeCmtAPI(cmt.com_id.toString())

    if (res.status === 204) {
      // 2. 在客户端，将点赞的状态设置为 false
      cmt.is_liking = false
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
