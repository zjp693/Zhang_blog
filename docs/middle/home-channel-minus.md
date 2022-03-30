# 实现频道删除

## 实现删除频道的功能

::: tip 目标
这一小节，我们的目标是实现删除频道的功能
:::

::: warning 步骤

1. 在 `Home`组件的`data` 节点下声明布尔值 `isDel`，来控制当前是否处于删除的状态
2. 点击编辑按钮的时候，切换 `isDel` 的状态
3. 根据 `isDel` 的状态，动态渲染按钮的文本和提示的文本
4. 在 `Home` 组件中，在用户的频道中渲染删除的小图标
5. 使用 `v-if` 控制图标的显示与隐藏
6. 为用户的频道 `Item` 项绑定点击事件处理函数，命名为 `onUserChannelClick`
7. 在 `methods` 中声明 `onUserChannelClick` 方法
8. 实现删除频道的功能
:::

::: info 体验

* **Step.1：在 `Home`组件的`data` 节点下声明布尔值 `isDel`，来控制当前是否处于删除的状态**

```js
data() {
  return {
    // 其它的数据节点...

    // 频道数据是否处于删除的状态
    isDel: false
  }
}
```

* **Step.2：点击编辑按钮的时候，切换 `isDel` 的状态**

```html
<span class="btn-edit" @click="isDel = !isDel">编辑</span>
```

* **Step.3：根据 `isDel` 的状态，动态渲染按钮的文本和提示的文本**

```html
<div class="channel-title">
  <div>
    <span class="title-bold">已添加频道：</span>
    <!-- 提示的文本 -->
    <span class="title-gray">{{ isDel ? '点击移除频道' : '点击进入频道' }}</span>
  </div>
  <!-- 按钮的文本 -->
  <span class="btn-edit" @click="isDel = !isDel">{{ isDel ? '完成' : '编辑' }}</span>
</div>
```

* **Step.4：在 `Home` 组件中，在用户的频道中渲染删除的小图标**

```html
<!-- 我的频道列表 -->
<van-row type="flex">
  <van-col span="6" v-for="item in userChannel" :key="item.id">
    <!-- 用户的频道 Item 项 -->
    <div class="channel-item van-hairline--surround">
      {{item.name}}
      <!-- 删除的图标 -->
      <van-badge color="transparent" class="cross-badge">
        <template #content>
          <van-icon name="cross" class="badge-icon" color="#cfcfcf" size="12" />
        </template>
      </van-badge>
    </div>
  </van-col>
</van-row>
```

* **Step.5：使用 `v-if` 控制图标的显示与隐藏**

```html
<!-- 删除的图标 -->
<van-badge color="transparent" class="cross-badge" v-if="isDel">
  <!-- 省略其它代码... -->
</van-badge>
```

* **Step.6：为用户的频道 `Item` 项绑定点击事件处理函数，命名为 `onUserChannelClick`**

```html
<!-- 用户的频道 Item 项 -->
<div class="channel-item van-hairline--surround" @click="onUserChannelClick(item)"></div>
```

* **Step.7：在 `methods` 中声明 `onUserChannelClick` 方法**

```js
methods: {
  // 从用户频道列表中，移除指定 id 的频道
  onUserChannelClick(channel) {
    if (this.isDel) {
      // 处于删除状态
      // TODO1：从 userChannel 中移除指定的频道
      // TODO2：将更改过后的用户频道数据，提交到服务器保存
    } else {
      // 不处于删除状态
    }
  }
}
```

* **Step.8：实现删除频道的功能**

```js
methods: {
  // 从用户频道列表中，移除指定 id 的频道
  onUserChannelClick(channel) {
    if (this.isDel) {
      // 处于删除状态
      // TODO1：从 userChannel 中移除指定的频道
      this.userChannel = this.userChannel.filter(item => item.id !== channel.id)
      // TODO2：将更改过后的用户频道数据，提交到服务器保存
      this.updateChannel()
    } else {
      // 不处于删除状态
    }
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 优化删除频道的功能

::: tip 目标
这一小节，我们的目标是优化删除频道
:::

::: warning 步骤

1. 如果频道的名字是“推荐”，则不渲染删除的小图标
2. 如果频道的名字是“推荐”，则点击频道的时候不执行删除的操作
3. 如果`userChannel`数组中仅剩下两个频道，则不渲染删除的小图标
4. 如果`userChannel`数组中仅剩下两个频道，则点击频道的时候不执行删除的操作
:::

::: info 体验

* **Step.1：如果频道的名字是“推荐”，则不渲染删除的小图标**

```html
<!-- 删除的图标 -->
<van-badge color="transparent" class="cross-badge" v-if="isDel && item.name !== '推荐'">
</van-badge>
```

* **Step.2：如果频道的名字是“推荐”，则点击频道的时候不执行删除的操作**

```js
// 从用户频道列表中，移除指定 id 的频道
removeChannel(channel) {
  if (this.isDel) {
    // 处于删除状态
    // 判断用户点击的是否为“推荐”
    if (channel.name === '推荐') return

    // 移除频道
    this.userChannel = this.userChannel.filter(item => item.id !== channel.id)
    this.updateChannel()
  } else {
    // 不处于删除状态
  }
}
```

* **Step.3：如果`userChannel`数组中仅剩下两个频道，则不渲染删除的小图标**

```html
<!-- 删除的图标 -->
<van-badge color="transparent" class="cross-badge" v-if="isDel && item.name !== '推荐' && userChannel.length > 2"></van-badge>
```

* **Step.4：如果`userChannel`数组中仅剩下两个频道，则点击频道的时候不执行删除的操作**

```js
// 从用户频道列表中，移除指定 id 的频道
removeChannel(channel) {
  if (this.isDel) {
    // 处于删除状态
    // 判断用户点击的是否为“推荐” 或 仅剩下两个频道
    if (channel.name === '推荐' || this.userChannel.length === 2) return

    // 移除频道
    this.userChannel = this.userChannel.filter(item => item.id !== channel.id)
    this.updateChannel()
  } else {
    // 不处于删除状态
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
