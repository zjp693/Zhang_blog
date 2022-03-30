# 渲染搜索结果页

::: tip 目标
这一小节，我们的目标是 基于路由渲染搜索结果页
:::

::: warning 步骤

1. 在 `/src/views/` 目录下，新建 `SearchResult` 组件
2. 在 `/src/router/index.js` 路由模块中，导入搜索结果页的组件，并在 `routes` 中声明对应的路由规则
3. 在 `/src/cover.less` 中，对 `NavBar` 中的小图标颜色进行主题定制
:::

::: info 体验

* **Step.1：在 `/src/views/` 目录下，新建 `SearchResult` 组件**

```html
<template>
  <div class="search-result-container">
    <!-- 点击实现后退效果 -->
    <van-nav-bar title="搜索结果" left-arrow @click-left="$router.back()" fixed />
  </div>
</template>

<script>
export default {
  name: 'SearchResult'
}
</script>

<style lang="less" scoped>
.search-result-container {
  padding-top: 46px;
}
</style>
```

* **Step.2：在 `/src/router/index.js` 路由模块中，导入搜索结果页的组件，并在 `routes` 中声明对应的路由规则**

```js
// 导入搜索结果页
import SearchResult from '@/views/SearchResult/SearchResult.vue'

const routes = [
  // 省略其它的路由规则...

  // 搜索结果页
  { path: '/search/:kw', component: SearchResult, name: 'search-result' }
]
```

* **Step.3：在 `/src/cover.less` 中，对 `NavBar` 中的小图标颜色进行主题定制**

```less
// 设置 NavBar 组件中小图标的颜色值
@nav-bar-icon-color: @white;
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
