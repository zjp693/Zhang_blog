// 导入 Axios
import axios from "axios";
import { Toast } from "vant";
import store from "../store/hmIndex";
import router from "../router";
// 按需导入换取 token 的 API
import { exchangeToken } from "../api/userAPI";
// 使用Axios创建新的axios实例 并导出
const instance = axios.create({
  baseURL: "http://toutiao.itheima.net/v1_0",
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    Toast.loading({
      message: "加载中...", // 文本内容
      duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
      forbidClick: true,
    });

    let tokenStr = store.state.tokenInfo.token;

    if (tokenStr) {
      // config是请求拦截器自己返回的
      // config.headers 自定义请求头
      config.headers.Authorization = "Bearer " + tokenStr;
    }
    // console.log("请求之前")
    return config;
  },
  function (error) {
    // 对请求错误做些什么

    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么

    // 隐藏 loading 效果
    Toast.clear();
    return response;
  },
  async function (error) {
    // 对响应错误做点什么
    // 在请求失败的时候，关闭 loading 提示效果
    Toast.clear();
    let tokenInfo = store.state.tokenInfo;
    // 如果有响应的结果，并且响应的状态码是 401，则证明 Token 过期了
    if (
      error.response &&
      error.response.status === 401 &&
      tokenInfo.refresh_token
    ) {
      // console.log(error.response);
      // console.log("token过期了");
      // // TODO1：清空 vuex 和 localStorage 中的数据
      // store.commit("cleanState");
      // // TODO2：强制跳转到登录页，并通过路由的 query 查询参数，把当前用户访问未遂的路由地址带给登录页
      // router.replace("/login?pre=" + router.currentRoute.fullPath);

      try {
        // 3.1 TODO: 发起请求，根据 refresh_token 重新请求一个有效的新 token
        const { data: res } = await exchangeToken(tokenInfo.refresh_token);
        console.log(res);
        // 3.2 TODO: 更新 Store 中的 Token
        store.commit("updateTokenInfo", {
          token: res.data.token,
          refresh_token: tokenInfo.refresh_token,
        });
      } catch (error) {
        // 4.1 清空 vuex 和 localStorage
        store.commit("cleanState");
        // 4.2 强制跳转到登录页
        router.replace("/login?pre=" + router.currentRoute.fullPath);
      }

      return instance(error.config);
    }
    return Promise.reject(error);
  }
);

export default instance;
