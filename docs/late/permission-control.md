# 权限控制

## 路由的`query`查询参数

::: tip 目标
这一小节，我们的目标是回顾路由的 query 查询参数
:::

::: warning 步骤

1. $router.push('/movie') 是不带查询参数的路由跳转
2. $router.push('/movie?id=9') 是带查询参数的路由跳转
3. 在路由组件中,通过 this.$route.query.xxx 访问查询参数的值
4. query 查询参数的优势：在不修改路由规则的前提下，给路由组件传递参数。
:::

::: info 体验

* **Step.1：$router.push('/movie') 是不带查询参数的路由跳转**
* **Step.2：$router.push('/movie?id=9') 是带查询参数的路由跳转**
* **Step.3：在路由组件中,通过 this.$route.query.xxx 访问查询参数的值**

```js
this.$route.query.id // 输出 9
```

* **Step.4：query 查询参数的优势：在不修改路由规则的前提下，给路由组件传递参数。**
:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 路由对象的`path`和`fullPath`

::: tip 目标
这一小节，我们的目标是回顾路由对象的`path`和`fullPath`
:::

::: warning 步骤

> 假设访问的路由地址是 /movie?id=3

1. $route.path 是字符串，对应当前路由的路径。值是 /movie
2. $route.fullPath 是字符串，包含查询参数和 hash 的完整路径。值是 /movie?id=3
3. 结论：如果想要获取到完整的路径地址，推荐使用 fullPath；如果只希望获取到 / 相关的路径部分，推荐使用 path。

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## `next`函数3种调用方式

::: tip 目标
这一小节，我们的目标是回顾路由`next`函数3种调用方式
:::

::: warning 步骤

1. 放行操作
2. 强制跳转
3. 阻止跳转
:::

::: info 体验

* **Step.1：放行操作**
  > 直接调用 next() 函数，表示放行

```js
router.beforeEach((to, from, next) => {
  if (to.path === '/movie') {
    console.log('放行')
    next()
  } else {
    next()
  }
})
```

* **Step.2：强制跳转**

> next('路由地址') 表示强制跳转到指定路由

```js
router.beforeEach((to, from, next) => {
  if (to.path === '/movie') {
    console.log('强制跳转到登录')
    next('/login')
  } else {
    next()
  }
})
```

* **Step.3：阻止跳转**

  > next(false) 表示阻止路由跳转，强制用户停留在当前路由

```js
router.beforeEach((to, from, next) => {
  if (to.path === '/movie') {
    console.log('阻止跳转')
    next(false)
  } else {
    next()
  }
})
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 声明全局前置守卫

::: tip 目标
这一小节，我们的目标是声明全局前置守卫

可以参考[全局前置守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫)的官方文档进行使用
:::

::: warning 步骤

1. 在路由模块中，为 `router` 对象挂载全局前置守卫
2. 把有权限页面的路径抽离到数组中
:::

::: info 体验

* **Step.1：在路由模块中，为 `router` 对象挂载全局前置守卫**

```js
// 1. 创建路由的实例对象
const router = new VueRouter({
  routes
})

// 2. 为路由的实例对象挂载全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/user' || to.path === '/user/edit') {
    // 2.1 访问的是有权限的页面，需要判断用户是否登录
    next()
  } else {
    // 2.2 访问的是没有权限的页面
    next()
  }
})
```

* **Step.2：把有权限页面的路径抽离到数组中**

```js
// 所有有权限页面的路径，都在这个数组之中
const pagePathArr = ['/user', '/user/edit']

// 为路由的实例对象挂载全局前置守卫
router.beforeEach((to, from, next) => {
  if (pagePathArr.indexOf(to.path) !== -1) {
    // 访问的是有权限的页面，需要判断用户是否登录
    next()
  } else {
    // 访问的是没有权限的页面
    next()
  }
})
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 访问有权限页面时判断是否登录

::: tip 目标
这一小节，我们的目标是访问有权限页面时判断是否登录
:::

::: warning 步骤

1. 在路由模块的头部导入 `vuex` 模块
2. 在导航守卫中，从 `store` 中获取 `token` 的值，并在用户访问有权限的页面时，判断 `token` 的值是否存在
3. 解决 `vue-router` 内部的报错的问题
:::

::: info 体验

* **Step.1：在路由模块的头部导入 `vuex` 模块**

```js
import store from '@/store/index.js'
```

* **Step.2：在导航守卫中，从 `store` 中获取 `token` 的值，并在用户访问有权限的页面时，判断 `token` 的值是否存在**

```js
// 所有有权限页面的路径，都在这个数组之中
const pagePathArr = ['/user', '/user/edit']

// 为路由的实例对象挂载全局前置守卫
router.beforeEach((to, from, next) => {
  // 访问的是有权限的页面，需要判断用户是否登录
  if (pagePathArr.indexOf(to.path) !== -1) {
    // 1. 从 store 中获取 token 的值
    //    注意：store.state.tokenInfo 要么是 {} 空对象，要么是包含 {token, refresh_token} 的对象
    const tokenStr = store.state.tokenInfo.token
    if (tokenStr) {
      // 1.1 token 有值，已登录过（操作：直接放行）
      next()
    } else {
      // 1.2 token 不存在，没有登录（操作：强制跳转到登录页）
      next('/login')
    }
  } else {
    // 访问的是没有权限的页面
    next()
  }
})
```

* **Step.3：解决 `vue-router` 内部的报错的问题**

```js
// 1. 将 VueRouter 本身提供的 $router.push 方法转存到常量中
const originalPush = VueRouter.prototype.push
// 2. 自定义 $router.push 方法，在内部调用原生的 originalPush 方法进行路由跳转；并通过 .catch 捕获错误
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  // 通过 .catch 捕获错误
  return originalPush.call(this, location).catch(err => err)
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 记录上次访问未遂的路由地址

::: tip 目标
这一小节，我们的目标是记录上次访问未遂的路由地址，比如:

> 如果用户没有登录，要访问 `/user` 地址，则会强制跳转到 `/login` 登录页
> 当用户登录成功之后，应该自动跳转到用户刚才访问未遂的路由地址，即：登录成功之后，跳转到 `/user`
:::

::: warning 步骤

1. 在路由模块的导航守卫中，修改强制跳转到登录的代码
2. 在 `Login` 组件中，进一步改造登录的方法
:::

::: info 体验

* **Step.1：在路由模块的导航守卫中，修改强制跳转到登录的代码**

```js
// before：没有登录，强制跳转到登录页
next('/login')

// now：没有登录，强制跳转到登录页，并携带路由的 "query 查询参数"
next(`/login?pre=${to.fullPath}`)
```

* **Step.2：在 `Login` 组件中，进一步改造登录的方法**

```js
async login() {
  // 只有当表单数据校验通过之后，才会调用此 login 函数
  const { data: res } = await loginAPI(this.form)

  // 判断是否登录成功了
  if (res.message === 'OK') {
    // 1. 把登录成功的结果，存储到 vuex 中
    this.updateTokenInfo(res.data)

    // 2. 要跳转到首页
    const navPath = this.$route.query.pre || '/'
    this.$router.replace(navPath)
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::