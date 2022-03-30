# 封装channelled属性

::: tip 目标
这一小节，我们的目标是封装channeled属性
:::

::: warning 步骤

1. 在`ArticleList`组件的`props`节点下，封装`channelId`属性
2. 在`Home`组件中使用`ArticleList`组件时，通过属性绑定必填的`channel-id`属性值
3. 在`ArticleList`组件中，通过插值表达式渲染`props`接收到的`channelId`
:::

::: info 体验

* **Step.1：在`ArticleList`组件的`props`节点下，封装`channelId`属性**

```js
export default {
  name: 'ArtList',
  props: {
    // 频道 Id（小驼峰命名法）
    channelId: {
      type: Number, // 数值类型
      required: true // 必填项
    }
  }
}
```

* **Step.2：在`Home`组件中使用`ArticleList`组件时，通过属性绑定必填的`channel-id`属性值**

```html
<van-tabs v-model="active" sticky offset-top="1.22666667rem">
  <van-tab v-for="item in userChannel" :key="item.id" :title="item.name">
    <!-- 注意：Vue 官方建议在绑定 props 时，把“小驼峰”的属性名，改造成“短横线”的形式使用 -->
    <art-list :channel-id="item.id"></art-list>
  </van-tab>
</van-tabs>
```

* **Step.3：在`ArticleList`组件中，通过插值表达式渲染`props`接收到的`channelId`**

```html
<template>
  <div>文章列表组件 --- {{channelId}}</div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
