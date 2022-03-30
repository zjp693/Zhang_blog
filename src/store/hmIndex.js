import Vue from "vue";
import Vuex from "vuex";
import { getUserInfo, getUserProfile } from "../api/userAPI";
Vue.use(Vuex);

// 1.定义初始的 state对象 名字 initState
let initState = {
  tokenInfo: {},
  userInfo: {},
  userProfile: {},
};

// 3. 读取localstorage中的值
const stateStr = localStorage.getItem("state");
// 4. 判断 localStorage中有没有 在localstorage中存过 存过就把initState重新赋值 没有存过就不管了
if (stateStr) {
  initState = JSON.parse(stateStr);

  // console.log(initState);
}

export default new Vuex.Store({
  state: {
    // tokeninfo用来存储 token和 refreshToken
    // 2.把initState对象作为state的初始值
    tokenInfo: initState.tokenInfo,
    userInfo: initState.userInfo,
    userProfile: initState.userProfile,
  },
  getters: {
    // 用户头像的计算属性
    userAvatar(state) {
      // 默认的头像地址
      let imgSrc = "https://img.yzcdn.cn/vant/cat.jpeg";

      // 如果用户信息对象中包含 photo 属性的值，则为 imgSrc 重新赋值
      if (state.userInfo.photo) {
        imgSrc = state.userInfo.photo;
      }

      return imgSrc;
    },
  },
  mutations: {
    // 用来更新token
    // payload 未来就是一个token和refreshToken组成的对象
    updateTokenInfo(state, payload) {
      state.tokenInfo = payload;

      // console.log(state.tokeninfo);
      this.commit("saveStateStorage");
    },
    updateUserInfo(state, payload) {
      state.userInfo = payload;
      // console.log(state.userInfo)
      this.commit("saveStateStorage");
    },
    updateUserProfile(state, payload) {
      state.userProfile = payload;

      this.commit("saveStateStorage");
    },

    // 把tokeninfo持久化到localStorage中
    saveStateStorage(state) {
      localStorage.setItem("state", JSON.stringify(state));
    },

    cleanState(state) {
      state.tokenInfo = {};
      state.userInfo = {};
      state.userProfile = {};
      // 2. 将清空后的 state 存储到本地
      this.commit("saveStateStorage");
    },
  },
  actions: {
    async initUserInfo(ctx) {
      const { data: res } = await getUserInfo();
      if (res.message === "OK") {
        ctx.commit("updateUserInfo", res.data);
      }
    },
    async initUserProfile(ctx) {
      const { data: res } = await getUserProfile();
      if (res.message === "OK") {
        // console.log(ctx)
        // console.log(res);
        ctx.commit("updateUserProfile", res.data);
      }
    },
  },
});
