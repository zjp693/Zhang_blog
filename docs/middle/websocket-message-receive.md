# 接收服务器的消息

::: tip 目标
这一小节，我们的目标是接收服务器发送的消息
:::

::: warning 步骤

1. 在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('message', fn)` 方法，即可监听到服务器发送到客户端的消息
2. 将服务器发送到客户端的消息，存储到 `Chat.vue` 组件的 `list` 数组中
:::

::: info 体验

* **Step.1：在 `Chat` 组件的 `created` 生命周期函数中，调用 `socket.on('message', fn)` 方法，即可监听到服务器发送到客户端的消息**

```js
// 接收到消息的事件
socket.on('message', msg => console.log(msg))
```

* **Step.2：将服务器发送到客户端的消息，存储到 `Chat.vue` 组件的 `list` 数组中**

```js
// 接收到消息的事件
socket.on('message', msg => {
  // 把服务器发送过来的消息，存储到 list 数组中
  this.list.push({ name: 'xs', msg })
})
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
