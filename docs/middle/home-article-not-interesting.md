# 将文章设置为不感兴趣

## 设置不感兴趣文章

::: tip 目标
这一小节，我们的目标是将文章设置为不感兴趣
:::

::: warning 步骤

1. 在`/src/api/homeAPI.js` 模块中，定义名为 `dislikeArticleAPI` 的方法，用来将指定 id 的文章设置为不感兴趣
2. 在 `ArtItem.vue` 组件中，按需导入 `API` 接口
3. 在 `ArtItem.vue` 组件中，基于 props 中的 `article` 文章对象，定义名为 `artId` 的计算属性
4. 在 `onCellClick` 处理函数中，调用 API 接口，将指定 Id 的文章设置不感兴趣
:::

::: info 体验

* **Step.1：在`/src/api/homeAPI.js` 模块中，定义名为 `dislikeArticleAPI` 的方法，用来将指定 id 的文章设置为不感兴趣**

```js
// 将文章设置为不感兴趣（形参 id 是文章的 id）
export const dislikeArticleAPI = id => {
  return request.post('/v1_0/article/dislikes', {
    target: id
  })
}
```

* **Step.2：在 `ArtItem.vue` 组件中，按需导入 `API` 接口**

```js
// 按需导入 API 接口
import { dislikeArticleAPI } from '@/api/homeAPI.js'
```

* **Step.3：在 `ArtItem.vue` 组件中，基于 props 中的 `article` 文章对象，定义名为 `artId` 的计算属性**

```js
props: {
  // 文章的信息对象
  article: {
    type: Object, // 数据类型
    required: true // 必填项
  }
},

computed: {
  // 文章 Id 的计算属性
  artId() {
    // 注意：文章对象的 art_id 是大数对象，需要调用 .toString() 方法转换为字符串形式
    return this.article.art_id.toString()
  }
}
```

* **Step.4：在 `onCellClick` 处理函数中，调用 API 接口，将指定 Id 的文章设置不感兴趣**

```js
// 一级选项的点击事件处理函数
async onCellClick(name) {
  if (name === '不感兴趣') {
    // 调用 API 接口，将文章设置为不感兴趣
    const { data: res } = await dislikeArticleAPI(this.artId)
    if (res.message === 'OK') {
      // TODO：炸楼的操作
    }
    this.show = false
  }

  // 省略其它代码...
}
```

:::

## 移除不感兴趣的文章

::: tip 目标
这一小节，我们的目标是从列表中移除不感兴趣的文章
:::

::: warning 步骤

1. 在 `ArtItem.vue` 组件中，通过 `this.$emit()` 触发自定义事件，把要删除的文章 Id 传递给父组件
2. 在 `ArtList.vue` 组件中使用 `ArtItem.vue` 组件时，监听 `ArtItem.vue` 组件的 `@remove-article` 事件
3. 在 `ArtList.vue` 组件的 methods 中，声明 `removeArticle` 方法
:::

::: info 体验

* **Step.1：在 `ArtItem.vue` 组件中，通过 `this.$emit()` 触发自定义事件，把要删除的文章 Id 传递给父组件**

```js
// 一级选项的点击事件处理函数
async onCellClick(name) {
  if (name === '不感兴趣') {
    // 调用 API 接口，将文章设置为不感兴趣
    const { data: res } = await dislikeArticleAPI(this.artId)
    if (res.message === 'OK') {
      // TODO：炸楼的操作，触发自定义的事件，将文章 id 发送给父组件
      this.$emit('remove-article', this.artId)
    }
    this.show = false
  }

  // 省略其它代码...
}
```

* **Step.2：在 `ArtList.vue` 组件中使用 `ArtItem.vue` 组件时，监听 `ArtItem.vue` 组件的 `@remove-article` 事件**

```html
<!-- 循环渲染文章的列表 -->
<art-item
   v-for="item in artlist"
   :key="item.art_id.toString()"
   :article="item"
   @remove-article="removeArticle"
  >
</art-item>
```

* **Step.3：在 `ArtList.vue` 组件的 methods 中，声明 `removeArticle` 方法**

```js
methods: {
  // 从文章列表中移除指定 id 的文章
  removeArticle(id) {
    // 对原数组进行 filter 方法的过滤
    this.artlist = this.artlist.filter(item => item.art_id.toString() !== id)
 }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 防止移除之后上拉加载失败

::: tip 目标
这一小节，我们的目标是解决炸楼之后防治上拉加载不生效的问题，具体来讲就是： 炸楼之后，如果文章列表的数据不足以撑满整个屏幕，会导致上拉加载和下拉刷新不生效的问题，解决方案： 每次炸楼之后，判断剩余数据的文章数量是否小于 10，如果小于 10，则主动请求下一页的数据
:::

::: warning 步骤

1. 在 `ArtList.vue` 组件的 methods 节点下，改造 `removeArticle` 方法
:::

::: info 体验

* **Step.1： 在 `ArtList.vue` 组件的 methods 节点下，改造 `removeArticle` 方法**

```js
methods: {
  // 从文章列表中移除指定 id 的文章
  removeArticle(id) {
    // 1. 炸楼操作
    this.artlist = this.artlist.filter(item => item.art_id.toString() !== id)

    // 2. 判断剩余数据的文章数量是否小于 10
    if (this.artlist.length < 10) {
      // 主动请求下一页的数据
      this.initArtList()
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
