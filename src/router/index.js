import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/hmIndex";
// 导入 Main 组件
import Main from "@/views/Main/Main.vue";
// 导入 Home 组件
import Home from "@/views/Home/Home.vue";
// 导入 Login 组件
import Login from "@/views/Login/Login.vue";
// 导入 Search 组件
import Search from "@/views/Search/Search.vue";
// 导入 SearchResult 组件
import SearchResult from "@/views/SearchResult/SearchResult.vue";
// 导入 ArticleDetail 组件
import ArticleDetail from "../views/ArticleDetail/ArticleDetail.vue";
// 导入 User 组件
import User from "../views/User/User.vue";
// 导入 UserEdit组件
import UserEdit from "../views/UserEdit/UserEdit.vue";
// 导入 Chat 组件
import Chat from "../views/Chat/Chat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "/",
        redirect: "home",
      },
      {
        path: "home",
        component: Home,
        meta: { isRecord: true, top: 0 },
      },
      {
        path: "user",
        component: User,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/useredit/",
    component: UserEdit,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/search/:keywords",
    component: SearchResult,
    props: true,
  },
  {
    path: "/article/:id",
    component: ArticleDetail,
    props: true,
  },
  // 小思聊天的路由规则
  { path: "/chat", component: Chat, name: "chat" },
];

const router = new VueRouter({
  routes,
});

// 为路由挂载全局前置守卫
const pageArr = ["/user", "/useredit"];
router.beforeEach((to, from, next) => {
  if (pageArr.indexOf(to.path) !== -1) {
    // 访问的是有权限的页面，需要判断用户是否登录
    next();
    // 1.从 store中获取token的值
    const tokenStr = store.state.tokenInfo.token;
    if (tokenStr) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

// 全局后置钩子
router.afterEach((to) => {
  // 如果当前的路由的元信息中，isRecord 的值为 true
  if (to.meta.isRecord) {
    setTimeout(() => {
      // 则把元信息中的 top 值设为滚动条纵向滚动的位置
      window.scrollTo(0, to.meta.top);
    }, 0);
  }
});

export default router;
