# 存储token到vuex

::: tip 目标
这一小节，我们的目标是把token存储到vuex中
:::

::: warning 步骤

1. 在vuex模块中声明如下的state数据节点，定义专门用来存储token信息的`tokenInfo`对象
2. 在mutations节点下，定义名为`updateTokenInfo`的Mutation方法，专门用来更新`tokenInfo`的值
3. 在`Login.vue`组件中，通过`mapMutations`辅助方法，把`updateTokenInfo`映射为组件的methods方法
:::

::: info 体验

* **Step.1： 在vuex模块中声明如下的state数据节点，定义专门用来存储token信息的`tokenInfo`对象**

```js
export default new Vuex.Store({
  state: {
    // 用来存储token信息的对象，将来这个对象中会包含两个属性 {token, refresh_token}
    tokenInfo: {}
  }
})
```

* **Step.2： 在mutations节点下，定义名为`updateTokenInfo`的Mutation方法，专门用来更新`tokenInfo`的值**

```js
export default new Vuex.Store({
  mutations: {
    // 更新 tokenInfo 数据的方法
    updateTokenInfo (state, payload) {
      // 把提交过来的 payload 对象， 作为 tokenInfo 的值
      state.tokenInfo = payload
      // 测试 state 中是否有数据
      console.log(state)
    }
  }
})
```

* **Step.3： 在`Login.vue`组件中，通过`mapMutations`辅助方法，把`updateTokenInfo`映射为组件的methods方法**

```js
// 1. 按需导入辅助方法
import { mapMutations } from 'vuex'

export default {
  methods: {
    // 2. 映射 mutations 中的方法
    ...mapMutations(['updateTokenInfo']),

    async login() {
      const { data: res } = await loginAPI(this.form)
      console.log(res)

      if (res.message === 'OK') {
        // 3. 把登录成功的结果，存储到 vuex 中
        this.updateTokenInfo(res.data)
        // 4. 登录成功后，跳转到主页
        this.$router.push('/')
      }
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
