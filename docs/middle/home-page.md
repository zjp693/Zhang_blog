# Home页面

## 渲染Home组件

::: tip 目标
这一小节，我们的目标是渲染Home组件
:::

::: warning 步骤

1. 将资料目录下的`toutiao_logo.png`图片拷贝到项目`assets`资源目录
2. 在`/src/views` 目录下新建`Home`文件夹，并在其下新建`Home.vue`组件
3. 在路由模块中，导入刚才新建的`Home.vue`组件
4. 找到主页`Main.vue`对应的路由规则，遇到`children`数组声明嵌套的子路由规则
5. 在`Main.vue`组件的模板结构中，通过`router-view`声明`Home`的路由占位符

:::

::: info 体验

* **Step. 1：将资料目录下的`toutiao_logo.png`图片拷贝到项目`assets`资源目录**
* **Step. 2：在`/src/views` 目录下新建`Home`文件夹，并在其下新建`Home.vue`组件**

```vue
<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar fixed>
      <!-- 左侧的插槽 -->
      <template #left>
        <img src="../../assets/toutiao_logo.png" alt="logo" class="logo" />
      </template>
      <!-- 右侧的插槽 -->
      <template #right>
        <van-icon name="search" color="white" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
// 组件外层容器的样式
.home-container {
  padding-top: 46px;
  padding-bottom: 50px;
}
// logo 样式
.logo {
  height: 80%;
}
</style>
```

* **Step. 3：在路由模块中，导入刚才新建的`Home.vue`组件**

```js
import Home from '@/views/Home/Home.vue'
```

* **Step. 4：找到主页`Main.vue`对应的路由规则，遇到`children`数组声明嵌套的子路由规则**

```js
const routes = [
  // 带有 name 名称的路由规则，叫做“命名路由”
  { path: '/login', component: Login, name: 'login' },
  {
    path: '/',
    component: Main,
    children: [
      // path 为"空字符串"的子路由规则，叫做"默认子路由"
      { path: '', component: Home, name: 'home' },
    ]
  }
]
```

* **Step. 5：在`Main.vue`组件的模板结构中，通过`router-view`声明`Home`的路由占位符**

```vue
<template>
  <div>
    <!-- Home 和 User 的路由占位符 -->
    <router-view></router-view>

    <!-- 底部的 TabBar -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 渲染频道列表的基本结构

::: tip 目标
这一小节，我们的目标是渲染频道列表,基于 Vant 的[Tab标签页](<https://vant-contrib.gitee.io/vant/#/zh-CN/tab>)组件，可以方便的渲染出频道列表的基本结构。
:::

::: warning 步骤

1. 在`views/Home/Home.vue`组件的模板结构中，声明`DOM`结构
2. 在`Home.vue`组件的`data`中，声明标签页激活项的索引`active`
3. 在`/src/cover.less`中，通过主题定制的方式，修改激活项的颜色值
4. 为`<van-tabs>`组件添加`sticky`属性，实现频道列表的吸顶效果
5. 为`<van-tabs>`组件添加`offset-top`属性，设置吸顶的距离
6. 审查元素的样式，为`tabs`容器设置右`padding,预留出频道管理小图标的位置
7. 和`<van-tabs>`平级，渲染频道管理的`<van-icon>`图标
8. 通过自定义的`plus`类名，设置小图标的定位
:::

::: info 体验

* **Step. 1：在`views/Home/Home.vue`组件的模板结构中，声明`DOM`结构**

```html
<!-- 频道列表的标签页 -->
<van-tabs v-model="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
  <van-tab title="标签 5">内容 5</van-tab>
  <van-tab title="标签 6">内容 6</van-tab>
  <van-tab title="标签 7">内容 7</van-tab>
  <van-tab title="标签 8">内容 8</van-tab>
</van-tabs>
```

* **Step. 2：在`Home.vue`组件的`data`中，声明标签页激活项的索引`active`**

```js
export default {
  name: 'Home',
  data() {
    return {
      // 标签页激活项的索引
      active: 0
    }
  }
}
```

* **Step. 3：在`/src/cover.less`中，通过主题定制的方式，修改激活项的颜色值**

```less
// Tab
@tabs-bottom-bar-color: @blue;
```

* **Step. 4：为`<van-tabs>`组件添加`sticky`属性，实现频道列表的吸顶效果**

