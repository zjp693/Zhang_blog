# 全局token认证

::: tip 目标
这一小节，我们的目标是实现基于拦截器添加token认证
:::

::: warning 步骤

1. 在`request.js`模块中导入vuex的模块
2. 在请求拦截器中，从`store.state`中获取到`tokenInfo`对象上的`token`值
3. 如果`tokenStr`的值不为空，则为这次请求的请求头添加`Authorization`身份认证字段

:::

::: info 体验

* **Step.1： 在`request.js`模块中导入vuex的模块**
* **Step.2： 在请求拦截器中，从`store.state`中获取到`tokenInfo`对象上的`token`值**
* **Step.3： 如果`tokenStr`的值不为空，则为这次请求的请求头添加`Authorization`身份认证字段**

```js
// 从 vuex 中获取 token 的值
    const tokenStr = store.state.tokenInfo.token
    if (tokenStr) {
      // 只有 tokenStr 的值存在，才有必要挂载到请求头的 Authorization 属性中
      config.headers.Authorization = 'Bearer ' + tokenStr
    }
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
