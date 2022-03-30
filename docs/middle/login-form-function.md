# 实现登录方法

::: tip 目标
这一小节，我们的目标是实现登录功能
:::

::: warning 步骤

1. 为`<van-form>`组件绑定`submit`事件处理函数
2. 在`Login.vue`组件中的methods节点声明`login`事件处理函数
3. 在 `src` 目录之下，新建 `api`文件夹，并在其下新建`userAPI.js`模
4. 在`Login.vue`组件中，按需导入登录的API接口
5. 在`<van-form>`组件的`submit`事件处理函数中，调用`loginAPI`接口
:::

::: info 体验

* **Step.1： 为`<van-form>`组件绑定`submit`事件处理函数**

```html
<!-- 登录的表单 -->
<van-form @submit="login"></van-form>
```

* **Step.2： 在`Login.vue`组件中的methods节点声明`login`事件处理函数**

```js
methods: {
  login() {
    // 只有当表单数据校验通过之后，才会调用此 login 函数
    console.log('ok')
    // TODO：调用 API 接口，发起登录的请求
  }
}
```

* **Step.3： 在 `src` 目录之下，新建 `api`文件夹，并在其下新建`userAPI.js`模**

```js
import request from '@/utils/request'

// 登录的 API 接口
export const loginAPI = data => {
  return request.post('/v1_0/authorizations', data)
}
```

* **Step.4： 在`Login.vue`组件中，按需导入登录的API接口**

```js
import { loginAPI } from '@/api/userAPI'
```

* **Step.5： 在`<van-form>`组件的`submit`事件处理函数中，调用`loginAPI`接口**

```js
    methods: {
    async login() {
      // 只有当表单数据校验通过之后，才会调用 Login 函数
      // 只有当表单数据校验通过之后，才会调用此Login函数
      const res = await loginAPI(this.form)
      // 当数据请求成功之后，res.data中存储的就是服务器响应回来的数据
      console.log(res)

      // 判断是否登录成功了
      if (res.message === 'ok') {
        // TODO1: 把登录成功的解构，存储到 vuex 中
        // TODO2: 登录成功后，跳转到主页
      }
    }
  }
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
