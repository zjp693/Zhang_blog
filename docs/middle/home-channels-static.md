# 频道列表页面

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
