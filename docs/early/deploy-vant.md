# 配置Vant组件库

::: tip 目标

这一小节，我们的目标是把Vant组件库 配置到 项目中，后续我们写项目的时候，方便我们搭建项目页面
:::

::: warning 步骤

1. Vant组件库介绍
2. Vant组件库安装
3. 在入口文件导入Vant
4. 在根组件中测试组件

:::

::: info 体验

* **Step. 1：Vant组件库介绍**
  
  Vant 是有赞前端团队开源的移动端组件库，于 2017 年开源，已持续维护 4 年时间。Vant 对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一。
  
  目前 Vant 官方提供了 [Vue 2 版本](https://vant-contrib.gitee.io/vant/#/zh-CN/)、Vue 3 版本和微信小程序版本，并由社区团队维护 React 版本和支付宝小程序版本。
  
* **Step. 2：Vant组件库安装**
  
  ```bash
  npm i vant@2.12.12 -S
  ```
  
* **Step. 3：在入口文件导入Vant**
  
  ```js
  import Vue from 'vue'
  // 导入Vant
  import Vant from 'vant'
  // 导入Vant的样式
  import 'vant/lib/index.css'
  // 把Vant作为插件用在Vue中
  Vue.use(Vant)
  ```
  
* **Step. 4：在根组件中测试组件**
  
  ```html
  <template>
    <div>
      <p>App 根组件</p>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </template>
  ```
  
:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
