
# 创建文章详情组件

## 通过路由渲染文章详情组件

::: tip 目标
这一小节，我们的目标是基于路由渲染文章详情组件
:::

::: warning 步骤

1. 在 `/src/views/` 目录下新建 `ArticleDetail` 文件夹，并在其下新建 `ArticleDetail.vue` 组件
2. 在 `/src/router/index.js` 模块中导入 `ArticleDetail.vue` 组件
3. 在路由模块的 `routes` 数组中，声明路由规则
4. 在 `ArtItem` 组件中，为根节点的 `div` 元素绑定 `@click` 事件，通过编程式导航跳转到文章详情页
:::

::: info 体验

* **Step.1：在 `/src/views/` 目录下新建 `ArticleDetail` 文件夹，并在其下新建 `ArticleDetail.vue` 组件**

```html
<template>
  <div>文章详情组件</div>
</template>

<script>
export default {
  name: 'ArticleDetail'
}
</script>

<style lang="less" scoped></style>
```

* **Step.2：在 `/src/router/index.js` 模块中导入 `ArticleDetail.vue` 组件**

```js
// 导入文章详情组件
import ArticleDetail from '@/views/ArticleDetail/ArticleDetail.vue'
```

* **Step.3：在路由模块的 `routes` 数组中，声明路由规则**

```js
const routes = [
  // 省略其它的路由规则...

  // 文章详情的路由规则
  { path: '/article/:id', component: ArticleDetail, name: 'art-detail' }
]
```

* **Step.4：在 `ArtItem` 组件中，为根节点的 `div` 元素绑定 `@click` 事件，通过编程式导航跳转到文章详情页**

```html
<template>
  <div @click="$router.push('/article/' + artId)">
    <van-cell>
      <!-- 省略其它的 DOM 结构 -->
    </van-cell>
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

## 渲染文章详情页的基础布局

::: tip 目标
这一小节，我们的目标是渲染文章详情页的基础布局
:::

::: warning 步骤

1. 在 `ArticleDetail` 组件中，声明`DOM` 布局结构
2. 在 `ArticleDetail` 组件中，声明样式
:::

::: info 体验

* **Step.1：在 `ArticleDetail` 组件中，声明`DOM` 布局结构**

```html
<template>
  <div>
    <!-- Header 区域 -->
    <van-nav-bar fixed title="文章详情" left-arrow @click-left="$router.back()" />

    <!-- 文章信息区域 -->
    <div class="article-container">
      <!-- 文章标题 -->
      <h1 class="art-title">小程序</h1>

      <!-- 用户信息 -->
      <van-cell center title="张三" label="3天前">
        <template #icon>
          <!-- 头像 -->
          <img src="" alt="" class="avatar">
        </template>
        <template #default>
          <div>
            <!-- 是否关注了作者 -->
            <van-button type="info" size="mini">已关注</van-button>
            <van-button icon="plus" type="info" size="mini" plain>关注</van-button>
          </div>
        </template>
      </van-cell>

      <!-- 分割线 -->
      <van-divider></van-divider>

      <!-- 文章内容 -->
      <div class="art-content">好好学习, 天天向上</div>

      <!-- 分割线 -->
      <van-divider>End</van-divider>

      <!-- 点赞 -->
      <div class="like-box">
        <van-button icon="good-job" type="danger" size="small">已点赞</van-button>
        <van-button icon="good-job-o" type="danger" plain size="small">点赞</van-button>
      </div>
    </div>
  </div>
</template>
```

* **Step.2：在 `ArticleDetail` 组件中，声明样式**

```css
.article-container {
  padding: 10px;
  margin-top: 46px;
}
.art-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.art-content {
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  overflow-x: scroll;
  word-break: break-all;
}

.van-cell {
  padding: 5px 0;
  &::after {
    display: none;
  }
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-right: 5px;
  border: none;
}

.like-box {
  display: flex;
  justify-content: center;
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
