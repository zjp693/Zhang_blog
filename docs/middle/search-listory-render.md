# 渲染搜索历史

::: tip 目标
这一小节，我们的目标是渲染搜索历史的DOM结构
:::

::: warning 步骤

1. 在 `Search.vue` 组件的 `data` 中定义如下的假数据
2. 在 `Search.vue` 组件中，和搜索建议平级，在搜索建议之后渲染搜索历史的 `DOM` 结构
3. 在 `Search.vue` 组件的 `<style>`节点下，通过如下的样式美化搜索历史的 DOM 结构
4. 根据搜索关键字 `kw` 的 `length` 是否为 `0`，，实现搜索建议和搜索历史的按需展示
:::

::: info 体验

* **Step.1：在 `Search.vue` 组件的 `data` 中定义如下的假数据**

```js
data() {
  return {
    // 搜索历史
    history: ['API', 'java', 'css', '前端', '后台接口', 'python']
  }
}
```

* **Step.2：在 `Search.vue` 组件中，和搜索建议平级，在搜索建议之后渲染搜索历史的 `DOM` 结构**

```html
<!-- 搜索历史 -->
<div class="search-history">
  <!-- 标题 -->
  <van-cell title="搜索历史">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-icon name="delete" class="search-icon" />
    </template>
  </van-cell>

  <!-- 历史列表 -->
  <div class="history-list">
    <span class="history-item" v-for="(tag, i) in history" :key="i">{{tag}}</span>
  </div>
</div>
```

* **Step.3：在 `Search.vue` 组件的 `<style>`节点下，通过如下的样式美化搜索历史的 DOM 结构**

```css
.search-icon {
  font-size: 16px;
  line-height: inherit;
}

.history-list {
  padding: 0 10px;
  .history-item {
    display: inline-block;
    font-size: 12px;
    padding: 8px 14px;
    background-color: #efefef;
    margin: 10px 8px 0px 8px;
    border-radius: 10px;
  }
}
```

* **Step.4：根据搜索关键字 `kw` 的 `length` 是否为 `0`，，实现搜索建议和搜索历史的按需展示**

```html
<!-- 搜索建议 -->
<div class="sugg-list" v-if="kw.length != 0"></div>

<!-- 搜索历史 -->
<div class="search-history" v-else></div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
