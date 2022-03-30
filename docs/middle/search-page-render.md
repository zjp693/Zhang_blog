# 渲染搜索页面

::: tip 目标
这一小节，我们的目标是基于路由渲染搜索组件
:::

::: warning 步骤

1. 在 `/src/views/` 目录下新建 `Search` 组件
2. 在 `/src/router/index.js` 路由模块中，导入搜索组件
3. 在路由模块中的 `routes` 数组中，声明搜索组件的路由规则
4. 在 `Home` 组件中，为搜索小图标绑定点击事件，跳转到搜索页
5. 点击搜索页的后退图标，通过编程式导航 `API`实现后退操作
:::

::: info 体验

* **Step.1：在 `/src/views/` 目录下新建 `Search` 组件**

```html
<template>
  <div>
    <!-- Header 头部区域 -->
    <div class="search-header">
      <!-- 后退图标 -->
      <van-icon name="arrow-left" color="white" size="18" class="goback" />
      <!-- 搜索组件 -->
      <van-search v-model.trim="kw" placeholder="请输入搜索关键词" background="#007BFF" shape="round" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      // 搜索关键词
      kw: ''
    }
  }
}
</script>

<style lang="less" scoped>
.search-header {
  height: 46px;
  display: flex;
  align-items: center;
  background-color: #007bff;
  overflow: hidden;
  // 后退按钮
  .goback {
    padding-left: 14px;
  }
  // 搜索组件
  .van-search {
    flex: 1;
  }
}
</style>
```

* **Step.2：在 `/src/router/index.js` 路由模块中，导入搜索组件**

```js
import Search from '@/views/Search/Search.vue'
```

* **Step.3：在路由模块中的 `routes` 数组中，声明搜索组件的路由规则**

```js
const routes = [
  // 省略其它的路由规则...

  // 搜索组件的路由规则
  { path: '/search', component: Search, name: 'search' }
]
```

* **Step.4：在 `Home` 组件中，为搜索小图标绑定点击事件，跳转到搜索页**

```html
<van-icon name="search" color="white" size="18" @click="$router.push('/search')" />
```

* **Step.5：点击搜索页的后退图标，通过编程式导航 `API`实现后退操作**

```html
<!-- 后退图标 -->
<van-icon name="arrow-left" color="white" size="18" class="goback" @click="$router.back()" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
