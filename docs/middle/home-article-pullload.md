# 文章列表上拉加载

::: tip 目标
这一小节，我们的目标是实现上拉加载更多功能,我们可以基于基于Vant的[List列表](<https://vant-contrib.gitee.io/vant/#/zh-CN/list>)组件，可以轻松实现列表的上拉加载更多效果
:::

::: warning 步骤

1. 在`ArtList`组件的`data`中，声明`loading`和`finished`
2. 在`ArtList`组件的模板结构中，使用`<van-list>`组件将`<art-item>`组件包裹起来
3. 在`ArtList`组件的`methods`中声明 onLoad 函数
4. 为`<van-list>`组件绑定immediate-check属性，防止首次加载时触发`load`事件
5. 在`<van-list>`组件的`@load="onLoad"`事件处理函数中，调用`initArtList`方法
6. 当下一页数据请求回来之后，对新旧数据的拼接操作
7. 当下一页数据请求回来之后，需要进行新旧数据的拼接操作
8. 当下一页数据请求回来之后，根据请求的结果，判断所有数据是否已加载完毕
:::

::: info 体验

* **Step.1：在`ArtList`组件的`data`中，声明`loading`和`finished`**

```js
data() {
  return {
    // loading 表示是否正在进行上拉加载的请求
    //   每当触发 List 组件的上拉加载更多时，List 组件会自动把 loading 设为 true
    //   每当下一页的数据请求回来以后，需要程序员手动的把 loading 设为 false，
    //   否则：再次触发上拉加载更多时，不会发起请求！！
    loading: false,

    // finished 表示所有数据是否加载完毕
    //    false 表示还有下一页的数据
    //    true  表示所有数据都已加载完毕
    finished: false
  }
}
```

* **Step.2：在`ArtList`组件的模板结构中，使用`<van-list>`组件将`<art-item>`组件包裹起来**

```html
<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- 循环渲染文章的列表 -->
      <art-item v-for="item in artlist" :key="item.art_id" :article="item"></art-item>
    </van-list>
  </div>
</template>
```

* **Step.3：在`ArtList`组件的`methods`中声明 onLoad 函数**

```js
methods: {
  // 加载更多的数据
  onLoad() {
    console.log('触发了上拉加载更多')
  }
}
```

* **Step.4：为`<van-list>`组件绑定immediate-check属性，防止首次加载时触发`load`事件**

```html
<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false">
      <!-- 循环渲染文章的列表 -->
      <art-item v-for="item in artlist" :key="item.art_id" :article="item"></art-item>
    </van-list>
  </div>
</template>
```

* **Step.5：在`<van-list>`组件的`@load="onLoad"`事件处理函数中，调用`initArtList`方法**

```js
// 加载更多的数据
onLoad() {
  console.log('触发了上拉加载更多')
  this.initArtList()
}
```

* **Step.6：当下一页数据请求回来之后，对新旧数据的拼接操作**

```js
// 初始化文章的列表数据
async initArtList() {
  // 请求 API 接口
  const { data: res } = await getArtListAPI(this.channelId)
  if (res.message === 'OK') {
    // 为时间戳重新赋值
    this.timestamp = res.data.pre_timestamp
    // 1. 上拉加载更多时，应该是“旧数据”在前，“新数据”在后
    this.artlist = [...this.artlist, ...res.data.results]
  }
},
```

* **Step.7：当下一页数据请求回来之后，需要进行新旧数据的拼接操作**

```js
// 初始化文章的列表数据
async initArtList() {
  // 请求 API 接口
  const { data: res } = await getArtListAPI(this.channelId,this.timestamp)
  if (res.message === 'OK') {
    // 为时间戳重新赋值
    this.timestamp = res.data.pre_timestamp
    // 1. 上拉加载更多时，应该是“旧数据”在前，“新数据”在后
    this.artlist = [...this.artlist, ...res.data.results]
    // 2. 重置 loading 为 false
    this.loading = false
  }
},
```

* **Step.8：当下一页数据请求回来之后，根据请求的结果，判断所有数据是否已加载完毕**

```js
// 初始化文章的列表数据
async initArtList() {
  // 请求 API 接口
  const { data: res } = await getArtListAPI(this.channelId,this.timestamp)
  if (res.message === 'OK') {
    // 为时间戳重新赋值
    this.timestamp = res.data.pre_timestamp
    // 1. 上拉加载更多时，应该是“旧数据”在前，“新数据”在后
    this.artlist = [...this.artlist, ...res.data.results]
    // 2. 重置 loading 为 false
    this.loading = false
    // 3. 判断所有的数据是否已加载完毕
    if (res.data.pre_timestamp === null) {
      this.finished = true
    }
  }
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
