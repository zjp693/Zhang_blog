# 修改用户生日

## 渲染修改生日的动作面板

::: tip 目标
这一小节，我们的目标是 渲染修改生日的动作面板
:::

::: warning 步骤

1. 在 `UserEdit.vue` 组件的 `data` 中定义名为 `showBirthSheet` 的布尔值，用来控制动作面板的显示与隐藏
2. 在 `UserEdit.vue` 组件的模板结构中，和修改用户名称的对话框平级，在它的后面声明修改生日的动作面板
3. 在 `UserEdit.vue` 组件中，为生日的 `<van-cell>` 绑定点击事件处理函数
4. 在 `UserEdit.vue` 组件的 `methods` 中定义名为 `onBirthCellClick` 的方法
:::

::: info 体验

* **Step.1：在 `UserEdit.vue` 组件的 `data` 中定义名为 `showBirthSheet` 的布尔值，用来控制动作面板的显示与隐藏**

```js
data() {
  return {
    // 省略其它数据项...

    // 是否展示修改生日的对话框
    showBirthSheet: false,
  }
}
```

* **Step.2：在 `UserEdit.vue` 组件的模板结构中，和修改用户名称的对话框平级，在它的后面声明修改生日的动作面板**

```html
<!-- 修改生日的动作面板 -->
<van-action-sheet v-model="showBirthSheet">
  xxx
</van-action-sheet>
```

* **Step.3：在 `UserEdit.vue` 组件中，为生日的 `<van-cell>` 绑定点击事件处理函数**

```html
<van-cell title="生日" is-link :value="userProfile.birthday" @click="onBirthCellClick" />
```

* **Step.4：在 `UserEdit.vue` 组件的 `methods` 中定义名为 `onBirthCellClick` 的方法**

```js
// 点击了修改生日的 cell
onBirthCellClick() {
  this.showBirthSheet = true
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 渲染 DatetimePicker 组件

::: tip 目标
这一小节，我们的目标是渲染 DatetimePicker 组件,基于 Vant 的 [DatetimePicker 时间选择](https://vant-contrib.gitee.io/vant/#/zh-CN/datetime-picker#xuan-ze-nian-yue-ri)组件
:::

::: warning 步骤

1. 在 UserEdit.vue 组件的 data 节点下定义如下 3 个数据项
2. 在生日的动作面板中，快速渲染选择年月日的事件选择器组件
3. 在展示选择生日的动作面板之前，为 data 中的 currentDate 赋初始
4. 点击取消按钮时，关闭选择生日的动作面板
5. 点击确认按钮时，会触发日期组件的 confirm 事件
6. 在 confirm 的事件处理函数中，关闭选择生日的动作面板，并打印用户选择的日期
:::

::: info 体验

* **Step.1：在 UserEdit.vue 组件的 data 节点下定义如下 3 个数据项**

```js
data() {
  return {
    // 省略其它数据项...

    // 最小可选日期（0 表示 1月份）
    minDate: new Date(1900, 0, 1),
    // 最大可选日期（11 表示 12月份）
    maxDate: new Date(2050, 11, 31),
    // 当前日期
    currentDate: new Date()
  }
}
```

* **Step.2：在生日的动作面板中，快速渲染选择年月日的事件选择器组件**

```html
<van-action-sheet v-model="showBirthDialog">
  <van-datetime-picker
    v-model="currentDate"
    type="date"
    title="选择年月日"
    :min-date="minDate"
    :max-date="maxDate"
  />
</van-action-sheet>
```

* **Step.3：在展示选择生日的动作面板之前，为 data 中的 currentDate 赋初始**

```js
// 点击了修改生日的 cell
onBirthCellClick() {
  // 如果用户生日的值存在，则初始值为用户的生日；否则为当前日期
  this.currentDate = this.userProfile.birthday ? new Date(this.userProfile.birthday) : new Date()

  // 展示动作面板
  this.showBirthSheet = true
}
```

* **Step.4：点击取消按钮时，关闭选择生日的动作面板**

```html
<!-- 修改生日的动作面板 -->
<van-action-sheet v-model="showBirthSheet">
  <van-datetime-picker v-model="currentDate" type="date" title="选择出生日期" :min-date="minDate" :max-date="maxDate" @cancel="showBirthSheet = false" />
</van-action-sheet>
```

* **Step.5：点击确认按钮时，会触发日期组件的 confirm 事件**

```html
<!-- 修改生日的动作面板 -->
<van-action-sheet v-model="showBirthSheet">
  <van-datetime-picker v-model="currentDate" type="date" title="选择出生日期" :min-date="minDate" :max-date="maxDate" @cancel="showBirthSheet = false" @confirm="updateBirthday" />
</van-action-sheet>
```

* **Step.6：在 confirm 的事件处理函数中，关闭选择生日的动作面板，并打印用户选择的日期**

```js
// 更新用户的生日
updateBirthday(value) {
  // 关闭动作面板
  this.showBirthSheet = false

  // 打印用户选择的日期
  console.log(value)
}
```

:::
::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 基于 dayjs 对时间进行格式化

::: tip 目标
这一小节，我们的目标是基于 dayjs 对时间进行格式化,基于 dayjs 提供的 [format](https://dayjs.fenxianglu.cn/category/display.html#格式化) 方法可以快速对时间进行格式化
:::

::: warning 步骤

1. 在 `UserEdit.vue` 组件中，导入 `dayjs` 模块
2. 在 `updateBirthday` 方法中，调用 `dayjs` 提供的 `.format()` 方法对时间进行格式化处理
:::

::: info 体验

* **Step.1：在 `UserEdit.vue` 组件中，导入 `dayjs` 模块**

```js
// 导入 dayjs
import dayjs from 'dayjs'
```

* **Step.2：在 `updateBirthday` 方法中，调用 `dayjs` 提供的 `.format()` 方法对时间进行格式化处理**

```js
// 更新用户的生日
updateBirthday(value) {
  // 关闭动作面板
  this.showBirthSheet = false

  // 调用 .format() 方法对时间进行格式化
  const dateStr = dayjs(value).format('YYYY-MM-DD')
  // 打印用户选择的日期
  console.log(dateStr)
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::

## 实现修改生日的功能

::: tip 目标
这一小节，我们的目标是实现修改生日的功能
:::

::: warning 步骤

1. 在 `updateBirthday` 方法中，调用修改用户简介信息的 `API` 接口
:::

::: info 体验

* **Step.1：在 `updateBirthday` 方法中，调用修改用户简介信息的 `API` 接口**

```js
// 更新用户的生日
async updateBirthday(value) {
  // 关闭动作面板
  this.showBirthSheet = false

  // 调用 .format() 方法对时间进行格式化
  const dateStr = dayjs(value).format('YYYY-MM-DD')

  // 调用 API 接口，修改用户的生日
  const { data: res } = await updateUserProfileAPI({ birthday: dateStr })

  if (res.message === 'OK') {
    // 重新获取用户的简介信息
    this.initUserProfile()
    // 提示用户更新成功
    this.$notify({ type: 'success', message: '生日修改成功！', duration: 2000 })
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
