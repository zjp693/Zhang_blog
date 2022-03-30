
# 动态渲染用户头像

::: tip 目标
这一小节，我们的目标是动态渲染用户头像
:::

::: warning 步骤

1. 在`vuex` 模块中，定义`getter` 节点`userAvatar`
2. 在 `Chat` 组件中导入 `mapGetters` 辅助函数
3. 在 `Chat` 组件中把 `userAvatar` 映射到当前组件中
4. 动态渲染用户的头像
:::

::: info 体验

* **Step.1：在`vuex` 模块中，定义`getter` 节点`userAvatar`**

```js
getters: {
  // 用户头像的计算属性
  userAvatar(state) {
    // 默认的头像地址
    let imgSrc = 'https://img.yzcdn.cn/vant/cat.jpeg'

    // 如果用户信息对象中包含 photo 属性的值，则为 imgSrc 重新赋值
    if (state.userInfo.photo) {
      imgSrc = state.userInfo.photo
    }

    return imgSrc
  }
}
```

* **Step.2：在 `Chat` 组件中导入 `mapGetters` 辅助函数**

```js
// 按需导入辅助函数
import { mapGetters } from 'vuex'
```

* **Step.3：在 `Chat` 组件中把 `userAvatar` 映射到当前组件中**

```js
computed: {
  ...mapGetters(['userAvatar'])
}
```

* **Step.4：动态渲染用户的头像**

```html
<!-- 右侧是当前用户 -->
<div class="chat-item right" v-else>
  <div class="chat-pao">我是编程小王子</div>
  <van-image fit="cover" round :src="userAvatar" />
</div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
