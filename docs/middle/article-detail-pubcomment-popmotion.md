# 平滑滚动

::: tip 目标
这一小节，我们的目标是实现平滑滚动到评论列表区域
:::

::: warning 步骤

1. 安装 `popmotion` 第三方依赖包
2. 在 `ArtCmt` 组件中，从 `popmotion` 中按需导入 `animate` 函数
3. 在 `ArtCmt` 组件中，为`name="comment-o"`的 `<van-icon>` 组件绑定点击事件
4. 在 `ArtCmt` 组件中声明 `scrollToCmtList` 方法：

:::

::: info 体验

* **Step.1：从npm中，安装 `popmotion` 第三方依赖包**

```bash
npm install popmotion@9.3.5 -S
```

* **Step.2：在 `ArtCmt` 组件中，从 `popmotion` 中按需导入 `animate` 函数**

```js
// 从 popmotion 中按需导入 animate 动画函数
import { animate } from 'popmotion'
```

* **Step.3：在 `ArtCmt` 组件中，为`name="comment-o"`的 `<van-icon>` 组件绑定点击事件**

```html
<van-icon name="comment-o" size="20" @click="scrollToCmtList" />
```

* **Step.4：在 `ArtCmt` 组件中声明 `scrollToCmtList` 方法：**

```js
// 滚动到评论的列表区域
scrollToCmtList() {
  // 1. 当前滚动条的位置
  const now = window.scrollY
  // 2. 目标位置（文章信息区域的高度）
  const dist = document.querySelector('.article-container').offsetHeight

  // 3. 实现滚动动画
  animate({
    from: now, // 当前的位置
    to: dist,  // 目标位置
    onUpdate: latest => window.scrollTo(0, latest)
  })
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
