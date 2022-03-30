# 动态渲染聊天消息

::: tip 目标
这一小节，我们的目标是动态渲染聊天消息
:::

::: warning 步骤

1. 在 `data` 中声明 `list` 数组，用来聊天消息
2. 动态渲染聊天消息的 `DOM` 结构
:::

::: info 体验

* **Step.1：在 `data` 中声明 `list` 数组，用来聊天消息**

```js
data() {
  return {
    // 用户填写的内容
    word: '',
    // 所有的聊天消息
    list: [
      // 1. 只根据 name 属性，即可判断出这个消息应该渲染到左侧还是右侧
      { name: 'xs', msg: 'hi，你好！我是小思' },
      { name: 'me', msg: '我是编程小王子' }
    ]
  }
},
```

* **Step.2：动态渲染聊天消息的 `DOM` 结构**

```html
<!-- 聊天主体区域 -->
<div class="chat-list">
  <div v-for="(item, index) in list" :key="index">
    <!-- 左侧是机器人小思 -->
    <div class="chat-item left" v-if="item.name === 'xs'">
      <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="chat-pao">{{item.msg}}</div>
    </div>

    <!-- 右侧是当前用户 -->
    <div class="chat-item right" v-else>
      <div class="chat-pao">{{item.msg}}</div>
      <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
  </div>
</div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
