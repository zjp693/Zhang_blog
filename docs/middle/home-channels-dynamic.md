# 渲染频道列表

::: tip 目标
  这一小节，我们的目标是根据获取到的频道列表数据渲染频道列表
:::

::: warning 步骤

1. 在`/src/api/`目录下新建`homeAPI`模块，并导入`/src/utils`目录下的 `request` 模块
2. 在`homeAPI` 模块中，新建请求用户频道列表数据的接口
3. 在`Home`组件中，按需导入`homeAPI.js`中的`getUserChannelAPI`接口
4. 在`Home`组件中声明`userChannel`数组，用来存储用户的频道列表数据
5. 在`Home`组件中，声明`initUserChannel` 方法，用来初始化用户的频道列表数据
6. 在`Home`组件的`created`函数中，调用`initUserChannel`方法请求用户的频道列表数据
7. 在 `Home` 组件的模板结构中，通过 `v-for` 指令，循环渲染用户的频道列表数据
:::

::: info 体验

* **Step.1：在`/src/api/`目录下新建`homeAPI`模块，并导入`/src/utils`目录下的 `request` 模块**

```js
// 导入请求数据的 request 模块
import request from '@/utils/request'
```

* **Step.2：在`homeAPI` 模块中，新建请求用户频道列表数据的接口**

```js
// 请求用户频道列表数据的 API
export const getUserChannelAPI = () => {
  return request.get('/v1_0/user/channels')
}
```

* **Step.3：在`Home`组件中，按需导入`homeAPI.js`中的`getUserChannelAPI`接口**

```js
// 按需导入 API 接口
import { getUserChannelAPI } from '@/api/homeAPI'
```

* **Step.4：在`Home`组件中声明`userChannel`数组，用来存储用户的频道列表数据**

```js
data() {
  return {
    // 用户的频道列表数组
    userChannel: []
  }
}
```

* **Step.5：在`Home`组件中，声明`initUserChannel` 方法，用来初始化用户的频道列表数据**

```js
methods: {
  async initUserChannel() {
    // 1. 调用 API 接口
    const { data: res } = await getUserChannelAPI()
    // 2. 判断请求是否成功
    if (res.message === 'OK') {
      // 3. 为用户的频道列表赋值
      this.userChannel = res.data.channels
    }
  }
}
```

* **Step.6：在`Home`组件的`created`函数中，调用`initUserChannel`方法请求用户的频道列表数据**

```js
created() {
  this.initUserChannel()
},
```

* **Step.7：在 `Home` 组件的模板结构中，通过 `v-for` 指令，循环渲染用户的频道列表数据**

```html
<!-- 频道列表的标签页 -->
<van-tabs v-model="active" sticky offset-top="1.22666667rem">
  <!-- 循环渲染用户的频道 -->
  <van-tab v-for="item in userChannel" :key="item.id" :title="item.name">{{item.name}}</van-tab>
</van-tabs>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
