# 展示反馈面板

::: tip 目标
这一小节，我们的目标是展示反馈的动作面板，基于 Vant 的 [ActionSheet 动作面板](https://vant-contrib.gitee.io/vant/#/zh-CN/action-sheet)组件，可以方便的渲染出反馈操作对应的区域
:::

::: warning 步骤

1. 在 `/src/components/ArtItem/` 目录下的 `ArtItem.vue` 组件中，声明动作面板对应的 DOM 结构
2. 在 `ArtItem.vue` 组件的 `data` 中声明布尔值 show，用来控制动作面板的显示与隐藏
3. 在点击 `ArtItem.vue` 组件中的“关闭按钮”时，展示反馈的动作面板
:::

::: info 体验

* **Step.1：在 `/src/components/ArtItem/` 目录下的 `ArtItem.vue` 组件中，声明动作面板对应的 DOM 结构**

```html
<!-- 文章的信息 -->
<van-cell></van-cell>

<!-- 反馈的动作面板 -->
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false">
  <div class="content">内容</div>
</van-action-sheet>
```

* **Step.2：在 `ArtItem.vue` 组件的 `data` 中声明布尔值 show，用来控制动作面板的显示与隐藏**

```js
data() {
  return {
    // 是否展示反馈面板
    show: false
  }
}
```

* **Step.3：在点击 `ArtItem.vue` 组件中的“关闭按钮”时，展示反馈的动作面板**

```html
<!-- 关闭按钮 -->
<!-- 通过 .stop 事件修饰符，阻止点击事件的冒泡 -->
<van-icon name="cross" @click.stop="show = true" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
