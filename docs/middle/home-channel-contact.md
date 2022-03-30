# 频道点击联动

::: tip 目标
这一小节，我们的目标是实现频道的点击联动效果
:::

::: warning 步骤

1. 在点击用户频道的 `Item` 项时，把索引值传递到点击事件的处理函数中
2. 改造 `onUserChannelClick` 方法，通过形参 `index` 接收点击项的索引值
:::

::: info 体验

* **Step.1：在点击用户频道的 `Item` 项时，把索引值传递到点击事件的处理函数中**

```html
<!-- 我的频道列表 -->
<van-row type="flex">
  <!-- 1. 在进行 v-for 循环时，接收索引 index -->
  <van-col span="6" v-for="(item, index) in userChannel" :key="item.id">
    <!-- 2. 点击用户频道的 Item 项时，将索引 index 作为参数，传递给 onUserChannelClick 方法 -->
    <div class="channel-item van-hairline--surround" @click="onUserChannelClick(item, index)">
      {{item.name}}
      <!-- 删除的图标 -->
    </div>
  </van-col>
</van-row>
```

* **Step.2：改造 `onUserChannelClick` 方法，通过形参 `index` 接收点击项的索引值**

```js
// 从用户频道列表中，移除指定 id 的频道
onUserChannelClick(channel, index) {
  if (this.isDel) {
    // 处于删除状态

    if (channel.name === '推荐' || this.userChannel.length === 2) return
    // 进行数组的过滤
    this.userChannel = this.userChannel.filter(item => item.id !== channel.id)
    // 将更改过后的用户频道数据，提交到服务器保存
    this.updateChannel()
  } else {
    // 不处于删除状态

    // 1. 修改 Tabs 的激活项的索引值
    this.active = index
    // 2. 关闭 popup 弹出层
    this.show = false
  }
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
