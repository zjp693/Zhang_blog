# 持久化存储token

::: tip 目标
这一小节，我们的目标是把state持久化存储到客户端，存储在 vuex 中的数据都是内存数据，只要浏览器一刷新，vuex 的数据就被清空了。为了防止这个问题，我们可以把 vuex 中的数据持久化存储到浏览器的 localStorage 中。
:::

::: warning 步骤

1. 定义初始的 state 对象， 命名为 `initState`
2. 把 `initState` 对象作为 `new Vuex.Store()` 时候的state初始值
3. 在 `new Vuex.Store()`之前， 读取localStorage中本地存储的state字符串
4. 如果 `stateStr`的值存在， 则证明本地存储中有之前存储的state数据，需要转换后赋值给`initState`
5. 在`mutations`节点下，定义名为`saveStateStorage` 的函数，专门把state数据持久化存储到localStorage中
6. 今后， 只要`tokenInfo`对象被更新了，就可以调用`saveStateStorage`方法，把最新的state持久化存储到本地
:::

::: info 体验

* **Step.1： 定义初始的 state 对象， 命名为 `initState`**

  ```js
  // 初始的 state 对象
  let initState = {
    // token 的信息对象
    tokenInfo: {}
  }
  ```

* **Step.2： 把 `initState` 对象作为 `new Vuex.Store()` 时候的state初始值**

  ```js
  export default new Vuex.Store({
    // 为 state 赋初值
    state: initState

    // 省略其它代码...
  })
  ```

* **Step.3： 在 `new Vuex.Store()`之前， 读取localStorage中本地存储的state字符串**

  ```js
  const stateStr = localStorage.getItem('state')
  ```

* **Step.4： 如果 `stateStr`的值存在， 则证明本地存储中有之前存储的state数据，需要转换后赋值给`initState`**

  ```js
  if (stateStr) {
    // 加载本地的数据
    initState = JSON.parse(stateStr)
  }

  export default new Vuex.Store({
    // 为 state 赋初值
    state: initState

    // 省略其它代码...
  })
  ```

* **Step.5： 在`mutations`节点下，定义名为`saveStateStorage` 的函数，专门把state数据持久化存储到localStorage中**

  ```js
  // 将 state 持久化存储到本地
  saveStateToStorage(state) {
    localStorage.setItem('state', JSON.stringify(state))
  }
  ```

* **Step.6： 只要`tokenInfo`对象被更新了，就可以调用`saveStateStorage`方法，把最新的state持久化存储到本地**

  ```js
  // 更新 tokenInfo 数据的方法
  updateTokenInfo(state, payload) {
    state.tokenInfo = payload
  
    // 如果希望在 Mutation A 中调用 Mutation B，需要通过 this.commit() 方法来实现
    // this 表示当前的 new 出来的 store 实例对象
    this.commit('saveStateToStorage')
  }
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
