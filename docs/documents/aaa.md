# nuxt.js 介绍

- 基于 Vue.js 的通用应用框架。
- SSR 服务端渲染。在服务端生成 html 发送至客户端
- 特性：异步数据加载、中间件支持、布局支持等。
- 优点：有利于 SEO，加载速度快，自动配置路由
- 依赖 node 和 npm npx（npx 在 NPM 版本 5.2.0 默认安装）

SSR 的优势

更利于 SEO。
服务端渲染返回给客户端的是已经获取了异步数据并执行 `JavaScript` 脚本的最终 HTML，网络爬中就可以抓取到完整页面的信息。

更利于首屏渲染
首屏的渲染是 node 发送过来的 html 字符串，并不依赖于 js 文件了，这就会使用户更快的看到页面的内容。

SSR 的局限

服务端压力较大
本来是通过客户端完成渲染，现在统一到服务端 node 服务去做。尤其是高并发访问的情况，会大量占用服务端 CPU 资源；

开发条件受限
在服务端渲染中，只会执行到 componentDidMount 之前的生命周期钩子，因此项目引用的第三方的库也不可用其它生命周期钩子，这对引用库的选择产生了很大的限制；

mvc

```
MVC模式的意思是，软件可以分成三个部分。
视图（View）：用户界面。
控制器（Controller）：业务逻辑
模型（Model）：数据保存

View 持有了Controller，把事件传递给Controller，Controller 由此去触发Model层的事件，Model更新完数据（网络或者本地数据）之后触发View的更新事件
```

​ mvvm

```
又称状态机制，View和ViewModel 是进行绑定的，改变ViewModel 就会直接作用到View视图上，而View 会把事件传递给ViewModel,ViewModel去对Model进行操作并接受更新。
```

```
又称状态机制，View和ViewModel 是进行绑定的，改变ViewModel 就会直接作用到View视图上，而View 会把事件传递给ViewModel,ViewModel去对Model进行操作并接受更新。
```

```
MVVM 的优点
1、主要目的是分离视图（View）和模型（Model）
2、降低代码耦合，提高视图或者逻辑的复用。
3、提高了模块的可测试性
```

koa 与 express 的区别

```vue
Express是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，主要基于 Connect
中间件，并且自身封装了路由、视图处理等功能，使用人数众多。 Koa 相对更为年轻， 是
Express 原班人马基于 ES7
新特性重新开发的框架，框架自身不包含任何中间件，很多功能需要借助第三方中间件解决，但是由于其基于
ES7 async 特性的异步流程控制，解决了 "callback hell" 和麻烦的错误处理问题
```

```bash
npm i express
```

```js
let vm = createApp({
  data() {
    return { a: 1, b: 2 };
  },
});
```

```vue{7}
<template>
  <p></p>
</template>
<script>
let vm = createApp({
  data() {
    return { a: 1, b: 2 };
  },
});
</script>
```
