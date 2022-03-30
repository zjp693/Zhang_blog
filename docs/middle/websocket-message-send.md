# 向服务器发送消息

::: tip 目标
这一小节，我们的目标是向服务器发送消息
:::

::: warning 步骤

1. 客户端调用 socket.emit('send', '消息内容') 方法，即可向 websocket 服务器发送消息
:::

::: info 体验

* **Step.1：客户端调用 socket.emit('send', '消息内容') 方法，即可向 websocket 服务器发送消息**

```js
// 提交按钮的点击事件处理函数
send() {
  // 如果输入的聊天内容为空，则 return 出去
  if (!this.word) return

  // 向服务器发送消息
  socket.emit('send', this.word)
  // 将用户填写的消息存储到 list 数组中
  this.list.push({ name: 'me', msg: this.word })
  // 清空文本框中的消息内容
  this.word = ''
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
