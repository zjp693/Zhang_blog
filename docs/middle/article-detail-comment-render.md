# 渲染评论组件

::: tip 目标
这一小节，我们的目标是渲染评论列表的数据
:::

::: warning 步骤

1. 在 `articleAPI.js` 模块中，定义名为 `getCmtListAPI` 的方法
2. 在 `ArtCmt` 组件的 `props` 节点下，封装 `artId` 属性
3. 在 `ArticleDetail`组件中为`<art-cmt>`组件动态绑定`art-id`属性
4. 在 `ArtCmt` 组件中，导入`getCmtListAPI`方法
5. 在 `ArtCmt` 组件中，声明两个数据项评论列表数据和偏移量
6. 在 `ArtCmt` 组件中定义`initCmtList` 方法
7. 在 `ArtCmt` 组件的`created` 中调用 `initCmtList` 方法
8. 在 `ArtCmt` 组件中，渲染每条评论的数据
:::

::: info 体验

* **Step.1：在 `articleAPI.js` 模块中，定义名为 `getCmtListAPI` 的方法**

```js
// 获取文章下评论数据的 API
export const getCmtListAPI = (artId, offset) => {
  return request.get('/v1_0/comments', {
    params: {
      // a 表示获取文章下的评论
      type: 'a',
      // 文章的 Id
      source: artId,
      // 获取评论数据的偏移量，值为评论的 id。表示从此 id 的数据向后取，不传表示从第一页开始读取数据
      offset
    }
  })
}
```

* **Step.2：在 `ArtCmt` 组件的 `props` 节点下，封装 `artId` 属性**

```js
export default {
  name: 'ArtCmt',
  props: {
    // 文章的 Id（小驼峰命名法）
    artId: {
      type: [String, Number],
      required: true
    }
  }
}
```

* **Step.3：在 `ArticleDetail`组件中为`<art-cmt>`组件动态绑定`art-id`属性**

```html
<!-- 文章的评论组件（ art-id 是短横线命名法 ） -->
<art-cmt :art-id="id"></art-cmt>
```

* **Step.4：在 `ArtCmt` 组件中，导入`getCmtListAPI`方法**

```js
// 按需导入 API
import { getCmtListAPI } from '@/api/articleAPI.js'
```

* **Step.5：在 `ArtCmt` 组件中，声明两个数据项评论列表数据和偏移量**

```js
data() {
  return {
    // 文章的评论列表数据
    cmtlist: [],
    // 偏移量
    offset: null
  }
}
```

* **Step.6：在 `ArtCmt` 组件中定义`initCmtList` 方法**

```js
methods: {
  // 初始化评论列表的数据
  async initCmtList() {
    // 调用 API 接口
    const { data: res } = await getCmtListAPI(this.artId, this.offset)
    if (res.message === 'OK') {
      // 为偏移量赋值
      this.offset = res.data.last_id
      // 为列表数据赋值
      this.cmtlist = res.data.results
    }
  }
}
```

* **Step.7：在 `ArtCmt` 组件的`created` 中调用 `initCmtList` 方法**

```js
created() {
  this.initCmtList()
}
```

* **Step.8：在 `ArtCmt` 组件中，渲染每条评论的数据**

```html
<template>
  <div>
    <!-- 评论列表 -->
    <div class="cmt-list">
      <!-- 评论的 Item 项 -->
      <div class="cmt-item" v-for="item in cmtlist" :key="item.com_id.toString()">
        <!-- 头部区域 -->
        <div class="cmt-header">
          <!-- 头部左侧 -->
          <div class="cmt-header-left">
            <img :src="item.aut_photo" alt="" class="avatar">
            <span class="uname">{{item.aut_name}}</span>
          </div>
          <!-- 头部右侧 -->
          <div class="cmt-header-right">
            <van-icon name="like" size="16" color="red" v-if="item.is_liking" />
            <van-icon name="like-o" size="16" color="gray" v-else />
          </div>
        </div>
        <!-- 主体区域 -->
        <div class="cmt-body">{{item.content}}</div>
        <!-- 尾部区域 -->
        <div class="cmt-footer">{{item.pubdate | dateFormat}}</div>
      </div>
    </div>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
