# 安装和配置Axios

::: tip 目标
这一小节，我们的目标是对Axios进行二次封装，这样可以使得项目维护接口非常方便...
:::

::: warning 步骤

1. 安装axios
2. axios基础配置
3. 声明API接口
:::

::: info 体验

* **Step. 1：安装axios**

  ```bash
  npm i axios -S
  ```

* **Step. 2：axios基础配置**

  ```js
  import axios from 'axios'

  // 调用 axios.create() 方法，创建 axios 的实例对象
  const instance = axios.create({
    // 请求根路径
    baseURL: 'http://geek.itheima.net'
  })

  export default instance
  ```

* **Step. 3：声明API接口**

  ```js
  // 1.导入request.js文件
  import request from '../utils/request'

  /**
  * 获取文章列表
  * @param {*} Id 频道ID
  * @param {*} time 时间戳
  */
  export const getArticleListAPI = (Id, time) => {
    return request.get('/v1_0/articles', {
      params: {
        channel_id: Id, // 频道的 Id
        timestamp: time // 时间戳
      }
    })
  }

  /**
  * 将文章设置为不感兴趣
  * @param {*} id 文章Id
  * @returns
  */
  export const dislikeArticleAPI = (id) => {
    return request.post('/v1_0/article/dislikes', {
      target: id
    })
  }
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
