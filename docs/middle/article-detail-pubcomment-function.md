# 发布评论功能

## 获取用户填写的评论内容

::: tip 目标
这一小节，我们的目标是获取用户填写的评论内容
:::

::: warning 步骤

1. 在 `ArtCmt` 组件中定义数据项`cmt`，表示用户填写的评论内容
2. 在 `ArtCmt` 组件中，为“评论区域 2”中的`<textarea>`绑定数据
3. 动态控制发布按钮的禁用状态
4. 为发布按钮绑定点击事件处理函数
5. 在 `ArtCmt` 组件中，定义名为 `pubCmt` 的点击事件处理函数
6. 在 `ArtCmt` 组件中，改造 `hideBox2` 方法，将隐藏第二个评论区域的代码放到延时器中
:::

::: info 体验

* **Step.1：在 `ArtCmt` 组件中定义数据项`cmt`，表示用户填写的评论内容**

```js
data() {
  return {
    // 省略其它数据项...

    // 用户填写的评论内容
    cmt: ''
  }
}
```

* **Step.2：在 `ArtCmt` 组件中，为“评论区域 2”中的`<textarea>`绑定数据**

```html
<!-- 底部添加评论区域 - 2 -->
<div class="cmt-box van-hairline--top" v-else>
  <textarea placeholder="友善评论、理性发言、阳光心灵" @blur="hideBox2" ref="iptCmt" v-model.trim="cmt"></textarea>
  <van-button type="default" disabled>发布</van-button>
</div>
```

* **Step.3：动态控制发布按钮的禁用状态**

```html
<van-button type="default" :disabled="cmt.length === 0">发布</van-button>
```

* **Step.4：为发布按钮绑定点击事件处理函数**

```html
<van-button type="default" :disabled="cmt.length === 0" @click="pubCmt">发布</van-button>
```

* **Step.5：在 `ArtCmt` 组件中，定义名为 `pubCmt` 的点击事件处理函数**

```js
// 点击了发布评论的按钮
pubCmt() {
  console.log(this.cmt)
}
```

* **Step.6：在 `ArtCmt` 组件中，改造 `hideBox2` 方法，将隐藏第二个评论区域的代码放到延时器中**

```js
// 隐藏第二个评论区域
hideBox2() {
  // 当文本框失去焦点时，延迟 100ms 再隐藏第二个评论区域
  // 目的：让发布评论的按钮能正常响应用户的点击事件
  setTimeout(() => {
    // 隐藏第二个评论区域
    this.isShowBox1 = true
    // 清空用户输入的评论内容
    this.cmt = ''
  }, 100)
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 实现发布评论的功能

::: tip 目标
这一小节，我们的目标是实现发布评论的功能
:::

::: warning 步骤

1. 在 `articleAPI.js` 模块中，定义 `pubCommentAPI` 方法
2. 在 `ArtCmt` 组件中，按需导入发布评论的 `API` 接口
3. 在 `ArtCmt` 组件中，进一步改造 `pubCmt` 方法
4. 动态给响应回来的数据添加 `is_liking` 属性
:::

::: info 体验

* **Step.1：在 `articleAPI.js` 模块中，定义 `pubCommentAPI` 方法**

```js
// 发表评论的 API（形参中的 artId 是文章的 id；content 是评论的内容）
export const pubCommentAPI = (artId, content) => {
  return request.post('/v1_0/comments', {
    target: artId,
    content
  })
}
```

* **Step.2：在 `ArtCmt` 组件中，按需导入发布评论的 `API` 接口**

```js
// 按需导入 API
import { getCmtListAPI, addLikeCmtAPI, delLikeCmtAPI, pubCommentAPI } from '@/api/articleAPI.js'
```

* **Step.3：在 `ArtCmt` 组件中，进一步改造 `pubCmt` 方法**

```js
// 点击了发布评论的按钮
async pubCmt() {
  // 调用 API 接口
  const { data: res } = await pubCommentAPI(this.artId, this.cmt)
  if (res.message === 'OK') {
    // 评论数自增 +1
    this.cmtCount += 1
    // 将接口返回的、最新的评论内容，unshift 追加到 cmtlist 中
    this.cmtlist.unshift(res.data.new_obj)
    // 提示用户发表评论成功
    this.$toast.success('发表评论成功')
  }
}
```

* **Step.4：动态给响应回来的数据添加 `is_liking` 属性**

```js
// 点击了发布评论的按钮
async pubCmt() {
  // 调用 API 接口
  const { data: res } = await pubCommentAPI(this.artId, this.cmt)
  if (res.message === 'OK') {
    this.cmtCount += 1
    // 动态给响应回来的数据添加 is_liking 属性
    res.data.new_obj.is_liking = false
    this.cmtlist.unshift(res.data.new_obj)
    this.$toast.success('发表评论成功')
  }
}
```

:::
