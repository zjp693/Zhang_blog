# 渲染更多频道

::: tip 目标

这一小节，我们的目标是，动态计算更多频道的列表数据，原因是后台没有提供直接获取**更多频道**的 API 接口，需要程序员动态地进行计算: 更多频道 = 所有频道 - 我的频道

:::

::: warning 步骤

1. 在 `homeAPI.js`模块中，定义名为 `getAllChannelAPI` 的方法，用来请求所有频道列表
2. 在 `Home` 组件中，按需导入 `getAllChannelAPI` 方法
3. 在 `Home` 组件中，定义名为 `allChannel` 的数组，用来存放所有频道的列表数据
4. 在 `Home` 组件中，声明 `initAllChannel` 方法
5. 在 `Home` 组件的 `created` 生命周期函数中，调用 `initAllChannel` 方法
6. 在 `Home` 组件的 `computed` 节点下，定义名为`moreChannels`的计算属性
7. 修改更多频道列表的数据源
:::

::: info 体验

* **Step.1：在 `homeAPI.js`模块中，定义名为 `getAllChannelAPI` 的方法，用来请求所有频道列表**

```js
// 获取所有频道数据的 API
export const getAllChannelAPI = () => {
  return request.get('/v1_0/channels')
}
```

* **Step.2：在 `Home` 组件中，按需导入 `getAllChannelAPI` 方法**

```js
// 按需导入 API 接口
import { getUserChannelAPI, getAllChannelAPI } from '@/api/homeAPI'
```

* **Step.3：在 `Home` 组件中，定义名为 `allChannel` 的数组，用来存放所有频道的列表数据**

```js
data() {
  return {
    // 省略其它的数据项...

    // 所有的频道列表数据
    allChannel: []
  }
}
```

* **Step.4：在 `Home` 组件中，声明 `initAllChannel` 方法**

```js
methods: {
  // 获取所有频道的列表数据
  async initAllChannel() {
    const { data: res } = await getAllChannelAPI()
    if (res.message === 'OK') {
      // 将请求到的数据，转存到 allChannel 中
      this.allChannel = res.data.channels
    }
  }
}
```

* **Step.5：在 `Home` 组件的 `created` 生命周期函数中，调用 `initAllChannel` 方法**

```js
created() {
  // 请求用户的频道列表数据
  this.initUserChannel()

  // 请求所有的频道列表数据
  this.initAllChannel()
},
```

* **Step.6：在 `Home` 组件的 `computed` 节点下，定义名为`moreChannels`的计算属性**

```js
computed: {
  // 更多频道的数据
  moreChannels() {
    // 1. 对数组进行 filter 过滤，返回的是符合条件的新数组
    return this.allChannel.filter(item => {
      // 判断当前循环项，是否在 “我的频道” 列表之中
      const index = this.userChannel.findIndex(x => x.id === item.id)
      // 如果不在，则 return true，表示需要把这一项存储到返回的新数组之中
      if (index === -1) return true
    })
  }
},
```

* **Step.7：修改更多频道列表的数据源**

```html
<!-- 更多频道列表 -->
<van-row type="flex">
  <van-col span="6" v-for="item in moreChannels" :key="item.id">
    <div class="channel-item van-hairline--surround">{{item.name}}</div>
  </van-col>
</van-row>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
