# 实现频道添加

::: tip 目标
这一小节，我们的目标是实现新增频道的功能
:::

::: warning 步骤

1. 为“更多频道”下的 `item` 项绑定点击事件处理函数，将当前的频道信息作为参数，传递给 `addChannel` 方法
2. 在`Home`组件的 `methods` 节点下，声明 `addChannel` 处理函数
3. 在`homeAPI.js`模块中，声明`API` 接口，用来将用户的频道列表数据提交到服务器保存
4. 在`Home`组件中，按需导入 `API` 接口
5. 在`Home`组件中，声明 updateChannel 方法，用来把最新的用户频道列表数据，提交到后端保存
6. 在 `Home` 组件的 `addChannel` 方法中，调用上一步封装的 `updateChannel` 方法
7. 提示用户更新成功
:::

::: info 体验

* **Step.1：为“更多频道”下的 `item` 项绑定点击事件处理函数，将当前的频道信息作为参数，传递给 `addChannel` 方法**

```html
<!-- 更多频道列表 -->
<van-row type="flex">
  <van-col span="6" v-for="item in moreChannels" :key="item.id">
    <div class="channel-item van-hairline--surround" @click="addChannel(item)">{{item.name}}</div>
  </van-col>
</van-row>
```

* **Step.2：在`Home`组件的 `methods` 节点下，声明 `addChannel` 处理函数**

```js
methods: {
  // 新增频道（形参 item 就是当前用户点击的频道信息对象）
  // 格式：{ id, name }
  addChannel(item) {
    // 将用户点击的频道，添加到“用户频道”列表中
    this.userChannel.push(item)
    // TODO：调用 API 接口，将最新的用户频道，存储到后台数据库中
  }
}
```

* **Step.3：在`homeAPI.js`模块中，声明`API` 接口，用来将用户的频道列表数据提交到服务器保存**

```js
// 更新用户频道列表数据的 API
// 注意：形参 channels 是一个数组，格式： [ {id, seq} ]
export const updateUserChannelAPI = channels => {
  return request.put('/v1_0/user/channels', {
    channels
  })
}
```

* **Step.4：在`Home`组件中，按需导入 `API` 接口**

```js
// 按需导入 API 接口
import { getUserChannelAPI, getAllChannelAPI, updateUserChannelAPI } from '@/api/homeAPI'
```

* **Step.5：在`Home`组件中，声明 updateChannel 方法，用来把最新的用户频道列表数据，提交到后端保存**

```js
methods: {
  // 把用户的频道列表数据提交到后端保存
  async updateChannel(item) {
    // 1. 准备要提交到服务器的数据
    const channels = this.userChannel
      .filter(item => item.name !== '推荐') // 将“推荐”从频道列表中过滤出去
      .map((item, index) => {               // 调用数组的 map 循环，最终返回一个处理好的新数组
        return {
          id: item.id,
          seq: index + 1
        }
      })

    // 2. 调用 API 接口
    const { data: res } = await updateUserChannelAPI(channels)
    if (res.message === 'OK') {
      // TODO：提示用户更新成功
    }
  }
}
```

* **Step.6：在 `Home` 组件的 `addChannel` 方法中，调用上一步封装的 `updateChannel` 方法**

```js
methods: {
  // 新增频道（形参 item 就是当前用户点击的频道信息对象）
  // 格式：{ id, name }
  addChannel(item) {
    // 将用户点击的频道，添加到“用户频道”列表中
    this.userChannel.push(item)
    // 调用 updateChannel 方法，把最新的频道列表数据提交到后端保存
    this.updateChannel()
  },
}
```

* **Step.7：提示用户更新成功**

```js
methods: {
  // 把用户的频道列表数据提交到后端保存
  async updateChannel(item) {
    // 1. 准备要提交到服务器的数据
    const channels = this.userChannel
      .filter(item => item.name !== '推荐') // 将“推荐”从频道列表中过滤出去
      .map((item, index) => {               // 调用数组的 map 循环，最终返回一个处理好的新数组
        return {
          id: item.id,
          seq: index + 1
        }
      })

    // 2. 调用 API 接口
    const { data: res } = await updateUserChannelAPI(channels)
    if (res.message === 'OK') {
      // 3. 通过 notify 弹框提示用户更新成功
      this.$notify({ type: 'success', message: '更新成功', duration: 1000 })
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
