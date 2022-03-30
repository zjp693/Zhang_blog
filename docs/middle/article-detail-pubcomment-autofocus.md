# 输入框自动聚焦

::: tip 目标
这一小节，我们的目标是 使发表评论的输入框自动获得焦点
:::

::: warning 步骤

1. 在 `ArtCmt.vue` 组件中，进一步改造 `showBox2` 方法
2. 动态控制 `ArtCmt.vue` 组件外层容器底部的 `padding` 距离
:::

::: info 体验

* **Step.1：在 `ArtCmt.vue` 组件中，进一步改造 `showBox2` 方法**

```js
// 展示第二个评论区域
showBox2() {
  // 隐藏评论区域1，展示评论区域2
  this.isShowBox1 = false

  // 1. 将回调函数延迟到下次 DOM 更新完毕之后执行
  this.$nextTick(() => {
    // 2. 通过 ref 获取到 textarea 的引用
    this.$refs.iptCmt.focus()
  })
},
```

* **Step.2：动态控制 `ArtCmt.vue` 组件外层容器底部的 `padding` 距离**

```html
<template>
  <div :class="isShowBox1 ? 'art-cmt-container-1' : 'art-cmt-container-2'">
    <!-- 省略其它代码... -->
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
