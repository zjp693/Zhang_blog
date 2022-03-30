# 评论点赞

::: tip 目标
这一小节，我们的目标是实现评论的点赞功能
:::

::: warning 步骤

1. 在 `articleAPI.js` 模块中，声明评论点赞的 `API` 接口
2. 在 `ArtCmt` 中导入评论点赞的 `API` 接口
3. 在 `ArtCmt` 组件中，为 `name="like-o"` 的 图标绑定点击事件，把当前评论作为参数
4. 在 `ArtCmt` 组件中声明 `addLike` 方法
:::

::: info 体验

* **Step.1：在 `articleAPI.js` 模块中，声明评论点赞的 `API` 接口**

```js
// 评论点赞的 API
export const addLikeCmtAPI = cmtId => {
  return request.post('/v1_0/comment/likings', {
    target: cmtId
  })
}
```

* **Step.2：在 `ArtCmt` 中导入评论点赞的 `API` 接口**

```js
// 按需导入 API
import { getCmtListAPI, addLikeCmtAPI } from '@/api/articleAPI.js'
```

* **Step.3：在 `ArtCmt` 组件中，为 `name="like-o"` 的 图标绑定点击事件，把当前评论作为参数**

```html
<van-icon name="like-o" size="16" color="gray" v-else @click="addLike(item)" />
```

* **Step.4：在 `ArtCmt` 组件中声明 `addLike` 方法**

```js
methods: {
  // 评论点赞
  async addLike(cmt) {
    // 1. 调用 API 接口
    const { data: res } = await addLikeCmtAPI(cmt.com_id.toString())

    if (res.message === 'OK') {
      // 2. 在客户端，将点赞的状态设置为 true
      cmt.is_liking = true
    }
  }
}
```

:::
