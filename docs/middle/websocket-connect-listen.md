# 监听连接建立和关闭

::: tip 目标
这一小节，我们的目标是监听连接的建立和关闭
:::

::: warning 步骤

1. 在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('connect', fn)` 方法，可以监听到 `socket` 连接成功的事件
2. 在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('disconnect', fn)` 方法，可以监听到 `socket` 连接关闭的事件
:::

::: info 体验

* **Step.1：在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('connect', fn)` 方法，可以监听到 `socket` 连接成功的事件**

```js
// 建立连接的事件
socket.on('connect', () => console.log('connect: websocket 连接成功！'))
```

* **Step.2：在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('disconnect', fn)` 方法，可以监听到 `socket` 连接关闭的事件**

```js
// 关闭连接的事件
socket.on('disconnect', () => console.log('disconnect: websocket 连接关闭！'))
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
