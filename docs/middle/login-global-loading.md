# 全局loading效果

::: tip 目标
这一小节，我们的目标是基于 Vant 的 [Toast 轻提示](https://vant-contrib.gitee.io/vant/#/zh-CN/toast) 组件，方便的展示 loading 效果
:::

::: warning 步骤

1. 在`src/utils/request.js`模块中，从`vant`中按需导入`Toast`组件
2. 在请求拦截器中，展示loading提示效果
3. 在响应拦截器中，隐藏loading提示效果
:::

::: info 体验

* **Step.1： 在`src/utils/request.js`模块中，从`vant`中按需导入`Toast`组件**

```js
import { Toast } from 'vant'
```

* **Step.2： 在请求拦截器中，展示loading提示效果**

```js
// 请求拦截器
// 注意：在我们的项目中，是基于 instance 实例来发起 ajax 请求的，
// 因此一定要为 instance 实例绑定请求拦截器
instance.interceptors.request.use(
  config => {
    // 展示 loading 效果
    Toast.loading({
      message: '加载中...', // 文本内容
      duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
    })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
```

* **Step.3： 在响应拦截器中，隐藏loading提示效果**

```js
// 响应拦截器（注意：响应拦截器也应该绑定给 instance 实例）
instance.interceptors.response.use(
  response => {
    // 隐藏 loading 效果
    Toast.clear()
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
