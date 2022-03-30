# 指定动作面板的挂载位置

::: tip 目标
这一小节，我们的目标是指定动作面板的挂载位置
:::

::: warning 步骤

1. 默认情况下，我们是在 `ArtItem.vue` 组件中使用的 `<van-action-sheet>` 组件，因此动作面板的 `DOM` 结构会被渲染到 `List` 列表组件 内部：
    * **导致的问题**：动作面板中的内容上下滑动时，会导致 `List 列表组件的` **下拉刷新**

2. 解决方案：把 `ActionList` 组件，通过 `get-container` 属性，挂载到 `body` 元素下

```html
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false" @closed="isFirst = true" get-container="body">
  <!-- 省略其它代码 -->
</van-action-sheet>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
