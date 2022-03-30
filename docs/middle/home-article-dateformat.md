# 格式化时间

::: tip 目标
这一小节，我们的目标是实现一个基于当前时间的过滤器，基于 [day.js](https://dayjs.fenxianglu.cn/) 可以方便的实现相对时间的计算
:::

::: warning 步骤

1. 安装 `day.js` 包：
2. 在 `main.js` 入口文件中导入 `day.js` 相关的模块：
3. 在 `main.js` 入口文件中，配置`插件和语言包`：
4. 在 `main.js` 入口文件中，定义格式化时间的`全局过滤器`：
5. 在 `ArtItem.vue` 组件中，使用`全局过滤器格式化时间`：
:::

::: info 体验

* **Step.1：安装 `day.js` 包**

```bash
npm install dayjs --save
```

* **Step.2：在 `main.js` 入口文件中导入 `day.js` 相关的模块**

```js
// 导入 dayjs 的核心模块
import dayjs from 'dayjs'

// 导入计算相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime'

// 导入中文语言包
import zh from 'dayjs/locale/zh-cn'
```

* **Step.3：在 `main.js` 入口文件中，配置`插件和语言包`**

```js
// 配置“计算相对时间”的插件
dayjs.extend(relativeTime)

// 配置中文语言包
dayjs.locale(zh)
```

* **Step.4：在 `main.js` 入口文件中，定义格式化时间的`全局过滤器`**

```js
// dt 参数是文章的发表时间
Vue.filter('dateFormat', dt => {
  // 调用 dayjs() 得到的是当前的时间
  // .to() 方法的返回值，是计算出来的“相对时间”
  return dayjs().to(dt)
})
```

* **Step.5：在 `ArtItem.vue` 组件中，使用`全局过滤器格式化时间`**

```html
<!-- label 区域的插槽 -->
<template #label>
  <div class="label-box">
    <span>{{article.aut_name}} &nbsp;&nbsp; {{article.comm_count}}评论 &nbsp;&nbsp; {{article.pubdate | dateFormat}}</span>
    <!-- 关闭按钮 -->
    <van-icon name="cross" />
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
