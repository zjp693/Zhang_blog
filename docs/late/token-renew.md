# token续签

## 强制跳转到登录页

::: tip 目标
这一小节，我们的目标是强制跳转到登录页面
:::

::: warning 步骤

1. 在 `request.js` 模块中，进一步改造 `response` 响应拦截器，当数据请求失败的时候，进行 `status` 状态码的判断
2. 在 `request.js` 模块中，导入 `vuex` 模块
3. 在 `response` 响应拦截器中，只要监听到 `token` 过期，就立即调用 `cleanState` 方法：
4. 在 `request.js` 模块中，导入 `router` 模块
5. 在 `response` 响应拦截器中，只要监听到 `token` 过期，就立即调用 `router` 原型对象上的 `replace()`方法，强制跳转到登录页
:::

::: info 体验

* **Step.1：在 `request.js` 模块中，进一步改造 `response` 响应拦截器，当数据请求失败的时候，进行 `status` 状态码的判断**

```js
// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 隐藏 loading 提示效果
    Toast.clear()
    return response
  },
  error => {
    // 在请求失败的时候，关闭 loading 提示效果
    Toast.clear()

    // 如果有响应的结果，并且响应的状态码是 401，则证明 Token 过期了
    if (error.response && error.response.status === 401) {
      console.log('token 过期啦')
      // TODO1：清空 vuex 和 localStorage 中的数据
      // TODO2：强制跳转到登录页，并通过路由的 query 查询参数，把当前用户访问未遂的路由地址带给登录页
    }
    return Promise.reject(error)
  }
)
```

* **Step.2：在 `request.js` 模块中，导入 `vuex` 模块**

```js
// 导入 store 实例对象（注意：不要重复导入 store 哦~~~）
import store from '@/store/index.js'
```

* **Step.3：在 `response` 响应拦截器中，只要监听到 `token` 过期，就立即调用 `cleanState` 方法：**

```js
// 如果有响应的结果，并且响应的状态码是 401，则证明 Token 过期了
if (error.response && error.response.status === 401) {
  console.log('token 过期啦')
  // TODO1：清空 vuex 和 localStorage 中的数据
  store.commit('cleanState')
  // TODO2：强制跳转到登录页，并通过路由的 query 查询参数，把当前用户访问未遂的路由地址带给登录页
}
```

* **Step.4：在 `request.js` 模块中，导入 `router` 模块**

```js
// 导入 router 实例对象
import router from '@/router/index.js'
```

* **Step.5：在 `response` 响应拦截器中，只要监听到 `token` 过期，就立即调用 `router` 原型对象上的 `replace()`方法，强制跳转到登录页**

