
# 添加校验规则

::: tip 目标

这一小节，我们的目标是为表单添加校验规则
:::

::: warning 步骤

1. 在`Login.vue`组件的data中声明**登录表单的校验规则对象**，里面包含了**手机号**和**密码**的校验规则
2. 在`Login.vue`组件的模板结构中，为每个`<van-field>`组件应用对应的校验规则
3. 为手机号添加pattern正则进行校验
:::

::: info 体验

* **Step.1： 在`Login.vue`组件的data中声明**登录表单的校验规则对象**，里面包含了**手机号**和**密码**的校验规则**

```js
data() {
  return {
    // 表单的校验规则对象
    rules: {
      // 手机号的校验规则
      mobile: [{ required: true, message: '请填写您的手机号', trigger: 'onBlur' }],
      // 密码的校验规则
      code: [{ required: true, message: '请填写您的密码', trigger: 'onBlur' }]
    }
  }
}
```

* **Step.2： 在`Login.vue`组件的模板结构中，为每个`<van-field>`组件应用对应的校验规则**

```js
// 只有同时满足以下两个验证规则，才能验证通过
mobile: [
  // 必填项的校验规则
  { required: true, message: '请填写您的手机号', trigger: 'onBlur' },
  // 11 位手机号的校验规则
  { pattern: /^1\d{10}$/, message: '请填写正确的手机号', trigger: 'onBlur' }
]
```

* **Step.3： 为手机号添加pattern正则进行校验**

```html
<template>
    <!-- 登录的表单 -->
    <van-form>
      <van-field
        v-model="form.mobile"
        type="tel"
        label="手机号码"
        placeholder="请输入手机号码"
        required
        :rules="rules.mobile"
      ></van-field>
      <van-field
        v-model="form.code"
        type="password"
        label="登录密码"
        placeholder="请输入登录密码"
        required
        :rules="rules.code"
      ></van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
