# 关闭按钮的显示与隐藏

::: tip 目标
这一小节，我们的目标是自定义关闭按钮的显示和隐藏
:::

::: warning 步骤

1. 在 `/src/components/ArtItem` 目录下的 `ArtItem.vue` 组件中，新增名为 `closable` 的 `prop` 属性
2. 使用 `v-if` 动态控制关闭按钮的展示与隐藏
3. 在 `SearchResult.vue` 组件中使用 `ArtItem.vue` 组件时，不展示关闭按钮
:::

::: info 体验

* **Step.1：在`ArtItem.vue` 组件中，新增名为 `closable` 的 `prop` 属性**

```js
props: {
  // 是否展示关闭按钮
  closable: {
    type: Boolean,
    // 默认值为 true，表示展示关闭按钮
    default: true
  }
}
```

* **Step.2：使用 `v-if` 动态控制关闭按钮的展示与隐藏**

```html
<!-- 关闭按钮 -->
<van-icon name="cross" @click.stop="show = true" v-if="closable" />
```

* **Step.3：在 `SearchResult` 组件中使用 `ArtItem.vue` 组件时，不展示关闭按钮**

```html
<!-- 上拉加载更多 -->
<van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad" :immediate-check="false">
  <!-- 文章的 Item 项 -->
  <art-item v-for="item in searchList" :key="item.art_id.toString()" :article="item" :closable="false"></art-item>
</van-list>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