```js
// 如果有响应的结果，并且响应的状态码是 401，则证明 Token 过期了
if (error.response && error.response.status === 401) {
  console.log('token 过期啦')
  // TODO1：清空 vuex 和 localStorage 中的数据
  store.commit('cleanState')
  // TODO2：强制跳转到登录页，并通过路由的 query 查询参数，把当前用户“访问未遂的路由地址”带给登录页
  router.replace('/login?pre=' + router.currentRoute.fullPath)
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 无感知刷新Token

::: tip 目标
这一小节，我们的目标是无感知刷新Token
:::

::: warning 步骤

1. 在 `request.js` 模块中，导入 `vuex` 的 `store` 模块
2. 在 `request.js` 模块中，改造 `response`拦截器，当数据请求失败的时候，从 `vuex` 中获取 `tokenInfo` 对象
3. 在 `response` 拦截器中，当数据请求失败的时候，判断是否为 `token` 过期
4. 在 `userAPI.js` 模块中，导入 `axios`：
5. 在 `userAPI.js` 模块中，定义名为 `exchangeTokenAPI` 的方法，用来根据 `refresh_token` 换取新 `token`
6. 在 `request.js` 模块中，按需导入换取 `token` 的 `API`
7. 在 `response` 拦截器中，调用换取 `token` 的 `API` 接口
8. 在 `response` 拦截器中，触发指定名称的`Mutation` 函数，更新 `state` 和本地的 `token` 值
9. 在`response`拦截器中，如果 `return` 了一个新的 `Promise` 异步请求，则会把这次请求的结果，当作上次请求的返回值
10. 如果 `tokenInfo.refresh_token` 也失效了，可以使用`try...catch` 进行捕获
:::

::: info 体验

* **Step.1：在 `request.js` 模块中，导入 `vuex` 的 `store` 模块**

```js
// 导入 store 实例对象（注意：不要重复导入 store 哦~~~）
import store from '@/store/index'
```

* **Step.2：在 `request.js` 模块中，改造 `response`拦截器，当数据请求失败的时候，从 `vuex` 中获取 `tokenInfo` 对象**

```js
// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 隐藏 loading 提示效果
    Toast.clear()
    return response
  },
  error => {
    Toast.clear()

    // 1. 从 vuex 中获取 tokenInfo 对象，格式为： { token, refresh_token }
    const tokenInfo = store.state.tokenInfo

    return Promise.reject(error)
  }
)
```

* **Step.3：在 `response` 拦截器中，当数据请求失败的时候，判断是否为 `token` 过期**

```js
// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 隐藏 loading 提示效果
    Toast.clear()
    return response
  },
  error => {
    Toast.clear()

    // 1. 从 vuex 中获取 tokenInfo 对象，格式为： { token, refresh_token }
    const tokenInfo = store.state.tokenInfo

    // 2. 判断是否为 token 过期
    if (error.response && error.response.status === 401 && tokenInfo.refresh_token) {
      // token 过期
      console.log('token过期啦')

      // 3.1 TODO: 发起请求，根据 refresh_token 重新请求一个有效的新 token
    }

    return Promise.reject(error)
  }
)
```

* **Step.4：在 `userAPI.js` 模块中，导入 `axios`**

```js
import axios from 'axios'
```

* **Step.5：在 `userAPI.js` 模块中，定义名为 `exchangeTokenAPI` 的方法，用来根据 `refresh_token` 换取新 `token`**

```js
// 换取 Token 的 API（形参中的 refreshToken 用来换取新 token）
export const exchangeTokenAPI = refreshToken => {
  return axios({
    method: 'PUT',
    // 这里必须填写完整的请求 URL 地址
    url: 'http://www.liulongbin.top:8000/v1_0/authorizations',
    headers: {
      // 在请求头中携带 Authorization 身份认证字段
      Authorization: 'Bearer ' + refreshToken
    }
  })
}
```

* **Step.6：在 `request.js` 模块中，按需导入换取 `token` 的 `API`**

```js
// 按需导入换取 token 的 API
import { exchangeTokenAPI } from '@/api/userAPI.js'
```

* **Step.7：在 `response` 拦截器中，调用换取 `token` 的 `API` 接口**

```js
// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 隐藏 loading 提示效果
    Toast.clear()
    return response
  },
  async error => {
    Toast.clear()

    // 1. 从 vuex 中获取 tokenInfo 对象，格式为： { token, refresh_token }
    const tokenInfo = store.state.tokenInfo
    // 2. 判断是否为 token 过期
    if (error.response && error.response.status === 401 && tokenInfo.refresh_token) {
      // token 过期
      console.log('token过期啦')

      // 3.1 TODO: 发起请求，根据 refresh_token 重新请求一个有效的新 token
      const { data: res } = await exchangeTokenAPI(tokenInfo.refresh_token)
      console.log(res)

      // 3.2 TODO: 更新 Store 中的 Token
    }

    return Promise.reject(error)
  }
)
```

* **Step.8：在 `response` 拦截器中，触发指定名称的`Mutation` 函数，更新 `state` 和本地的 `token` 值**

```js
// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 隐藏 loading 提示效果
    Toast.clear()
    return response
  },
  async error => {
    Toast.clear()

    // 1. 从 vuex 中获取 tokenInfo 对象，格式为： { token, refresh_token }
    const tokenInfo = store.state.tokenInfo
    // 2. 判断是否为 token 过期
    if (error.response && error.response.status === 401 && tokenInfo.refresh_token) {
      // token 过期
      console.log('token过期啦')

      // 3.1 TODO: 发起请求，根据 refresh_token 重新请求一个有效的新 token
      const { data: res } = await exchangeTokenAPI(tokenInfo.refresh_token)
      console.log(res)

      // 3.2 TODO: 更新 Store 中的 Token
      store.commit('updateTokenInfo', { token: res.data.token, refresh_token: tokenInfo.refresh_token })

      // 3.3 重新调用刚才“请求未遂”的接口
    }

    return Promise.reject(error)
  }
)
```

* **Step.9：在`response`拦截器中，如果 `return` 了一个新的 `Promise` 异步请求，则会把这次请求的结果，当作上次请求的返回值**

```js
// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 隐藏 loading 提示效果
    Toast.clear()
    return response
  },
  async error => {
    Toast.clear()

    // 1. 从 vuex 中获取 tokenInfo 对象，格式为： { token, refresh_token }
    const tokenInfo = store.state.tokenInfo
    // 2. 判断是否为 token 过期
    if (error.response && error.response.status === 401 && tokenInfo.refresh_token) {
      // token 过期
      console.log('token过期啦')

      // 3.1 TODO: 发起请求，根据 refresh_token 重新请求一个有效的新 token
      const { data: res } = await exchangeTokenAPI(tokenInfo.refresh_token)

      // 3.2 TODO: 更新 Store 中的 Token
      store.commit('updateTokenInfo', { token: res.data.token, refresh_token: tokenInfo.refresh_token })

      // 3.3 重新调用刚才“请求未遂”的接口
      // 3.3.1 如果在响应拦截器中 return 一个新的 Promise 异步请求，则会把这次请求的结果，当作上次请求的返回值
      return instance(error.config)
    }
    return Promise.reject(error)
  }
)
```

* **Step.10：如果 `tokenInfo.refresh_token` 也失效了，可以使用`try...catch` 进行捕获**

```js
// 响应拦截器
instance.interceptors.response.use(response => {
  // 隐藏 loading 效果
  Toast.clear()
  return response
}, async error => {
  // 在请求失败的时候，关闭 loading 提示效果
  Toast.clear()
  // 1.从 vuex 中获取 tokenInfo 对象， 格式为：{token, refresh_token}
  const tokenInfo = store.state.tokenInfo.tokenInfo
  // 2. 判断是否为 token 过期
  if (error.response && error.response.status === 401 || tokenInfo.refresh_token) {

    try {
      // 3.1 TODO: 发起请求，根据 refresh_token 重新请求一个有效的新 token
      const { data: res } = await exchangeTokenAPI(tokenInfo.refresh_token)
      // 3.2 TODO: 更新 Store 中的 Token
      store.commit('updateTokenInfo', { token: res.data.token, refresh_token: tokenInfo.refresh_token })
        // 3.3 重新调用刚才“请求未遂”的接口
        // 3.3.1 如果在响应拦截器中 return 一个新的 Promise 异步请求，则会把这次请求的结果，当作上次请求的返回值
      return instance(error.config)
    } catch {
      // token 和 refresh_token 都失效了

      // 4.1 清空 vuex 和 localStorage
      store.commit('cleanState')
      // 4.2 强制跳转到登录页
      router.replace('/login?pre=' + router.currentRoute.fullPath)
    }
  }
  return Promise.reject(error)
})
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
