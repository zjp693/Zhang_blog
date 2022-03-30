# 跳转到搜索结果页

::: tip 目标
这一小节，我们的目标是 跳转到搜索结果页
:::

::: warning 步骤

1. 在 `Search.vue` 组件中，为搜索建议项绑定 `click` 点击事件处理函数
2. 在 `Search.vue` 组件中，为历史记录中的每一项，绑定 `click` 点击事件处理函数
3. 在 `Search.vue` 组件的 `methods` 中，声明 `gotoSearchResult` 方法
:::

::: info 体验

* **Step.1：在 `Search.vue` 组件中，为搜索建议项绑定 `click` 点击事件处理函数**

```html
<!-- 搜索建议 -->
<div class="sugg-list" v-if="kw.length != 0">
  <div class="sugg-item" v-for="(item, i) in suggestList" :key="i" v-html="item" @click="gotoSearchResult">{{item}}</div>
</div>
```

* **Step.2：在 `Search.vue` 组件中，为历史记录中的每一项，绑定 `click` 点击事件处理函数**

```html
<!-- 历史记录 -->
<div class="history-list">
  <span class="history-item" v-for="(tag, i) in history" :key="i" @click="gotoSearchResult">{{tag}}</span>
</div>
```

* **Step.3：在 `Search.vue` 组件的 `methods` 中，声明 `gotoSearchResult` 方法**

```js
// 跳转到搜索结果页
gotoSearchResult(e) {
  // e.currentTarget 是当正在触发事件的那个元素
  // console.log(e.currentTarget.innerText)

  // 1. 获取用户当前点击的搜索建议项的内容
  const kw = e.currentTarget.innerText

  // 2. 通过编程式导航 API，跳转到搜索结果页
  this.$router.push('/search/' + kw)
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
