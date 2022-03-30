# 创建和销毁 socket 实例

::: tip 目标
这一小节，我们的目标是创建和销毁socket实例
:::

::: warning 步骤

1. 在 `Chat` 组件的`created`生命周期函数中，创建 websocket 实例对象
2. 在 `Chat` 组件的`beforeDestroy`生命周期函数中，关闭 websocket 连接并销毁`websocket`实例对象
:::

::: info 体验

* **Step.1：在 `Chat` 组件的`created`生命周期函数中，创建 websocket 实例对象**

```js
created() {
  // 创建客户端 websocket 的实例
  socket = io('ws://www.liulongbin.top:9999')
}
```

* **Step.2：在 `Chat` 组件的`beforeDestroy`生命周期函数中，关闭 websocket 连接并销毁`websocket`实例对象**

```js
// 组件被销毁之前，清空 sock 对象
beforeDestroy() {
  // 关闭连接
  socket.close()

  // 销毁 websocket 实例对象
  socket = null
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
