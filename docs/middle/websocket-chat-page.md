# 创建聊天组件页面

::: tip 目标
这一小节，我们的目标是渲染小思同学的页面
:::

::: warning 步骤

1. 在 `/src/views` 目录下新建 `Chat` 组件
2. 在 路由模块中，导入 `Chat` 组件并声明路由规则
3. 在 `User` 组件中，为小思同学对应的 `van-cell`添加 `to` 属

:::

::: info 体验

* **Step.1：在 `/src/views` 目录下新建 `Chat` 组件**

```html
<template>
  <div class="container">
    <!-- 固定导航 -->
    <van-nav-bar fixed left-arrow @click-left="$router.back()" title="小思同学"></van-nav-bar>

    <!-- 聊天主体区域 -->
    <div class="chat-list">
      <div>
        <!-- 左侧是机器人小思 -->
        <div class="chat-item left">
          <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="chat-pao">hi，你好！我是小思</div>
        </div>

        <!-- 右侧是当前用户 -->
        <div class="chat-item right">
          <div class="chat-pao">我是编程小王子</div>
          <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
      </div>
    </div>

    <!-- 对话区域 -->
    <div class="reply-container van-hairline--top">
      <van-field v-model.trim="word" placeholder="说点什么...">
        <template #button>
          <span @click="send()" style="font-size:12px;color:#999">提交</span>
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      // 用户输入的聊天内容
      word: ''
    }
  },
  methods: {
    // 提交按钮的点击事件处理函数
    send() {
      // 如果输入的聊天内容为空，则 return 出去
      if (!this.word) return

      // 打印输出用户填写的聊天内容
      console.log(this.word)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  background: #fafafa;
  padding: 46px 0 50px 0;
  .chat-list {
    height: 100%;
    overflow-y: scroll;
    .chat-item {
      padding: 10px;
      .van-image {
        vertical-align: top;
        width: 40px;
        height: 40px;
      }
      .chat-pao {
        vertical-align: top;
        display: inline-block;
        min-width: 40px;
        max-width: 70%;
        min-height: 40px;
        line-height: 38px;
        border: 0.5px solid #c2d9ea;
        border-radius: 4px;
        position: relative;
        padding: 0 10px;
        background-color: #e0effb;
        word-break: break-all;
        font-size: 14px;
        color: #333;
        &::before {
          content: '';
          width: 10px;
          height: 10px;
          position: absolute;
          top: 12px;
          border-top: 0.5px solid #c2d9ea;
          border-right: 0.5px solid #c2d9ea;
          background: #e0effb;
        }
      }
    }
  }
}
.chat-item.right {
  text-align: right;
  .chat-pao {
    margin-left: 0;
    margin-right: 15px;
    &::before {
      right: -6px;
      transform: rotate(45deg);
    }
  }
}
.chat-item.left {
  text-align: left;
  .chat-pao {
    margin-left: 15px;
    margin-right: 0;
    &::before {
      left: -5px;
      transform: rotate(-135deg);
    }
  }
}
.reply-container {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 44px;
  width: 100%;
  background: #f5f5f5;
  z-index: 9999;
}
</style>
```

* **Step.2：在 路由模块中，导入 `Chat` 组件并声明路由规则**

```js
// 导入小思同学的组件页面
import Chat from '@/views/Chat/Chat.vue'

const routes = [
  // 小思聊天的路由规则
  { path: '/chat', component: Chat, name: 'chat' }
]
```

* **Step.3：在 `User` 组件中，为小思同学对应的 `van-cell`添加 `to` 属**

```html
<van-cell icon="chat-o" title="小思同学" is-link to="/chat" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
