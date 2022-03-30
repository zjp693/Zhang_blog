# 图片懒加载

::: tip 目标
这一小节，我们的目标是实现文章列表图片的懒加载，基于 Vant 的 [Lazyload 懒加载](https://vant-contrib.gitee.io/vant/#/zh-CN/lazyload)，可以轻松实现列表中图片的懒加载效果
:::

::: warning 步骤

1. 在 `main.js` 入口文件中，按需导入 `Lazyload` 指令
2. 在`main.js` 中将 `Lazyload` 注册为全局可用的指令
3. 在 `ArtItem.vue` 组件中，删除 `<img>` 标签的 `src 属性`，并应用 `v-lazy 指令`，指令的值是要展示的图片地址
:::

::: info 体验

* **Step.1：在 `main.js` 入口文件中，按需导入 `Lazyload` 指令**

```js
import Vant, { Lazyload } from 'vant'
```

* **Step.2：在`main.js` 中将 `Lazyload` 注册为全局可用的指令**

```js
Vue.use(Lazyload)
```

* **Step.3：在 `ArtItem.vue` 组件中，删除 `<img>` 标签的 `src 属性`，并应用 `v-lazy 指令`，指令的值是要展示的图片地址**

```html
<!-- 单张图片 -->
<img alt="" class="thumb" v-if="article.cover.type === 1" v-lazy="article.cover.images[0]">

<!-- 三张图片 -->
<div class="thumb-box" v-if="article.cover.type === 3">
  <img alt="" class="thumb" v-for="(item, index) in article.cover.images" :key="index" v-lazy="item">
</div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
