# 创建评论组件

## 封装评论组件

::: tip 目标
这一小节，我们的目标是封装 ArtCmt 评论组件
:::

::: warning 步骤

1. 在 `/src/components/` 目录下新建 `ArtCmt` 组件
2. 在 `ArticleDetail` 组件中，导入 `ArtCmt` 评论组件
3. 在 `ArticleDetail` 组件中，注册`ArtCmt` 评论组件
4. 在 `ArticleDetail` 组件中，在文章信息区域的后面使用`ArtCmt`组件
:::

::: info 体验

* **Step.1：在 `/src/components/` 目录下新建 `ArtCmt` 组件**

```html
<template>
  <div>评论组件</div>
</template>

<script>
export default {
  name: 'ArtCmt'
}
</script>

<style lang="less" scoped></style>
```

* **Step.2：在 `ArticleDetail` 组件中，导入 `ArtCmt` 评论组件**

```js
// 导入文章的评论组件
import ArtCmt from '@/components/ArtCmt/ArtCmt.vue'
```

* **Step.3：在 `ArticleDetail` 组件中，注册`ArtCmt` 评论组件**

```js
components: {
  // 注册文章评论组件
  ArtCmt
}
```

* **Step.4：在 `ArticleDetail` 组件中，在文章信息区域的后面使用`ArtCmt`组件**

```html
<template>
  <div>
    <!-- Header 区域 -->
    <van-nav-bar fixed title="文章详情" left-arrow @click-left="$router.back()" />

    <!-- 文章信息区域 -->
    <div class="article-container" v-if="article">
      <!-- 省略其它的 DOM 结构 -->
    </div>

    <!-- 文章的评论组件 -->
    <art-cmt></art-cmt>
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

## 渲染评论组件的基础结构

::: tip 目标
这一节，我们的目标是 渲染评论组件的基础结构
:::

::: warning 步骤

1. 在 `ArtCmt` 组件中声明模板结构
2. 在 `ArtCmt` 组件中声明样式，美化组件的结构
:::

::: info 体验

* **Step.1：在 `ArtCmt` 组件中声明模板结构**

```html
<template>
  <div>
    <!-- 评论列表 -->
    <div class="cmt-list">
      <!-- 评论的 Item 项 -->
      <div class="cmt-item">
        <!-- 头部区域 -->
        <div class="cmt-header">
          <!-- 头部左侧 -->
          <div class="cmt-header-left">
            <img src="" alt="" class="avatar">
            <span class="uname">zs</span>
          </div>
          <!-- 头部右侧 -->
          <div class="cmt-header-right">
            <van-icon name="like" size="16" color="red" />
            <van-icon name="like-o" size="16" color="gray" />
          </div>
        </div>
        <!-- 主体区域 -->
        <div class="cmt-body">
          基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。
        </div>
        <!-- 尾部区域 -->
        <div class="cmt-footer">3天前</div>
      </div>
    </div>
  </div>
</template>
```

* **Step.2：在 `ArtCmt` 组件中声明样式，美化组件的结构**

```less
.cmt-list {
  padding: 10px;
  .cmt-item {
    padding: 15px 0;
    + .cmt-item {
      border-top: 1px solid #f8f8f8;
    }
    .cmt-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cmt-header-left {
        display: flex;
        align-items: center;
        .avatar {
          width: 40px;
          height: 40px;
          background-color: #f8f8f8;
          border-radius: 50%;
          margin-right: 15px;
        }
        .uname {
          font-size: 12px;
        }
      }
    }
    .cmt-body {
      font-size: 14px;
      line-height: 28px;
      text-indent: 2em;
      margin-top: 6px;
      word-break: break-all;
    }
    .cmt-footer {
      font-size: 12px;
      color: gray;
      margin-top: 10px;
    }
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
