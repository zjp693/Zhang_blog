# 关键词高亮

::: tip 目标
这一小节，我们的目标是实现关键词的高亮功能
:::

::: warning 步骤

1. `在 hlightKeywords` 方法中，根据用户输入的搜索关键词，动态创建正则表达式
2. 调用字符串的 `replace` 方法，对关键词进行高亮处理
3. 在 `Search.vue` 组件中，循环渲染搜索的建议列表时，将 插值表达式替换为 `v-html` 指令，从而渲染出带标签和样式的内容
:::

::: info 体验

* **Step.1：`在 hlightKeywords` 方法中，根据用户输入的搜索关键词，动态创建正则表达式**

```js
// 高亮搜索关键词的方法，形参中的 arr 是搜索建议的数组
hlightKeywords(arr) {
  // 1. 根据用户输入的 kw，动态创建正则表达式
  const reg = new RegExp(this.kw, 'ig')

  // 循环数组中的每一项
  arr.forEach((item, index) => {
    // 2. TODO：调用字符串的 replace 方法，进行关键词的高亮处理
  })
}
```

* **Step.2：调用字符串的 `replace` 方法，对关键词进行高亮处理**

```js
// 高亮搜索关键词的方法，形参中的 arr 是搜索建议的数组
hlightKeywords(arr) {
  // 1. 根据用户输入的 kw，动态创建正则表达式
  const reg = new RegExp(this.kw, 'ig')

  // 循环数组中的每一项
  arr.forEach((item, index) => {
    // 2. 调用字符串的 replace 方法进行关键字的高亮处理
    arr[index] = item.replace(reg, val => {
      return `<span style="color: red; font-weight: bold;">${val}</span>`
    })
  })
}
```

* **Step.3：在 `Search.vue` 组件中，循环渲染搜索的建议列表时，将 插值表达式替换为 `v-html` 指令，从而渲染出带标签和样式的内容**

```html
<!-- 搜索建议 -->
<div class="sugg-list">
  <div class="sugg-item" v-for="(item, i) in suggestList" :key="i" v-html="item"></div>
</div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
