# 打包发布

## 初步打包发布

::: tip 目标
这一小节，我们的目标是实现 初步打包发布
:::

::: warning 步骤

1. 在终端下运行打包命令
2. 基于 `Node + Express` 手写一个 `web` 服务器，对外托管 `web` 项目
:::

::: info 体验

* **Step.1: 在终端下运行打包命令**

```bash
npm run build
```

* **Step.2: 基于 `Node + Express` 手写一个 `web` 服务器，对外托管 `web` 项目**

```js
// app.js

// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 将 dist 目录托管为静态资源服务器
app.use(express.static('./dist'))

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3001, function() {
  console.log('Express server running at http://127.0.0.1:3001')
})
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 优化网络传输时的文件体积

::: tip 目标

这一小节，我们的目标是 优化网络传输时的文件体积

> 基于 Express 的 express-compression 中间件，可以在服务器端对文件进行压缩。
> 压缩后文件网络传输的体积会大幅变小，客户端在接收到压缩的文件后会自动进行解压
:::

::: warning 步骤

1. 在终端下运行如下的命令
2. 在 `app.js` 中导入并使用网络传输压缩的中间
3. 最终的效果截图
:::

::: info 体验

* **Step.1: 在终端下运行如下的命令**

```bash
npm i express-compression@1.0.1 -S
```

* **Step.2: 在 `app.js` 中导入并使用网络传输压缩的中间**

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 2. 安装并配置网络传输压缩的中间件
//    注意：必须在托管静态资源配置此中间件
const compression = require('express-compression')
app.use(compression())

// 1. 将 dist 目录托管为静态资源服务器
app.use(express.static('./dist'))

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3001, function() {
  console.log('Express server running at http://127.0.0.1:3001')
})
```

* **Step.3: 最终的效果截图**

![aaa](./images/aaa.png)
:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 生成打包报告

::: tip 目标
这一小节，我们的目标是 通过命令生存打包报告
:::

::: warning 步骤

1. 打开 `package.json` 配置文件，为 `scripts` 节点下的 `build` 命令添加 `--report` 参数
2. 重新运行打包的命令
3. 打包完成后，发现在 `dist` 目录下多了一个名为 `report.html` 的文件。在浏览器中打开此文件，会看到详细的打包报告
:::

::: info 体验

* **Step.1: 打开 `package.json` 配置文件，为 `scripts` 节点下的 `build` 命令添加 `--report` 参数**

```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build --report",
    "lint": "vue-cli-service lint"
  }
}
```

* **Step.2: 重新运行打包的命令**

```bash
npm run build
```

* **Step.3: 打包完成后，发现在 `dist` 目录下多了一个名为 `report.html` 的文件。在浏览器中打开此文件，会看到详细的打包报告**
:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 基于 externals 配置 CDN 加速

::: tip 目标
这一小节，我们的目标是基于externals 配置 CDN 加速

> 未配置 `externals` 之前，项目中使用 `import` 导入的第三方模块，在最终打包时，会被打包合并到一个 js 文件中。最后导致项目体积过大的问题。
> 配置了 `externals` 之后，`webpack` 在进行打包时，会把 `externals` 节点下声明的第三方包排除在外。因此最终打包生成的 js 文件中，不会包含 `externals` 节点下的包。这样就优化了打包后项目的体积。
:::

::: warning 步骤

1. 在项目根目录下找到 `vue.config.js` 配置文件，在里面新增 `configureWebpack` 节点
2. 打开 `public`目录下的 `index.html` 文件，在 `body` 结束标签之前，新增资源引用
3. 重新运行打包发布的命令，对比配置 `externals` 前后文件的体积变化。
:::

::: info 体验

* **Step.1: 在项目根目录下找到 `vue.config.js` 配置文件，在里面新增 `configureWebpack` 节点**

```js
module.exports = {
  // 省略其它代码...

  // 增强 vue-cli 的 webpack 配置项
  configureWebpack: {
    // 打包优化
    externals: {
      // import 时的包名称: window 全局的成员名称
      'highlight.js': 'hljs'
    }
  }
}
```

* **Step.2: 打开 `public`目录下的 `index.html` 文件，在 `body` 结束标签之前，新增资源引用**

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title>
      <%= htmlWebpackPlugin.options.title %>
    </title>
  </head>

  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>

    <!-- 为 window 对象全局挂载 hljs 成员 -->
    <script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
  </body>
</html>
```

* **Step.3: 重新运行打包发布的命令，对比配置 `externals` 前后文件的体积变化。**
:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 完整的 externals 配置项

::: tip 目标
这一小节的目标是，完成完整的externals 配置项
:::

::: warning 步骤

1. 在 `vue.config.js` 配置文件中，找到 `configureWebpack` 下的 `externals`，添加如下的配置项
2. 在 `/public/index.html` 文件的 `<body>` 结束标签之前，添加如下的 js 引用
:::

::: info 体验

* **Step.1: 在 `vue.config.js` 配置文件中，找到 `configureWebpack` 下的 `externals`，添加如下的配置项**

```js
// 增强 vue-cli 的 webpack 配置项
configureWebpack: {
  // 打包优化
  externals: {
    // import 时的包名称: window 全局的成员名称
    'highlight.js': 'hljs',
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    vant: 'vant',
    dayjs: 'dayjs',
    'socket.io-client': 'io',
    popmotion: 'popmotion'
  }

```

* **Step.2: 在 `/public/index.html` 文件的 `<body>` 结束标签之前，添加如下的 js 引用**

```html
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@2.12.12/lib/vant.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1.10.5/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/socket.io-client@4.0.0/dist/socket.io.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popmotion@9.3.5/dist/popmotion.min.js"></script>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
* 【面试题】
:::

## 配置路由懒加载

::: tip 目标
这一小节，我们的目标是配置路由懒加载
:::

::: warning 步骤

1. 运行命令安装 `babel` 插件
2. 修改项目根目录下的 `babel.config.js` 配置文件，新增 `plugins` 节点
3. 在 `/src/router/index.js` 模块中改造每个路由组件的导入方式
:::

::: info 体验

* **Step.1: 运行命令安装 `babel` 插件**

```bash
npm install --save-dev @babel/plugin-syntax-dynamic-import
```

* **Step.2: 修改项目根目录下的 `babel.config.js` 配置文件，新增 `plugins` 节点**

```js
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 实现路由组件按需导入的 babel 插件
  plugins: ['@babel/plugin-syntax-dynamic-import']
}
```

* **Step.3: 在 `/src/router/index.js` 模块中改造每个路由组件的导入方式**

```js
// 导入 Login 组件
// import Login from '@/views/Login/Login.vue'
const Login = () => import('@/views/Login/Login.vue')

// 导入 Main 组件
// import Main from '@/views/Main/Main.vue'
const Main = () => import('@/views/Main/Main.vue')
```

:::
