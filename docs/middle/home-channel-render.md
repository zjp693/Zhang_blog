
# 渲染频道管理

::: tip 目标
这一小节，我们的目标是基于 Vant 提供的 [Popup 弹出层](https://vant-contrib.gitee.io/vant/#/zh-CN/popup)组件，方便地实现频道管理的弹出层效果
:::

::: warning 步骤

1. 在`Home`组件中，在频道管理的小图标下面，基于 `<van-popup>` 渲染出频道管理的弹出层
2. 在`Home`组件的 `data` 中定义布尔值 `show`，用来控制弹出层的显示与隐藏
3. 在点击频道管理的小图标时，将 `show` 设置为 `true`，从而展示出频道管理的弹出层
4. 为 `<van-popup>` 组件绑定 `:close-on-click-overlay="false"` 属性，从而防止点击遮罩层时，弹出层自动关闭的效果
5. 在`Home`组件中，对 `<van-popup>`组件的内容节点进行改造，将准备好的`DOM`结构替换到 `<van-popup>` 组件的内容节点之中
6. 对`DOM`布局结构进行样式上的美化
:::

::: info 体验

* **Step.1：在`Home`组件中，在频道管理的小图标下面，基于 `<van-popup>` 渲染出频道管理的弹出层**

```html
<!-- 频道管理的小图标 -->
<van-icon name="plus" size="16" class="plus" @click="show = true" />

<!-- 频道管理的弹出层 -->
<van-popup v-model="show">内容</van-popup>
```

* **Step.2：在`Home`组件的 `data` 中定义布尔值 `show`，用来控制弹出层的显示与隐藏**

```js
data() {
  return {
    // 省略其它数据项...

    // 控制频道管理弹出层的展示与隐藏
    show: false
  }
}
```

* **Step.3：在点击频道管理的小图标时，将 `show` 设置为 `true`，从而展示出频道管理的弹出层**

```html
<!-- 频道管理的小图标 -->
<van-icon name="plus" size="16" class="plus" @click="show = true" />
```

* **Step.4：为 `<van-popup>` 组件绑定 `:close-on-click-overlay="false"` 属性，从而防止点击遮罩层时，弹出层自动关闭的效果**

```html
<!-- 频道管理的弹出层 -->
<van-popup v-model="show" :close-on-click-overlay="false">内容</van-popup>
```

* **Step.5：在`Home`组件中，对 `<van-popup>`组件的内容节点进行改造，将准备好的`DOM`结构替换到 `<van-popup>` 组件的内容节点之中**

```html
<div class="popup-container">
  <!-- 弹出层的头部区域 -->
  <van-nav-bar title="频道管理">
    <template #right>
      <van-icon name="cross" size="14" color="white" @click="show = false" />
    </template>
  </van-nav-bar>

  <!-- 弹出层的主体区域 -->
  <div class="pop-body">
    <!-- 我的频道 -->
    <div class="my-channel-box">
      <div class="channel-title">
        <div>
          <span class="title-bold">已添加频道：</span>
          <span class="title-gray">点击进入频道</span>
        </div>
        <span class="btn-edit">编辑</span>
      </div>
      <!-- 我的频道列表 -->
      <van-row type="flex">
        <van-col span="6" v-for="item in userChannel" :key="item.id">
          <!-- 用户的频道 Item 项 -->
          <div class="channel-item van-hairline--surround">{{item.name}}</div>
        </van-col>
      </van-row>
    </div>

    <!-- 分隔线 -->
    <div class="van-hairline--top sp-line"></div>

    <!-- 更多频道 -->
    <div class="more-channel-box">
      <div class="channel-title">
        <div>
          <span class="title-bold">可添加频道：</span>
          <span class="title-gray">点击添加频道</span>
        </div>
      </div>
      <!-- 更多频道列表 -->
      <van-row type="flex">
        <van-col span="6" v-for="item in userChannel" :key="item.id">
          <div class="channel-item van-hairline--surround">{{item.name}}</div>
        </van-col>
      </van-row>
    </div>
  </div>
</div>
```

* **Step.6：对`DOM`布局结构进行样式上的美化**

```css
.van-popup,
.popup-container {
  background-color: transparent;
  height: 100%;
  width: 100%;
}

.popup-container {
  display: flex;
  flex-direction: column;
}

.pop-body {
  flex: 1;
  overflow: scroll;
  padding: 8px;
  background-color: white;
}

.my-channel-box,
.more-channel-box {
  .channel-title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 28px;
    padding: 0 6px;
    .title-bold {
      font-weight: bold;
    }
    .title-gray {
      color: gray;
      font-size: 12px;
    }
  }
}

.btn-edit {
  border: 1px solid #a3a2a2;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
  border-radius: 6px;
  font-size: 12px;
}

.channel-item {
  font-size: 12px;
  text-align: center;
  line-height: 36px;
  background-color: #fafafa;
  margin: 6px;
}

.cross-badge {
  position: absolute;
  right: -3px;
  top: 0;
  border: none;
}

.sp-line {
  margin: 10px 0 20px 0;
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
