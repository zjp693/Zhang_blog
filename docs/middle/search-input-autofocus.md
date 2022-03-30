# 搜索框自动聚焦

::: tip 目标
这一小节，我们的目标是让搜索框在页面打开的时候自动获得焦点
:::

::: warning 步骤

1. 在 `Search.vue` 组件的 `mounted` 生命周期函数中，并通过 `DOM` 操作查找到 `input` 输入框，使其获得焦
:::

::: info 体验

* **Step.1：在 `Search.vue` 组件的 `mounted` 生命周期函数中，并通过 `DOM` 操作查找到 `input` 输入框，使其获得焦**

```js
mounted() {
  const ipt = document.querySelector('input[type=search]')
  ipt && ipt.focus()
}
```

:::
::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
