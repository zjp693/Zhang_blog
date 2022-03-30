# 添加搜索历史

::: tip 目标
这一小节，我们的目标是将搜索关键词存为搜索历史
:::

::: warning 步骤

1. 在 `Search.vue` 组件中，将 `data` 节点下的 `history` 数组清空
2. 修改`initSuggestList` 方法，把搜索关键词添加到 `history` 数组中
:::

::: info 体验

* **Step.1：在 `Search.vue` 组件中，将 `data` 节点下的 `history` 数组清空**

```js
data() {
  return {
    // 省略其它的数据项...

    // 搜索历史
    history: []
  }
}
```

* **Step.2：修改`initSuggestList` 方法，把搜索关键词存储到 `history` 数组中**

```js
// 请求搜索建议列表数据的方法
async initSuggestList() {
  // 调用 API 接口
  const { data: res } = await getSuggestListAPI(this.kw)
  if (res.message === 'OK') {
    // 高亮搜索建议中的搜索关键词
    this.hlightKeywords(res.data.options)
    // 为 suggestList 数据赋值
    this.suggestList = res.data.options

    // 把搜索关键词加入到搜索历史中
    const newHistory = this.history.filter(item => item !== this.kw)
    newHistory.unshift(this.kw)
    this.history = newHistory
  }
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
