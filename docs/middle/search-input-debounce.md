# 输入框防抖

> 节流：单位时间内，重复的操作只会触发 1 次
> 防抖：频繁触发某个操作时，仅触发最后 1 次

::: tip 目标
这一小节，我们的目标是实现输入框的防抖
:::

::: warning 步骤

  1. 在 `Search.vue` 组件的 `data` 节点下，声明 `timerId`，用来存储延时器的 id
  2. 监听搜索组件的 `input` 输入事件
  3. 在 `Search.vue` 组件的 `methods` 中声明 `onInput` 方法
  4. 在 `onInput` 方法中，将 `console.log(this.kw)` 放到延时器中
  5. 在触发 `onInput` 方法时，立即清除掉上次的延时器，从而实现输入框的防抖操作
  6. 如果触发 onInput 事件时 this.kw 的值为空字符串，则不开启延时器

:::

::: info 体验

* **Step.1：在 `Search.vue` 组件的 `data` 节点下，声明 `timerId`，用来存储延时器的 id**

```js
data() {
  return {
    // 延时器的 Id
    timerId: null
  }
}
```

* **Step.2：监听搜索组件的 `input` 输入事件**

```html
<!-- 搜索组件 -->
<van-search v-model.trim="kw" placeholder="请输入搜索关键词" background="#007BFF" shape="round" ref="searchRef" @input="onInput" />
```

* **Step.3：在 `Search.vue` 组件的 `methods` 中声明 `onInput` 方法**

```js
methods: {
  // 搜索组件的输入事件
  onInput() {
    // 每次触发，都会打印 kw 的值
    console.log(this.kw)
  }
}
```

* **Step.4：在 `onInput` 方法中，将 `console.log(this.kw)` 放到延时器中**

```js
methods: {
  // 搜索组件的输入事件
  onInput() {
    // 1. 开启延时器，将延时器的 id 存储到 this.timerId 中
    this.timerId = setTimeout(() => {
      console.log(this.kw)
    }, 500)
  }
}
```

* **Step.5：在触发 `onInput` 方法时，立即清除掉上次的延时器，从而实现输入框的防抖操作**

```js
methods: {
  // 搜索组件的输入事件
  onInput() {
    // 2. 清除上次的延时器
    clearTimeout(this.timerId)

    // 1. 开启延时器，将延时器的 id 存储到 this.timerId 中
    this.timerId = setTimeout(() => {
      console.log(this.kw)
    }, 500)
  }
}
```

* **Step.6：如果触发 onInput 事件时 this.kw 的值为空字符串，则不开启延时器**

```js
methods: {
  // 搜索组件的输入事件
  onInput() {
    // 2. 清除上次的延时器
    clearTimeout(this.timerId)

    // 3. 如果输入的内容为空，则 return 出去，不开启延时器
    if (this.kw.length === 0) return

    // 1. 开启延时器，将延时器的 id 存储到 this.timerId 中
    this.timerId = setTimeout(() => {
      console.log(this.kw)
    }, 500)
  }
}

```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
