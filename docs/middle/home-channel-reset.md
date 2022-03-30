# 重置编辑状态

::: tip 目标
这一小节，我们的目标是实现当弹出层关闭时重置编辑的状态
:::

::: warning 步骤

1. 监听 `<van-popup>` 弹出层关闭完成时的 `closed` 事件，直接将 `isDel` 设置为 `false`
:::

::: info 体验

* **Step.1：监听 `<van-popup>` 弹出层关闭完成时的 `closed` 事件，直接将 `isDel` 设置为 `false`**

```html
<!-- 监听 closed 事件 -->
<van-popup v-model="show"
  :close-on-click-overlay="false" 
  @closed="isDel = false"></van-popup>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
