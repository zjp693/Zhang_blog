# 上拉加载更多

::: tip 目标
这一小节，我们的目标是实现上拉加载更多
:::

::: warning 步骤

1. 在 `SearchResult.vue` 组件的 `data` 中声明如下的两个数据项
2. 在 `SearchResult.vue` 组件中，使用 `<van-list>` 组件把 `<art-item>` 组件包裹起来
3. 在 `SearchResult.vue` 组件的 `methods` 中定义 `onLoad` 方法
4. 进一步改造 `methods` 中的 `initSearchList` 方法
:::

::: info 体验

* **Step.1：在 `SearchResult` 组件的 `data` 中声明如下的两个数据项**

```js
data() {
  return {
    // 省略其它数据项...

    // 是否正在进行上拉加载的数据请求
    loading: false,
    // 所有数据是否已经加载完毕
    finished: false
  }
}
```

* **Step.2：在 `SearchResult` 组件中，使用 `<van-list>` 组件把 `<art-item>` 组件包裹起来**

```html
<!-- 上拉加载更多 -->
<van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad" :immediate-check="false">
  <!-- 文章的 Item 项 -->
  <art-item v-for="item in searchList" :key="item.art_id.toString()" :article="item"></art-item>
</van-list>
```

* **Step.3：在 `SearchResult` 组件的 `methods` 中定义 `onLoad` 方法**

```js
// 获取搜索的结果
async initSearchList() {
  // 调用 API 接口
  const { data: res } = await getSearchResultAPI(this.kw, this.page)
  if (res.message === 'OK') {
    // 1. 拼接数据：“旧数据”在前，“新数据”在后
    this.searchList = [...this.searchList, ...res.data.results]
    // 2. 将 loading 设置为 false
    this.loading = false
    // 3. 判断数据是否加载完毕
    if (res.data.results.length === 0) {
      this.finished = true
    }
    // 4. 让页码值 +1
    this.page += 1
  }
},
```

```js
methods: {
  // 触发了上拉加载更多
  onLoad() {
    this.initSearchList()
  }
}
```

* **Step.4：进一步改造 `methods` 中的 `initSearchList` 方法**
:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
