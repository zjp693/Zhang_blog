# 清空搜索历史

::: tip 目标
这一小节，我们的目标是清空搜索历史记录
:::

::: warning 步骤

1. 在搜索历史的标题中，为删除的小图标绑定点击事件处理函数
2. 在带点击事件处理函数中，直接将 history 数组清空即可
:::

::: info 体验

* **Step.1：在搜索历史的标题中，为删除的小图标绑定点击事件处理函数**
* **Step.2：在带点击事件处理函数中，直接将 history 数组清空即可**

```html
<!-- 标题 -->
<van-cell title="搜索历史">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <template #right-icon>
    <!-- 在带点击事件处理函数中，直接将 history 数组清空即可 -->
    <van-icon name="delete" class="search-icon" @click="history = []" />
  </template>
</van-cell>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
