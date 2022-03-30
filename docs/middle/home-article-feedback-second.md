# 渲染二级反馈

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

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
