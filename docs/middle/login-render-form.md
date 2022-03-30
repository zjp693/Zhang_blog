
# 渲染登录表单

::: tip 目标
这一小节，我们的目标是渲染登录表单
:::

::: warning 步骤

1. 在`Login.vue`组件的`script`节点中，声明`mobile`和`code`
2. 在`Login.vue`组件的模板结构中定义DOM结构
:::

::: info 体验

* **Step.1： 在`Login.vue`组件的`script`节点中，声明`mobile`和`code`**

```js
export default {
  name: 'Login',
  data() {
    return {
      // 登录表单的数据，最终要双向绑定到 form 这个数据对象上
      form: {
        // 用户的手机号
        mobile: '',
        // 登录的密码
        code: ''
      }
    }
  }
}
```

* **Step.2： 在`Login.vue`组件的模板结构中定义DOM结构**

```js
<!-- 登录的表单 -->
<van-form>
  <van-field v-model="form.mobile" type="tel" label="手机号码" placeholder="请输入手机号码" required></van-field>
  <van-field v-model="form.code" type="password" label="登录密码" placeholder="请输入登录密码" required></van-field>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
