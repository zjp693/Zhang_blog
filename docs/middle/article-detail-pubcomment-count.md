# 渲染评论的总数量

::: tip 目标
这一小节，我们的目标是 动态渲染评论的总数量
:::

::: warning 步骤

1. 在 `ArtCmt` 组件中，声明 `cmtCount` 属性，表示当前文章下的总评论数量
2. 在 `ArtCmt` 组件中，为“评论区域1”中的`<van-badge>`组件动态绑定 `content` 属性
3. 改造`ArtCmt.`组件中的 `initCmtList` 方法，当获取评论列表数据的接口调用成功之后，立即为 `data` 中的 `cmtCount` 属性赋值
:::

::: info 体验

* **Step.1：在 `ArtCmt` 组件中，声明 `cmtCount` 属性，表示当前文章下的总评论数量**

```js
data() {
  return {
    // 省略其它的数据项...

    // 当前文章的总评论数
    cmtCount: 0,
  }
}
```

* **Step.2：在 `ArtCmt` 组件中，为“评论区域1”中的`<van-badge>`组件动态绑定 `content` 属性**

```html
<!-- 底部添加评论区域 - 1 -->
<div class="add-cmt-box van-hairline--top" v-if="isShowBox1">
  <van-icon name="arrow-left" size="18" @click="$router.back()" />
  <div class="ipt-cmt-div" @click="showBox2">发表评论</div>
  <div class="icon-box">
    <!-- 渲染评论的数量 -->
    <van-badge :content="cmtCount" :max="99">
      <van-icon name="comment-o" size="20" />
    </van-badge>
    <van-icon name="star-o" size="20" />
    <van-icon name="share-o" size="20" />
  </div>
</div>
```

* **Step.3：改造`ArtCmt.`组件中的 `initCmtList` 方法，当获取评论列表数据的接口调用成功之后，立即为 `data` 中的 `cmtCount` 属性赋值**

```js
// 初始化评论列表的数据
async initCmtList() {
  // 调用 API 接口
  const { data: res } = await getCmtListAPI(this.artId, this.offset)
  if (res.message === 'OK') {
    // 为总评论数赋值
    this.cmtCount = res.data.total_count
    // 为列表数据赋值
    this.cmtlist = [...this.cmtlist, ...res.data.results]

    // 为偏移量赋值
    this.offset = res.data.last_id
    // 将 loading 重置为 false
    this.loading = false
    // 判断所有数据是否加载完毕
    if (res.data.results.length === 0) {
      this.finished = true
    }
  }
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
