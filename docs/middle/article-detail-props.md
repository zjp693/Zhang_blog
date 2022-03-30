# 开启props路由传参

::: tip 目标
这一小节，我们的目标是为路由规则开启props传参
:::

::: warning 步骤

1. 在路由模块中，为文章详情的路由规则添加 `props: true` 选项
2. 在 `ArticleDetail` 组件中，通过 `props` 节点接收路由的参数
:::

::: info 体验

* **Step.1：在路由模块中，为文章详情的路由规则添加 `props: true` 选项**

```js
const routes = [
  // 省略其它的路由规则...

  // 文章详情的路由规则
  { path: '/article/:id', component: ArticleDetail, name: 'art-detail', props: true }
]
```

* **Step.2：在 `ArticleDetail` 组件中，通过 `props` 节点接收路由的参数**

```js
export default {
  name: 'ArticleDetail',
  // props 中的 id 是文章的 id（已经调用了大数的 .toString() 方法）
  props: ['id']
}
```

:::
