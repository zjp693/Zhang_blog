
# 渲染登录头部

::: tip
这一小节，我们的目标是**基于 Vant 的** [NavBar 导航栏](https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar) **组件，渲染登录组件的头部区域**
:::

::: warning 步骤

1. 渲染登录组件的header头部区域
2. 为 `<van-nav-bar>` 组件添加 `fixed`属性，实现顶部固定定位的效果
3. 为`Login.vue`组件最外层的`div`元素添加名为`login-container`的类名，防止`<van-nav-bar>`组件遮挡其他元素
4. 在`Login.vue`组件的`style`节点中给`login-container`添加样式
:::

::: info 体验

* **Step.1： 渲染登录组件的header头部区域**

```html
<template>
  <div>
    <!-- NavBar 组件：只需提供 title 标题 -->
    <van-nav-bar title="黑马头条 - 登录" />
  </div>
</template>
```

* **Step.2： 为 `<van-nav-bar>` 组件添加 `fixed`属性，实现顶部固定定位的效果**

```html
<van-nav-bar title="黑马头条 - 登录" fixed />
```

* **Step.3： 为`Login.vue`组件最外层的`div`元素添加名为`login-container`的类名，防止`<van-nav-bar>`组件遮挡其他元素**

```html
<template>
  <div class="login-container">
    <!-- NavBar 组件：只需提供 title 标题 -->
    <van-nav-bar title="黑马头条 - 登录" fixed />
  </div>
</template>
```

* **Step.4： 在`Login.vue`组件的`style`节点中给`login-container`添加样式**

```css
.login-container {
  padding-top: 46px;
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
