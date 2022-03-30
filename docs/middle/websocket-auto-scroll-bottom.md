# 自动滚动到底部

::: tip 目标
这一小节，我们的目标是 让聊天信息自动滚动到底部
:::

::: warning 步骤

1. 在 `methods` 中声明 `scrollToBottom` 方法
2. 在 `Chat` 组件中定义 `watch` 侦听器，监视 `list` 数组的变化，从而自动滚动到页面底部
:::

::: info 体验

* **Step.1：在 `methods` 中声明 `scrollToBottom` 方法**

```js
// 滚动到页面底部
scrollToBottom() {
  // 1. 获取到所有的聊天 Item 项
  const chatItem = document.querySelectorAll('.chat-item')
  // 2. 获取到最后一项对应的 DOM 元素
  const lastItem = chatItem[chatItem.length - 1]

  // 3. 滚动元素的父容器，使被调用 scrollIntoView() 的元素对用户可见
  lastItem.scrollIntoView({
    behavior: 'smooth',
    // 定义垂直方向的对齐（end 表示元素的底端将和其所在滚动区的可视区域的底端对齐）
    block: 'end'
  })
}
```

* **Step.2：在 `Chat` 组件中定义 `watch` 侦听器，监视 `list` 数组的变化，从而自动滚动到页面底部**

```js
watch: {
  list() {
    // 监视到 list 数据变化后，等 DOM 更新完毕，再执行滚动到底部的操作
    this.$nextTick(() => {
      this.scrollToBottom()
    })
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
