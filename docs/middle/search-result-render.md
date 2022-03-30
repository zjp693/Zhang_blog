# 渲染搜索结果页

## 封装搜索文章列表数据的 API

::: tip 目标
这一小节，我们的目标是 封装搜索文章列表数据的 API
:::

::: warning 步骤

1. 在 `/src/api/searchAPI.js` 模块中，封装 `getSearchResultAPI` 方法，用来根据关键词搜索文章的列表数据
2. 在 `SearchResult` 组件的 `data` 中定义 `page` 页码值
3. 在 `/src/router/index.js` 路由模块中，为搜索结果页的路由规则添加 `props: true` 选项
:::

::: info 体验

* **Step.1：在 `/src/api/searchAPI.js` 模块中，封装 `getSearchResultAPI` 方法，用来根据关键词搜索文章的列表数据**

```js
// 封装搜索文章数据的 API
export const getSearchResultAPI = (kw, page) => {
  return request.get('/v1_0/search', {
    params: {
      q: kw, // 搜索关键词
      page // 页码值
    }
  })
}
```

* **Step.2：在 `SearchResult` 组件的 `data` 中定义 `page` 页码值**

```js
data() {
  return {
    // 页码值
    page: 1
  }
}
```

* **Step.3：在 `/src/router/index.js` 路由模块中，为搜索结果页的路由规则添加 `props: true` 选项**

```js
const routes = [
  // 省略其它的路由规则...

  // 搜索结果页
  { path: '/search/:kw', component: SearchResult, name: 'search-result', props: true }
]
```

:::

## 搜索文章列表的数据

::: tip 目标
这一小节，我们的目标是获取搜索文章列表的数据
:::

::: warning 步骤

1. 在 `SearchResult` 组件中，按需导入 `API` 方法
2. 在 `SearchResult` 组件的 `data` 中，定义名为 `searchList` 的数组
3. 在 `SearchResult` 组件的 `methods` 中定义名为 `initSearchList` 的方法
4. 在 `SearchResult` 组件的 `created` 生命周期函数中，调用 `initSearchList` 方法搜索文章的列表数据
:::

::: info 体验

* **Step.1：在 `SearchResult` 组件中，按需导入 `API` 方法**

```js
// 按需导入 API 方法
import { getSearchResultAPI } from '@/api/searchAPI.js'
```

* **Step.2：在 `SearchResult` 组件的 `data` 中，定义名为 `searchList` 的数组**

```js
data() {
  return {
    // 搜索的结果
    searchList: []
  }
}
```

* **Step.3：在 `SearchResult` 组件的 `methods` 中定义名为 `initSearchList` 的方法**

```js
methods: {
  // 获取搜索的结果
  async initSearchList() {
    // 调用 API 接口
    const { data: res } = await getSearchResultAPI(this.kw, this.page)

    if (res.message === 'OK') {
      // 为 searchList 赋值
      this.searchList = res.data.results
    }
  }
}
```

* **Step.4：在 `SearchResult` 组件的 `created` 生命周期函数中，调用 `initSearchList` 方法搜索文章的列表数据**

```js
created() {
  this.initSearchList()
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 渲染搜索结果的列表数据

::: tip 目标
这一小节，我们的目标是渲染搜索结果的列表数据
:::

::: warning 步骤

1. 在 `SearchResult` 组件中，导入`ArtItem.vue` 组件
2. 在 `SearchResult` 组件中，通过 `components` 节点对导入的 `ArtItem.vue` 组件进行注册
3. 在 `SearchResult` 组件的模板结构中，基于 `v-for` 指令循环渲染 `ArtItem.vue` 组件
:::

::: info 体验

* **Step.1：在 `SearchResult` 组件中，导入`ArtItem.vue` 组件**

```js
// 导入文章的 Item 项组件
import ArtItem from '@/components/ArtItem/ArtItem.vue'
```

* **Step.2：在 `SearchResult` 组件中，通过 `components` 节点对导入的 `ArtItem.vue` 组件进行注册**

```js
components: {
  // 注册组件
  ArtItem
}
```

* **Step.3：在 `SearchResult` 组件的模板结构中，基于 `v-for` 指令循环渲染 `ArtItem.vue` 组件**

```html
<template>
  <div class="search-result-container">
    <!-- 点击实现后退效果 -->
    <van-nav-bar title="搜索结果" left-arrow @click-left="$router.back()" fixed />

    <!-- 文章的 Item 项 -->
    <art-item v-for="item in searchList" :key="item.art_id.toString()" :article="item"></art-item>
  </div>
</template
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
