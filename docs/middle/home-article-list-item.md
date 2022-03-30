# 封装文章Item项组件

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
7. 在`ArticleList`组件中，通过`v-for`循环渲染`ArtItem`组件时，动态绑定`article`属性
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

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