```vue
<van-tabs v-model="active" sticky>
  <!-- 省略其它代码 -->
</van-tabs>
```

* **Step. 5：为`<van-tabs>`组件添加`offset-top`属性，设置吸顶的距离**

```vue
<van-tabs v-model="active" sticky offset-top="46px">
  <!-- 省略其它代码 -->
</van-tabs>
```

* **Step. 6：审查元素的样式，为`tabs`容器设置右`padding,预留出频道管理小图标的位置**

```css
// 为 tabs 容器设置右 padding
/deep/ .van-tabs__wrap {
  padding-right: 36px;
  background-color: white;
}
```

* **Step. 7：和`<van-tabs>`平级，渲染频道管理的`<van-icon>`图标**

```vue
<!-- 频道列表的标签页 -->
<van-tabs v-model="active" sticky offset-top="1.22666667rem"></van-tabs>

<!-- 频道管理的小图标 -->
<van-icon name="plus" size="16" class="plus" />
```

* **Step. 8：通过自定义的`plus`类名，设置小图标的定位**

```css
// 频道管理小图标的定位
.plus {
  position: fixed;
  top: 58px;
  right: 10px;
  z-index: 999;
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 渲染频道列表

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

## 封装文章列表组件

::: tip 目标
这一小节，我们的目标是封装文章列表组件
:::

::: warning 步骤

1. 在components目录下，新建ArticleList文件夹，并新建组件
2. 在Home组件中导入ArtList组件
3. 注册ArtList组件
4. 使用ArtList组件
:::

::: info 体验

* **Step.1：在components中，新建ArticleList文件夹，并新建组件**

```vue
<template>
  <div>文章列表组件</div>
</template>

<script>
export default {
  // 大驼峰命名法：每个单词的首字母大写
  name: 'ArticleList'
}
</script>

<style lang="less" scoped></style>
```

* **Step.2：在Home组件中导入ArticleList组件**

```js
import ArticleList from '@/components/ArticleList/ArticleList.vue'
```

* **Step.3：注册ArticleList组件**

```js
components: {
  ArticleList
}
```

* **Step.4：使用ArticleList组件**

```html
<!-- 频道列表的标签页 -->
<van-tabs v-model="active" sticky offset-top="1.22666667rem">
  <!-- 循环渲染用户的频道 -->
  <van-tab v-for="item in userChannel" :key="item.id" :title="item.name">
    <!-- 在每一个用户频道下，渲染出对应的“文章列表组件” -->
    <ArticleList></ArticleList>
  </van-tab>
</van-tabs>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 封装channelled属性

::: tip 目标
这一小节，我们的目标是封装channeled属性
:::

::: warning 步骤

1. 在`ArticleList`组件的`props`节点下，封装`channelId`属性
2. 在`Home`组件中使用`ArticleList`组件时，通过属性绑定必填的`channel-id`属性值
3. 在`ArticleList`组件中，通过插值表达式渲染`props`接收到的`channelId`
:::

::: info 体验

* **Step.1：在`ArticleList`组件的`props`节点下，封装`channelId`属性**

```js
export default {
  name: 'ArtList',
  props: {
    // 频道 Id（小驼峰命名法）
    channelId: {
      type: Number, // 数值类型
      required: true // 必填项
    }
  }
}
```

* **Step.2：在`Home`组件中使用`ArticleList`组件时，通过属性绑定必填的`channel-id`属性值**

```html
<van-tabs v-model="active" sticky offset-top="1.22666667rem">
  <van-tab v-for="item in userChannel" :key="item.id" :title="item.name">
    <!-- 注意：Vue 官方建议在绑定 props 时，把“小驼峰”的属性名，改造成“短横线”的形式使用 -->
    <art-list :channel-id="item.id"></art-list>
  </van-tab>
</van-tabs>
```

* **Step.3：在`ArticleList`组件中，通过插值表达式渲染`props`接收到的`channelId`**

```html
<template>
  <div>文章列表组件 --- {{channelId}}</div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 请求文章列表的数据

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
* 【面试题】
:::

## 封装文章Item项组件

::: tip 目标
这一小节，我们的目标是封装文章Item项组件
:::

::: warning 步骤

1. 在`/src/components/`目录下新建`ArtItem`文件夹，并在其下新建`ArtItem`组件
2. 在`ArticleList`组件中导入、注册、并使用`ArtItem`组件
3. 编写`ArtItem`组件的布局结构
4. 编写`ArtItem`组件的布局样式
5. 在`ArtItem`组件的`props`节点下，声明`article`属性
6. 基于`props`接收到的`article`对象，渲染文章的信息
7. 在`ArticleList`组件中，通过`v-for`指令循环渲染`ArtItem`组件时，动态绑定`article`属性的值
:::

::: info 体验

* **Step.1：在`/src/components/`目录下新建`ArtItem`文件夹，并在其下新建`ArtItem`组件**

```js
<template>
  <div>文章 Item 组件</div>
</template>

<script>
export default {
  name: 'ArtItem'
}
</script>

<style lang="less" scoped></style>
```

* **Step.2：在`ArticleList`组件中导入、注册、并使用`ArtItem`组件**

```js
import ArtItem from '@/components/ArtItem/ArtItem.vue'

components: {
  ArtItem
}
```

```html
<template>
  <div>
    <!-- 循环渲染文章的列表 -->
    <art-item v-for="item in artlist" :key="item.art_id"></art-item>
  </div>
</template>
```

* **Step.3：编写`ArtItem`组件的布局结构**

```html
<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>文章的标题噢</span>
          <!-- 单张图片 -->
          <img src="https://www.escook.cn/vuebase/pics/1.png" alt="" class="thumb">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box">
          <img src="https://www.escook.cn/vuebase/pics/2.png" alt="" class="thumb">
          <img src="https://www.escook.cn/vuebase/pics/2.png" alt="" class="thumb">
          <img src="https://www.escook.cn/vuebase/pics/2.png" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 &nbsp;&nbsp; 0评论 &nbsp;&nbsp; 发布日期</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>
```

* **Step.4：编写`ArtItem`组件的布局样式**

```css
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
```

* **Step.5：在`ArtItem`组件的`props`节点下，声明`article`属性**

```js
export default {
  name: 'ArtItem',
  props: {
    // 文章的信息对象
    article: {
      type: Object, // 数据类型
      required: true // 必填项
    }
  }
}
```

* **Step.6：基于`props`接收到的`article`对象，渲染文章的信息**

```html
<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{article.title}}</span>
          <!-- 单张图片 -->
          <img alt="" class="thumb" v-if="article.cover.type === 1" :src="article.cover.images[0]">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="article.cover.type === 3">
          <img alt="" class="thumb" v-for="(item, index) in article.cover.images" :key="index" :src="item" >
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>{{article.aut_name}} &nbsp;&nbsp; {{article.comm_count}}评论 &nbsp;&nbsp; {{article.pubdate}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>
```

* **Step.7：在`ArticleList`组件中，通过`v-for`指令循环渲染`ArtItem`组件时，动态绑定`article`属性的值**

```html
<!-- 循环渲染文章的列表 -->
<art-item v-for="item in artlist" :key="item.art_id" :article="item"></art-item>
```

:::

## 上拉加载更多

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
* 【面试题】
:::

## 下拉刷新

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

## 格式化时间

::: tip 目标
这一小节，我们的目标是实现一个基于当前时间的过滤器，基于 [day.js](https://dayjs.fenxianglu.cn/) 可以方便的实现相对时间的计算
:::

::: warning 步骤

1. 安装 `day.js` 包：
2. 在 `main.js` 入口文件中导入 `day.js` 相关的模块：
3. 在 `main.js` 入口文件中，配置`插件和语言包`：
4. 在 `main.js` 入口文件中，定义格式化时间的`全局过滤器`：
5. 在 `ArtItem.vue` 组件中，使用`全局过滤器格式化时间`：
:::

::: info 体验

* **Step.1：安装 `day.js` 包**

```bash
npm install dayjs --save
```

* **Step.2：在 `main.js` 入口文件中导入 `day.js` 相关的模块**

```js
// 导入 dayjs 的核心模块
import dayjs from 'dayjs'

// 导入计算相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime'

// 导入中文语言包
import zh from 'dayjs/locale/zh-cn'
```

* **Step.3：在 `main.js` 入口文件中，配置`插件和语言包`**

```js
// 配置“计算相对时间”的插件
dayjs.extend(relativeTime)

// 配置中文语言包
dayjs.locale(zh)
```

* **Step.4：在 `main.js` 入口文件中，定义格式化时间的`全局过滤器`**

```js
// dt 参数是文章的发表时间
Vue.filter('dateFormat', dt => {
  // 调用 dayjs() 得到的是当前的时间
  // .to() 方法的返回值，是计算出来的“相对时间”
  return dayjs().to(dt)
})
```

* **Step.5：在 `ArtItem.vue` 组件中，使用`全局过滤器格式化时间`**

```html
<!-- label 区域的插槽 -->
<template #label>
  <div class="label-box">
    <span>{{article.aut_name}} &nbsp;&nbsp; {{article.comm_count}}评论 &nbsp;&nbsp; {{article.pubdate | dateFormat}}</span>
    <!-- 关闭按钮 -->
    <van-icon name="cross" />
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 文章列表图片的懒加载

::: tip 目标
这一小节，我们的目标是实现文章列表图片的懒加载，基于 Vant 的 [Lazyload 懒加载](https://vant-contrib.gitee.io/vant/#/zh-CN/lazyload)，可以轻松实现列表中图片的懒加载效果
:::

::: warning 步骤

1. 在 `main.js` 入口文件中，按需导入 `Lazyload` 指令
2. 在`main.js` 中将 `Lazyload` 注册为全局可用的指令
3. 在 `ArtItem.vue` 组件中，删除 `<img>` 标签的 `src 属性`，并应用 `v-lazy 指令`，指令的值是要展示的图片地址
:::

::: info 体验

* **Step.1：在 `main.js` 入口文件中，按需导入 `Lazyload` 指令**

```js
import Vant, { Lazyload } from 'vant'
```

* **Step.2：在`main.js` 中将 `Lazyload` 注册为全局可用的指令**

```js
Vue.use(Lazyload)
```

* **Step.3：在 `ArtItem.vue` 组件中，删除 `<img>` 标签的 `src 属性`，并应用 `v-lazy 指令`，指令的值是要展示的图片地址**

```html
<!-- 单张图片 -->
<img alt="" class="thumb" v-if="article.cover.type === 1" v-lazy="article.cover.images[0]">

<!-- 三张图片 -->
<div class="thumb-box" v-if="article.cover.type === 3">
  <img alt="" class="thumb" v-for="(item, index) in article.cover.images" :key="index" v-lazy="item">
</div>
```

:::

## 展示反馈的动作画板

::: tip 目标
这一小节，我们的目标是展示反馈的动作面板，基于 Vant 的 [ActionSheet 动作面板](https://vant-contrib.gitee.io/vant/#/zh-CN/action-sheet)组件，可以方便的渲染出反馈操作对应的区域
:::

::: warning 步骤

1. 在 `/src/components/ArtItem/` 目录下的 `ArtItem.vue` 组件中，声明动作面板对应的 DOM 结构
2. 在 `ArtItem.vue` 组件的 `data` 中声明布尔值 show，用来控制动作面板的显示与隐藏
3. 在点击 `ArtItem.vue` 组件中的“关闭按钮”时，展示反馈的动作面板
:::

::: info 体验

* **Step.1：在 `/src/components/ArtItem/` 目录下的 `ArtItem.vue` 组件中，声明动作面板对应的 DOM 结构**

```html
<!-- 文章的信息 -->
<van-cell></van-cell>

<!-- 反馈的动作面板 -->
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false">
  <div class="content">内容</div>
</van-action-sheet>
```

* **Step.2：在 `ArtItem.vue` 组件的 `data` 中声明布尔值 show，用来控制动作面板的显示与隐藏**

```js
data() {
  return {
    // 是否展示反馈面板
    show: false
  }
}
```

* **Step.3：在点击 `ArtItem.vue` 组件中的“关闭按钮”时，展示反馈的动作面板**

```html
<!-- 关闭按钮 -->
<!-- 通过 .stop 事件修饰符，阻止点击事件的冒泡 -->
<van-icon name="cross" @click.stop="show = true" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::
]

## 渲染一级反馈面板的结构

::: tip 目标
这一小节，我们的目标是 渲染一级反馈面板的结构，基于 Vant 的 [Cell 单元格](https://vant-contrib.gitee.io/vant/#/zh-CN/cell)组件，可以快速渲染出一级反馈面板的可选项
:::

::: warning 步骤

1. 在 `ArtItem.vue` 组件的反馈动作面板中，声明如下的**一级反馈面板**可选项
2. 在 `ArtItem.vue` 组件的 `<style>` 节点下，声明 `center-title` 类名
3. 在 `ArtItem.vue` 组件的 `data` 中声明如下的 `actions` 可选项数组
4. 基于 `v-for` 指令，循环渲染一级反馈面板的可选项列表
:::

::: info 体验

* **Step.1：在 `ArtItem.vue` 组件的反馈动作面板中，声明如下的**一级反馈面板**可选项**

```html
<!-- 反馈的动作面板 -->
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false">
  <!-- 第一级反馈面板 -->
  <div>
    <van-cell title="aaa" clickable class="center-title" />
    <van-cell title="aaa" clickable class="center-title" />
    <van-cell title="aaa" clickable class="center-title" />
  </div>
</van-action-sheet>
```

* **Step.2：在 `ArtItem.vue` 组件的 `<style>` 节点下，声明 `center-title` 类名**

```css
.center-title {
  text-align: center;
}
```

* **Step.3：在 `ArtItem.vue` 组件的 `data` 中声明如下的 `actions` 可选项数组**

```js
data() {
  return {
    // 第一个面板的可选项列表
    actions: [
      { name: '不感兴趣' },
      { name: '反馈垃圾内容' },
      { name: '拉黑作者' }
    ]
  }
}
```

* **Step.4：基于 `v-for` 指令，循环渲染一级反馈面板的可选项列表**

```html
<!-- 反馈的动作面板 -->
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false">
  <!-- 第一级反馈面板 -->
  <div>
    <!-- 循环渲染可选项 -->
    <van-cell :title="item.name" clickable class="center-title" v-for="item in actions" :key="item.name" />
  </div>
</van-action-sheet>
```

:::

## 点击一级选项

::: tip 目标
这一小节，我们的目标是给一级选项添加JavaScript交互效果...
:::

::: warning 步骤

1. 为一级选项绑定名为 `onCellClick` 的点击事件处理函数，同时把当前选项的 `name` 作为参数，传递给事件处理函数
2. 在 `ArtItem.vue` 组件的 `methods` 节点下，声明 `onCellClick` 方法
:::

::: info 体验

* **Step.1：为一级选项绑定名为 `onCellClick` 的点击事件处理函数，同时把当前选项的 `name` 作为参数，传递给事件处理函数**

```html
<!-- 一级选项 -->
<van-cell :title="item.name" clickable class="center-title" v-for="item in actions" :key="item.name" @click="onCellClick(item.name)" />
```

* **Step.2：在 `ArtItem.vue` 组件的 `methods` 节点下，声明 `onCellClick` 方法**

```js
methods: {
  // 一级选项的点击事件处理函数
  onCellClick(name) {
    if (name === '不感兴趣') {
      console.log('不感兴趣')
      this.show = false

    } else if (name === '拉黑作者') {
      console.log('拉黑作者')
      this.show = false

    } else if (name === '反馈垃圾内容') {
      // TODO：展示二级反馈面板
    }
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 渲染二级反馈面板的结构

::: tip 目标
这一小节，我们的目标是渲染二级反馈面板的结构
:::

::: warning 步骤

1. 在 `ArtItem.vue` 组件的反馈动作面板中，声明二级反馈面板
2. 在 `ArtItem.vue` 组件的 data 节点下，定义名为 `isFirst` 的布尔值，用来控制是否展示第一个面
3. 在 `ArtItem.vue` 组件中的反馈动作面板中，结合 `v-if` 与 `v-else` 指令，按需展示对应的反馈面板
4. 点击一级反馈面板中的反馈垃圾内容选项时，将 `isFirst` 设置为 `false`，从而展示二级反馈面板
5. 当点击二级反馈面板中的返回时，将 `isFirst` 设置为 `true`，从而展示一级反馈面板
6. 监听 `<van-action-sheet>` 的 `@closed` 事件，当动作面板完全关闭且结束动画以后，将 `isFirst` 设置为 `true`。保证下次打开动作面板时，默认展示第一个反馈面板
:::

::: info 体验

* **Step.1：在 `ArtItem.vue` 组件的反馈动作面板中，声明二级反馈面板**

```html
<!-- 一级选项 -->
<van-cell :title="item.name" clickable class="center-title" v-for="item in actions" :key="item.name" @click="onCellClick(item.name)" />
```

* **Step.2：在 `ArtItem.vue` 组件的 data 节点下，定义名为 `isFirst` 的布尔值，用来控制是否展示第一个面**

```js
methods: {
  // 一级选项的点击事件处理函数
  onCellClick(name) {
    if (name === '不感兴趣') {
      console.log('不感兴趣')
      this.show = false

    } else if (name === '拉黑作者') {
      console.log('拉黑作者')
      this.show = false

    } else if (name === '反馈垃圾内容') {
      // TODO：展示二级反馈面板
    }
  }
}
```

* **Step.3：在 `ArtItem.vue` 组件中的反馈动作面板中，结合 `v-if` 与 `v-else` 指令，按需展示对应的反馈面板**

```html
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false">
  <!-- 第一级反馈面板 -->
  <div v-if="isFirst">
    <van-cell :title="item.name" clickable class="center-title" v-for="item in actions" :key="item.name" @click="onCellClick(item.name)" />
  </div>
  <!-- 第二级反馈面板 -->
  <div v-else>
    <van-cell title="返回" clickable title-class="center-title" />
  </div>
</van-action-sheet>
```

* **Step.4：点击一级反馈面板中的反馈垃圾内容选项时，将 `isFirst` 设置为 `false`，从而展示二级反馈面板**

```js
else if (name === '反馈垃圾内容') {
  // TODO：展示二级反馈面板
  this.isFirst = false
}
```

* **Step.5：当点击二级反馈面板中的返回时，将 `isFirst` 设置为 `true`，从而展示一级反馈面板**

```html
<!-- 第二级反馈面板 -->
<div v-else>
  <van-cell title="返回" clickable title-class="center-title" @click="isFirst = true" />
</div>
```

* **Step.6：监听 `<van-action-sheet>` 的 `@closed` 事件，当动作面板完全关闭且结束动画以后，将 `isFirst` 设置为 `true`。保证下次打开动作面板时，默认展示第一个反馈面板**

```html
<!-- 反馈的动作面板 -->
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false" @closed="isFirst = true">
  <!-- 省略其它代码 -->
</van-action-sheet>
```

:::
::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 渲染二级反馈面板的数据

::: tip 目标
这一小节，我们的目标是渲染二级反馈面板的数据
:::

::: warning 步骤

1. 在 `/src/api/` 目录下，新建 `reports.js` 模块，用来定义第二个反馈面板要用到的列
2. 在 `ArtItem.vue` 组件中，导入 `/src/api/reports.js` 模块
3. 并将导入得到的 `reports` 数组挂载为 `ArtItem.vue` 组件的 `data` 数据，供模板结构进行 `v-for`循环的渲染
4. 在 `ArtItem.vue` 组件的模板结构中，循环渲染**二级反馈面板**的可选项列表
:::

::: info 体验

* **Step.1：在 `/src/api/` 目录下，新建 `reports.js` 模块，用来定义第二个反馈面板要用到的列**

```js
// 以模块的方式导出"举报文章"时，后端接口约定的举报类型
const reports = [
  {
    type: 0,
    label: '其它问题'
  },
  {
    type: 1,
    label: '标题夸张'
  },
  {
    type: 2,
    label: '低俗色情'
  },
  {
    type: 3,
    label: '错别字多'
  },
  {
    type: 4,
    label: '旧闻重复'
  },
  {
    type: 6,
    label: '内容不实'
  },
  {
    type: 8,
    label: '侵权'
  },
  {
    type: 5,
    label: '广告软文'
  },
  {
    type: 7,
    label: '涉嫌违法犯罪'
  }
]
export default reports
```

* **Step.2：在 `ArtItem.vue` 组件中，导入 `/src/api/reports.js` 模块**

```js
import reports from '@/api/reports'
```

* **Step.3：并将导入得到的 `reports` 数组挂载为 `ArtItem.vue` 组件的 `data` 数据，供模板结构进行 `v-for`循环的渲染**

```js
data() {
  return {
    // 省略其它数据项...

    // 第二个面板的可选项列表，数组中每一项的格式 { type, label }
    reports
  }
}
```

* **Step.4：在 `ArtItem.vue` 组件的模板结构中，循环渲染**二级反馈面板**的可选项列表**

```html
<!-- 第二级反馈面板 -->
<div v-else>
  <van-cell title="返回" clickable title-class="center-title" @click="isFirst = true" />
  <van-cell :title="item.label" clickable title-class="center-title" v-for="item in reports" :key="item.type" />
</div>
```

:::

## 指定动作面板的挂载位置

::: tip 目标
这一小节，我们的目标是指定动作面板的挂载位置
:::

::: warning 步骤

1. 默认情况下，我们是在 `ArtItem.vue` 组件中使用的 `<van-action-sheet>` 组件，因此动作面板的 `DOM` 结构会被渲染到 `List` 列表组件 内部：
    * **导致的问题**：动作面板中的内容上下滑动时，会导致 `List 列表组件的` **下拉刷新**

2. 解决方案：把 `ActionList` 组件，通过 `get-container` 属性，挂载到 `body` 元素下

```html
<van-action-sheet v-model="show" cancel-text="取消" :closeable="false" @closed="isFirst = true" get-container="body">
  <!-- 省略其它代码 -->
</van-action-sheet>
```

:::

## 将文章设置为不感兴趣

::: tip 目标
这一小节，我们的目标是将文章设置为不感兴趣
:::

::: warning 步骤

1. 在`/src/api/homeAPI.js` 模块中，定义名为 `dislikeArticleAPI` 的方法，用来将指定 id 的文章设置为不感兴趣
2. 在 `ArtItem.vue` 组件中，按需导入 `API` 接口
3. 在 `ArtItem.vue` 组件中，基于 props 中的 `article` 文章对象，定义名为 `artId` 的计算属性
4. 在 `onCellClick` 处理函数中，调用 API 接口，将指定 Id 的文章设置不感兴趣
:::

::: info 体验

* **Step.1：在`/src/api/homeAPI.js` 模块中，定义名为 `dislikeArticleAPI` 的方法，用来将指定 id 的文章设置为不感兴趣**

```js
// 将文章设置为不感兴趣（形参 id 是文章的 id）
export const dislikeArticleAPI = id => {
  return request.post('/v1_0/article/dislikes', {
    target: id
  })
}
```

* **Step.2：在 `ArtItem.vue` 组件中，按需导入 `API` 接口**

```js
// 按需导入 API 接口
import { dislikeArticleAPI } from '@/api/homeAPI.js'
```

* **Step.3：在 `ArtItem.vue` 组件中，基于 props 中的 `article` 文章对象，定义名为 `artId` 的计算属性**

```js
props: {
  // 文章的信息对象
  article: {
    type: Object, // 数据类型
    required: true // 必填项
  }
},

computed: {
  // 文章 Id 的计算属性
  artId() {
    // 注意：文章对象的 art_id 是大数对象，需要调用 .toString() 方法转换为字符串形式
    return this.article.art_id.toString()
  }
}
```

* **Step.4：在 `onCellClick` 处理函数中，调用 API 接口，将指定 Id 的文章设置不感兴趣**

```js
// 一级选项的点击事件处理函数
async onCellClick(name) {
  if (name === '不感兴趣') {
    // 调用 API 接口，将文章设置为不感兴趣
    const { data: res } = await dislikeArticleAPI(this.artId)
    if (res.message === 'OK') {
      // TODO：炸楼的操作
    }
    this.show = false
  }

  // 省略其它代码...
}
```

:::

## 从列表中移除不感兴趣的文章

::: tip 目标
这一小节，我们的目标是从列表中移除不感兴趣的文章
:::

::: warning 步骤

1. 在 `ArtItem.vue` 组件中，通过 `this.$emit()` 触发自定义事件，把要删除的文章 Id 传递给父组件
2. 在 `ArtList.vue` 组件中使用 `ArtItem.vue` 组件时，监听 `ArtItem.vue` 组件的 `@remove-article` 事件
3. 在 `ArtList.vue` 组件的 methods 中，声明 `removeArticle` 方法
:::

::: info 体验

* **Step.1：在 `ArtItem.vue` 组件中，通过 `this.$emit()` 触发自定义事件，把要删除的文章 Id 传递给父组件**

```js
// 一级选项的点击事件处理函数
async onCellClick(name) {
  if (name === '不感兴趣') {
    // 调用 API 接口，将文章设置为不感兴趣
    const { data: res } = await dislikeArticleAPI(this.artId)
    if (res.message === 'OK') {
      // TODO：炸楼的操作，触发自定义的事件，将文章 id 发送给父组件
      this.$emit('remove-article', this.artId)
    }
    this.show = false
  }

  // 省略其它代码...
}
```

* **Step.2：在 `ArtList.vue` 组件中使用 `ArtItem.vue` 组件时，监听 `ArtItem.vue` 组件的 `@remove-article` 事件**

```html
<!-- 循环渲染文章的列表 -->
<art-item
   v-for="item in artlist"
   :key="item.art_id.toString()"
   :article="item"
   @remove-article="removeArticle"
  >
</art-item>
```

* **Step.3：在 `ArtList.vue` 组件的 methods 中，声明 `removeArticle` 方法**

```js
methods: {
  // 从文章列表中移除指定 id 的文章
  removeArticle(id) {
    // 对原数组进行 filter 方法的过滤
    this.artlist = this.artlist.filter(item => item.art_id.toString() !== id)
 }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 炸楼之后防止上拉加载不生效

::: tip 目标
这一小节，我们的目标是解决炸楼之后防治上拉加载不生效的问题，具体来讲就是： 炸楼之后，如果文章列表的数据不足以撑满整个屏幕，会导致上拉加载和下拉刷新不生效的问题，解决方案： 每次炸楼之后，判断剩余数据的文章数量是否小于 10，如果小于 10，则主动请求下一页的数据
:::

::: warning 步骤

1. 在 `ArtList.vue` 组件的 methods 节点下，改造 `removeArticle` 方法
:::

::: info 体验

* **Step.1： 在 `ArtList.vue` 组件的 methods 节点下，改造 `removeArticle` 方法**

```js
methods: {
  // 从文章列表中移除指定 id 的文章
  removeArticle(id) {
    // 1. 炸楼操作
    this.artlist = this.artlist.filter(item => item.art_id.toString() !== id)

    // 2. 判断剩余数据的文章数量是否小于 10
    if (this.artlist.length < 10) {
      // 主动请求下一页的数据
      this.initArtList()
    }
  }
}
```

:::
::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 实现举报文章的功能

::: tip 目标
这一小节，我们的目标是实现举报文章的功能
:::

::: warning 步骤

1. 在 `/sr/api/homeAPI.js` 模块中，定义 `reportArticleAPI` 的方法，用来实现举报文章的功能
2. 在 `ArtItem.vue` 组件中，按需导入举报文章的 `API`接口
3. 在 `ArtItem.vue` 组件中，为二级反馈面板中的选项，绑定点击事件处理函数，将举报的类型作为参数，传递到事件处理函数中
4. 在 `ArtItem.vue`组件的 methods 节点下，定义名为 `reportArticle` 的点击事件处理函数
:::

::: info 体验

* **Step.1：在 `/sr/api/homeAPI.js` 模块中，定义 `reportArticleAPI` 的方法，用来实现举报文章的功能**

```js
// 举报文章的 API
export const reportArticleAPI = (target, type) => {
  return request.post('/v1_0/article/reports', {
    target, // 文章的 Id
    type // 举报的类型
  })
}
```

* **Step.2：在 `ArtItem.vue` 组件中，按需导入举报文章的 `API`接口**

```js
// 按需导入 API 接口
import { dislikeArticleAPI, reportArticleAPI } from '@/api/homeAPI.js'
```

* **Step.3：在 `ArtItem.vue` 组件中，为二级反馈面板中的选项，绑定点击事件处理函数，将举报的类型作为参数，传递到事件处理函数中**

```html
<!-- 第二级反馈面板 -->
<div v-else>
  <van-cell title="返回" clickable title-class="center-title" @click="isFirst = true" />
  <van-cell :title="item.label" clickable title-class="center-title" v-for="item in reports" :key="item.type" @click="reportArticle(item.type)" />
</div>
```

* **Step.4：在 `ArtItem.vue`组件的 methods 节点下，定义名为 `reportArticle` 的点击事件处理函数**

```js
methods: {
  // 举报文章（形参 type 是举报的类型值）
  async reportArticle(type) {
    // 1. 发起举报文章的请求
    const { data: res } = await reportArticleAPI(this.artId, type)
    if (res.message === 'OK') {
      // 2. 炸楼操作，触发自定义事件，把文章 Id 发送给父组件
      this.$emit('remove-article', this.artId)
    }
    // 3. 关闭动作面板
    this.show = false
  }
}
```

:::
