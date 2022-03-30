# 动态添加聊天消息

::: tip 目标
这一小节，我们的目标是向list数组中追加消息
:::

::: warning 步骤

1. 点击提交按钮时，把用户填写的消息内容存储到 `list` 数组中
2. 测试无误之后，将 `list` 数组中的“假数据”清空
:::

::: info 体验

* **Step.1：点击提交按钮时，把用户填写的消息内容存储到 `list` 数组中**

```js
// 提交按钮的点击事件处理函数
send() {
  // 如果输入的聊天内容为空，则 return 出去
  if (!this.word) return

  // 1. 将用户填写的消息存储到 list 数组中
  this.list.push({ name: 'me', msg: this.word })
  // 2. 清空文本框中的消息内容
  this.word = ''
}
```

* **Step.2：测试无误之后，将 `list` 数组中的“假数据”清空**

```js
data() {
  return {
    // 所有的聊天消息
    list: []
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
