
# 封装文章列表组件

::: tip 目标
这一小节，我们的目标是封装文章列表组件
:::

::: warning 步骤

1. 在components目录下，新建ArticleList文件夹，并新建组件
2. 在Home组件中导入ArtList组件
3. 注册ArtList组件
4. 使用ArtList组件
:::

::: info 体验

* **Step.1：在components中，新建ArticleList文件夹，并新建组件**

```vue
<template>
  <div>文章列表组件</div>
</template>

<script>
export default {
  // 大驼峰命名法：每个单词的首字母大写
  name: 'ArticleList'
}
</script>

<style lang="less" scoped></style>
```

* **Step.2：在Home组件中导入ArticleList组件**

```js
import ArticleList from '@/components/ArticleList/ArticleList.vue'
```

* **Step.3：注册ArticleList组件**

```js
components: {
  ArticleList
}
```

* **Step.4：使用ArticleList组件**

```html
<!-- 频道列表的标签页 -->
<van-tabs v-model="active" sticky offset-top="1.22666667rem">
  <!-- 循环渲染用户的频道 -->
  <van-tab v-for="item in userChannel" :key="item.id" :title="item.name">
    <!-- 在每一个用户频道下，渲染出对应的“文章列表组件” -->
    <ArticleList></ArticleList>
  </van-tab>
</van-tabs>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
