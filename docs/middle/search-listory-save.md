# 存储搜索历史

::: tip 目标
这一小节，我们的目标是持久化存储搜索历史
:::

::: warning 步骤

1. 定义 `watch` 侦听器，监视 `history` 数组的变化，并把它持久化存储到 `localStorage` 中
2. 当 `Search.vue` 组件首次被加载时，读取 `localStorage` 中的历史记录，并赋值给 `data` 中的 `history`
:::

::: info 体验

* **Step.1：定义 `watch` 侦听器，监视 `history` 数组的变化，并把它持久化存储到 `localStorage` 中**

```js
watch: {
  // 监视历史记录的变化
  history(newVal) {
    // 持久化存储到本地
    localStorage.setItem('history', JSON.stringify(newVal))
  }
}
```

* **Step.2：当 `Search.vue` 组件首次被加载时，读取 `localStorage` 中的历史记录，并赋值给 `data` 中的 `history`**

```js
data() {
  return {
    // 省略其它数据项...

    // 搜索历史
    history: JSON.parse(localStorage.getItem('history') || '[]')
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
