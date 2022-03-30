# 安装和配置websocket

::: tip 目标
这一小节，我们的目标是安装和配置 `socket.io-client`
:::

::: warning 步骤

1. 在项目中运行如下的命令，安装 `websocket` 客户端相关的包
2. 在 `Chat` 组件中，从 `socket.io-client`导入 `io` 方法
3. 先定义变量 `socket`，用来接收 `io`方法创建的 `socket` 实例
:::

::: info 体验

* **Step.1：在项目中运行如下的命令，安装 `websocket` 客户端相关的包**

```bash
npm i socket.io-client@4.0.0 -S

# 如果 npm 无法成功安装 socket.io-client，可以尝试用 yarn 来装包
# yarn add socket.io-client@4.0.0
```

* **Step.2：在 `Chat` 组件中，从 `socket.io-client`导入 `io` 方法**

```js
// 按需导入 io 方法：调用 io('url') 方法，即可创建 websocket 连接的实例
import { io } from 'socket.io-client'
```

* **Step.3：先定义变量 `socket`，用来接收 `io`方法创建的 `socket` 实例**

```js
let socket = null
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
