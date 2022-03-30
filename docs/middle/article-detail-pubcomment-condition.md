# 底部评论按需展示

::: tip 目标
这一小节，我们的目标是实现底部两个评论区域的按需展示
:::

::: warning 步骤

1. 在 `ArtCmt` 组件的 `data` 中定义名为 `showBox1` 的布尔值
2. 在 `ArtCmt` 组件中，基于 `v-if` 和 `v-else` 按需渲染评论区域的两个盒子
3. 在 `ArtCmt` 组件的第1个评论区域中，为 `class="ipt-cmt-div"`元素绑定点击事件
4. 在 `ArtCmt` 组件中定义 `showBox2` 方法
5. 在 `ArtCmt` 组件的第 2 个评论区域中，为 `textarea` 元素绑定点击事件处理函数
6. 在 `ArtCmt` 组件中定义 `hideBox2` 方法
:::

::: info 体验

* **Step.1：在 `ArtCmt` 组件的 `data` 中定义名为 `showBox1` 的布尔值**

```js
data() {
  return {
    // 省略其它数据项...

    // 是否展示评论区域1（如果值为 true 则展示评论区域1；如果值为 false 则展示评论区域2）
    isShowBox1: true
  }
}
```

* **Step.2：在 `ArtCmt` 组件中，基于 `v-if` 和 `v-else` 按需渲染评论区域的两个盒子**

```html
<!-- 底部添加评论区域 - 1 -->
<div class="add-cmt-box van-hairline--top" v-if="isShowBox1"></div>

<!-- 底部添加评论区域 - 2 -->
<div class="cmt-box van-hairline--top" v-else></div>
```

* **Step.3：在 `ArtCmt` 组件的第1个评论区域中，为 `class="ipt-cmt-div"`元素绑定点击事件**

```html
<div class="ipt-cmt-div" @click="showBox2">发表评论</div>
```

* **Step.4：在 `ArtCmt` 组件中定义 `showBox2` 方法**

```js
// 展示第二个评论区域
showBox2() {
  this.isShowBox1 = false
},
```

* **Step.5：在 `ArtCmt` 组件的第 2 个评论区域中，为 `textarea` 元素绑定点击事件处理函数**

```html
<textarea placeholder="友善评论、理性发言、阳光心灵" @blur="hideBox2"></textarea>
```

* **Step.6：在 `ArtCmt` 组件中定义 `hideBox2` 方法**

```js
// 隐藏第二个评论区域
hideBox2() {
  this.isShowBox1 = true
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
