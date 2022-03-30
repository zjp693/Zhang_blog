# 配置屏幕适配

::: tip 目标

这一节，我们的目标是 使用插件帮我们把布局时写的像素(px)单位自动转换为`rem`单位
:::

::: warning 步骤

1. 安装插件 `postcss-pxtorem` 和 `lib-flexible`
2. 配置 `postcss-pxtorem`
3. 在入口文件中导入 `amfe-flexible`
:::

::: info 体验

* **Step. 1：安装插件 `postcss-pxtorem` 和 `lib-flexible`**

  ```bash
  # postcss-pxtorem 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
  npm i postcss-pxtorem@5.1.1 -D
  # lib-flexible 用于动态设置 rem 基准值
  npm i amfe-flexible@2.2.1 -S
  ```

* **Step. 2：在`postcss.config.js`配置 `postcss-pxtorem`**

  ```js
  module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5, // 根节点的 font-size 值
        propList: ['*'] // 要处理的属性列表，* 代表所有属性
      }
    }
  }
  ```

* **Step. 3：在入口文件中导入 `amfe-flexible`**

  ```js
  import 'amfe-flexible'
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
