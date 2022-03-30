# home-article-pullrefresh

::: tip 目标
这一小节，我们的目标是完成下拉刷新功能，基于 Vant 的 [PullRefresh 下拉刷新](https://vant-contrib.gitee.io/vant/#/zh-CN/pull-refresh)组件，可以轻松实现列表的下拉刷新效果

:::

::: warning 步骤

1. 在 `ArtList.vue` 组件的 `data` 中声明`isLoading`
2. 在 `ArtList.vue` 组件的模板结构中，在 `<van-list>` 之外包裹实现下拉刷新的 `<van-pull-refresh>` 组件
3. 在 `ArtList.vue` 组件的 `methods` 中，声明 `@refresh` 的事件处理函数 `onRefresh`
4. 在 `ArtList.vue` 组件 `methods` 节点下的 `onRefresh` 方法中，调用 `initArtList` 函数请求下拉刷新的数据
5. 改造 `methods` 中的 `initArtList` 函数，通过形参接收调用者传递过来的值
6. 进一步改造 `initArtList` 函数，根据 `isRefresh` 的值，来决定如何拼接请求到的数据
7. 没有更多数据时，禁用下拉刷新的效果
:::

::: info 体验

* **Step.1：在 `ArtList.vue` 组件的 `data` 中声明`isLoading`**

```js
data() {
  return {
    // 省略其它的数据项...

    // 是否正在进行下拉刷新的请求
    isLoading: false
  }
}
```

* **Step.2：在 `ArtList.vue` 组件的模板结构中，在 `<van-list>` 之外包裹实现下拉刷新的 `<van-pull-refresh>` 组件**

```html
<template>
  <div>
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 上拉加载更多 -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false">
        <!-- 循环渲染文章的列表 -->
        <art-item v-for="item in artlist" :key="item.art_id" :article="item"></art-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
```

* **Step.3：在 `ArtList.vue` 组件的 `methods` 中，声明 `@refresh` 的事件处理函数 `onRefresh`**

```js
methods: {
  // 下拉刷新
  onRefresh() {
    console.log('触发了下拉刷新')
  }
}


```

* **Step.4：在 `ArtList.vue` 组件 `methods` 节点下的 `onRefresh` 方法中，调用 `initArtList` 函数请求下拉刷新的数据**

```js
// 下拉刷新
onRefresh() {
  this.initArtList(true)
}
```

* **Step.5：改造 `methods` 中的 `initArtList` 函数，通过形参接收调用者传递过来的值**

```js
methods: {
  // 初始化文章的列表数据
  // 如果 isRefresh 的值为 true，证明是下拉刷新，在最终拼接数据时，应该是“新数据”在前，“旧数据”在后
  // 如果 isRefresh 的值不为 true，证明不是下拉刷新，则拼接数据时，应该是“旧数据”在前，“新数据”在后
  async initArtList(isRefresh) {
    // 省略其它代码...
  }
}
```

* **Step.6：进一步改造 `initArtList` 函数，根据 `isRefresh` 的值，来决定如何拼接请求到的数据**

```js
// 初始化文章的列表数据
async initArtList(isRefresh) {
  // 请求 API 接口
  const { data: res } = await getArtListAPI(this.channelId)
  if (res.message === 'OK') {
    // 为时间戳重新赋值
    this.timestamp = res.data.pre_timestamp
    // 判断是否为下拉刷新
    if (isRefresh) {
      // 下拉刷新
      // 1. “新数据”在前，“旧数据”在后
      this.artlist = [...res.data.results, ...this.artlist]
      // 2. 重置 isLoading 为 false
      this.isLoading = false
    } else {
      // 上拉加载
      // 1. “旧数据”在前，“新数据”在后
      this.artlist = [...this.artlist, ...res.data.results]
      // 2. 重置 loading 为 false
   this.loading = false
    }

    // 3. 判断所有的数据是否已加载完毕
    if (res.data.pre_timestamp === null) {
      this.finished = true
    }
  }
}
```

* **Step.7：没有更多数据时，禁用下拉刷新的效果**

```html
<!-- 下拉刷新 -->
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="finished"></van-pull-refresh>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
