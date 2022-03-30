# 渲染一级反馈

## 渲染一级反馈结构

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

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 添加一级反馈交互

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
<van-cell 
:title="item.name" 
clickable 
class="center-title" 
v-for="item in actions" 
:key="item.name" 
@click="onCellClick(item.name)" />
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
:::
