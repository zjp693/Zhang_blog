# 渲染文章详情数据

::: tip 目标
这一小节，我们的目标是渲染文章的详情数据
:::

::: warning 步骤

1. 在 `/src/api/` 目录下新建 `articleAPI.js` 模块
2. 在 `ArticleDetail` 组件中，按需导入 `API` 接口
3. 在 `ArticleDetail` 组件的 `data` 节点下，定义名为 `article` 的数据节点
4. 在 `ArticleDetail` 组件的 `methods` 中定义名为 `initArticle` 的方法
5. 在 `ArticleDetail` 组件的 `created` 中调用 `initArticle` 方法
6. 在 `ArticleDetail` 组件的模板结构中，渲染文章的详情数据
7. 为了防止 `DOM` 闪烁的问题，为文章信息区域的 `div` 应用 `v-if` 指令
:::

::: info 体验

* **Step.1：在 `/src/api/` 目录下新建 `articleAPI.js` 模块**

```js
import request from '@/utils/request.js'

// 获取文章详情的 API（形参中的 id 是文章的 id）
export const getArticleDetailAPI = id => {
  return request.get(`/v1_0/articles/${id}`)
}
```

* **Step.2：在 `ArticleDetail` 组件中，按需导入 `API` 接口**

```js
// 按需导入 API 接口
import { getArticleDetailAPI } from '@/api/articleAPI.js'
```

* **Step.3：在 `ArticleDetail` 组件的 `data` 节点下，定义名为 `article` 的数据节点**

```js
data() {
  return {
    // 文章的信息对象
    article: null
  }
},
```

* **Step.4：在 `ArticleDetail` 组件的 `methods` 中定义名为 `initArticle` 的方法**

```js
methods: {
  // 初始化文章的数据
  async initArticle() {
    // 1. 调用 API 接口
    const { data: res } = await getArticleDetailAPI(this.id)
    if (res.message === 'OK') {
      // 2. 转存数据
      this.article = res.data
    }
  }
}
```

* **Step.5：在 `ArticleDetail` 组件的 `created` 中调用 `initArticle` 方法**

```js
created() {
  this.initArticle()
},
```

* **Step.6：在 `ArticleDetail` 组件的模板结构中，渲染文章的详情数据**

```html
<template>
  <div>
    <!-- Header 区域 -->
    <van-nav-bar fixed title="文章详情" left-arrow @click-left="$router.back()" />

    <!-- 文章信息区域 -->
    <div class="article-container">
      <!-- 文章标题 -->
      <h1 class="art-title">{{article.title}}</h1>

      <!-- 用户信息 -->
      <van-cell center :title="article.aut_name" :label="article.pubdate | dateFormat">
        <template #icon>
          <!-- 头像 -->
          <img :src="article.aut_photo" alt="" class="avatar">
        </template>
        <template #default>
          <div>
            <!-- 是否关注了作者 -->
            <van-button type="info" size="mini" v-if="article.is_followed">已关注</van-button>
            <van-button icon="plus" type="info" size="mini" plain v-else>关注</van-button>
          </div>
        </template>
      </van-cell>

      <!-- 分割线 -->
      <van-divider></van-divider>

      <!-- 文章内容 -->
      <div class="art-content" v-html="article.content"></div>

      <!-- 分割线 -->
      <van-divider>End</van-divider>

      <!-- 点赞 -->
      <div class="like-box">
        <van-button icon="good-job" type="danger" size="small" v-if="article.attitude === 1">已点赞</van-button>
        <van-button icon="good-job-o" type="danger" plain size="small" v-else>点赞</van-button>
      </div>
    </div>
  </div>
</template>
```

* **Step.7：为了防止 `DOM` 闪烁的问题，为文章信息区域的 `div` 应用 `v-if` 指令**

```html
<template>
  <div>
    <!-- Header 区域 -->
    <van-nav-bar fixed title="文章详情" left-arrow @click-left="$router.back()" />

    <!-- 文章信息区域 -->
    <div class="article-container" v-if="article">
      <!-- 省略其它的 DOM 结构 -->
    </div>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
