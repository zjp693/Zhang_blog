# 获取文章列表的数据

::: tip 目标
  这一小节，我们的目标是请求文章列表数据
:::

::: warning 步骤

  1. 在`homeAPI`模块中,封装名为`getArtListAPI`的接口
  2. 在`ArticleList`组件中，从`homeAPI`模块中按需导入`getArtListAPI`接口
  3. 在`ArticleList`组件的`data`中，声明`articlelist`数组，用来存放文章的列表数据。同时声明一个初始的时间戳`timestamp`
  4. 在`ArticleList`组件中，定义`iniArticleList`的方法，根据`channelId`和t`imestamp`请求对应的文章列表数据
  5. 在`ArticleList`组件的`created`声明周期中，调用`iniArticleList`方法

:::

::: info 体验

* **Step.1：在`homeAPI`模块中,封装名为`getArtListAPI`的接口**

```js
// 根据频道 Id 请求频道下的文章列表数据
export const getArtListAPI = (id, time) => {
  return request.get('/v1_0/articles', {
    params: {
      channel_id: id, // 频道的 Id
      timestamp: time, // 时间戳
    }
  })
}
```

* **Step.2：在`ArticleList`组件中，从`homeAPI`模块中按需导入`getArtListAPI`接口**

```js
// 按需导入 API 接口
import { getArtListAPI } from '@/api/homeAPI'
```

* **Step.3：在`ArticleList`组件的`data`中，声明`articlelist`数组，用来存放文章的列表数据。同时声明一个初始的时间戳`timestamp`**

```js
data() {
  return {
    // 文章列表的数组
    artlist: [],
    // 时间戳。初始的默认值为当前的时间戳
    timestamp: Date.now()
  }
}
```

* **Step.4：在`ArticleList`组件中，定义`iniArticleList`的方法，根据`channelId`和t`imestamp`请求对应的文章列表数据**

```js
methods: {
  // 初始化文章的列表数据
  async initArtList() {
    // 请求 API 接口
    const { data: res } = await getArtListAPI(this.channelId, this.timestamp)
    if (res.message === 'OK') {
      // 为时间戳重新赋值
      this.timestamp = res.data.pre_timestamp
      // 为 artlist 赋值
      this.artlist = res.data.results
    }
  }
}
```

* **Step.5：在`ArticleList`组件的`created`声明周期中，调用`iniArticleList`方法**

```js
created() {
  // 在组件创建的时候，请求文章的列表数据
  this.initArtList()
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
