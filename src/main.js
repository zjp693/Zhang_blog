import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/hmIndex";

//#region  配置Vant
import Vant, { Lazyload } from "vant";
import "vant/lib/index.less";
Vue.use(Vant);
Vue.use(Lazyload);
//#endregion

// 配置flexible
import "amfe-flexible";

//#region 配置 day.js 插件
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import zhCN from "dayjs/locale/zh-cn";

dayjs.extend(relativeTime);
dayjs.locale(zhCN);

Vue.filter("formatDate", (dt) => {
  return dayjs().to(dt);
});
//#endregion

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
