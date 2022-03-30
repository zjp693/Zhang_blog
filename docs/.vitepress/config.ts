export default {
  lang: 'en-US',
  title: '黑马头条',
  description: '一个 移动端 技术论坛',
  base: "/HeiMaTouTiao",
  // markdown文件设置
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    // 设置文档所在的文件夹
    docsDir: 'docs',
    // 搜索插件
    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },
    // 顶部导航
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      }
    ],
    // 侧边栏导航
    sidebar: {
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: "前期准备",
      children: [
        { text: '项目介绍', link: '/early/introduction' },
        { text: '项目创建', link: '/early/initialization' },
        { text: '配置组件库', link: '/early/deploy-vant' },
        { text: '配置适配插件', link: '/early/deploy-screen-adaptation' },
        { text: '配置网络请求插件', link: '/early/deploy-axios' },
        { text: '模板页面开发', link: '/early/layout' },

      ]
    },
    {
      text: "登录页",
      children: [
        { text: '渲染登录组件', link: '/middle/login-render-base' },
        { text: '渲染登录头部', link: '/middle/login-render-header' },
        { text: '渲染登录表单', link: '/middle/login-render-form' },
        { text: '添加校验规则', link: '/middle/login-form-rules' },
        { text: '实现登录方法', link: '/middle/login-form-function' },
        { text: '存储token到vuex', link: '/middle/login-token-vuex' },
        { text: '持久化存储token', link: '/middle/login-token-storage' },
        { text: '全局loading效果', link: '/middle/login-global-loading' },
        { text: '全局token认证', link: '/middle/login-global-auth' }
      ]
    },
    {
      text: "首页",
      children: [
        { text: '渲染首页组件', link: '/middle/home-render-base' },
        { text: '频道列表页面', link: '/middle/home-channels-static' },
        { text: '渲染频道列表', link: '/middle/home-channels-dynamic' },
        { text: '封装文章列表', link: '/middle/home-article-list' },
        { text: '获取文章列表数据', link: '/middle/home-article-list-data' },
        { text: '封装channelId属性', link: '/middle/home-article-list-channelid' },
        { text: '封装文章列表项', link: '/middle/home-article-list-item' },
        { text: '文章列表上拉加载', link: '/middle/home-article-pullload' },
        { text: '文章列表下拉刷新', link: '/middle/home-article-pullrefresh' },
        { text: '图片懒加载', link: '/middle/home-article-lazyload' },
        { text: '格式化时间', link: '/middle/home-article-dateformat' },
        { text: '展示反馈面板', link: '/middle/home-article-feedback-pannel' },
        { text: '渲染一级反馈', link: '/middle/home-article-feedback-first' },
        { text: '渲染二级反馈', link: '/middle/home-article-feedback-second' },
        { text: '指定面板挂载位置', link: '/middle/home-article-pannel-position' },
        { text: '设置不感兴趣文章', link: '/middle/home-article-not-interesting' },
        { text: '渲染频道管理', link: '/middle/home-channel-render' },
        { text: '渲染更多频道', link: '/middle/home-channel-more' },
        { text: '实现频道添加', link: '/middle/home-channel-add' },
        { text: '实现频道删除', link: '/middle/home-channel-minus' },
        { text: '重置编辑状态', link: '/middle/home-channel-reset' },
        { text: '频道点击联动', link: '/middle/home-channel-contact' }
      ]
    },
    {
      text: "文章搜索",
      children: [
        { text: '渲染搜索页面', link: '/middle/search-page-render' },
        { text: '搜索框自动聚焦', link: '/middle/search-input-autofocus' },
        { text: '输入框防抖', link: '/middle/search-input-debounce' },
        { text: '关键词高亮', link: '/middle/search-keywords-highlight' },
        { text: '渲染搜索历史', link: '/middle/search-listory-render' },
        { text: '添加搜索历史', link: '/middle/search-listory-add' },
        { text: '存储搜索历史', link: '/middle/search-listory-save' },
        { text: '清空搜索历史', link: '/middle/search-listory-clean' },
        { text: '跳转到搜索结果页', link: '/middle/search-result-jump' },
        { text: '创建搜索结果页组件', link: '/middle/search-result-create' },
        { text: '渲染搜索结果页', link: '/middle/search-result-render' },
        { text: '搜索结果上拉加载更多', link: '/middle/search-result-pullload' },
        { text: '关闭按钮的显示与隐藏', link: '/middle/search-result-toggle' },
      ]
    },
    {
      text: "文章详情",
      children: [
        { text: '创建文章详情组件', link: '/middle/article-detail-create' },
        { text: '开启props路由传参', link: '/middle/article-detail-props' },
        { text: '渲染文章详情数据', link: '/middle/article-detail-render' },
        { text: '关注功能', link: '/middle/article-detail-follow' },
        { text: '取消关注', link: '/middle/article-detail-unfollow' },
        { text: '点赞功能', link: '/middle/article-detail-like' },
        { text: '取消点赞', link: '/middle/article-detail-unlike' },
        { text: '创建评论组件', link: '/middle/article-detail-comment-create' },
        { text: '渲染评论组件', link: '/middle/article-detail-comment-render' },
        { text: '评论点赞', link: '/middle/article-detail-comment-like' },
        { text: '评论取消点赞', link: '/middle/article-detail-comment-unlike' },
        { text: '创建发布评论组件', link: '/middle/article-detail-pubcomment-create' },
        { text: '底部评论按需展示', link: '/middle/article-detail-pubcomment-condition' },
        { text: '输入框自动聚焦', link: '/middle/article-detail-pubcomment-autofocus' },
        { text: '渲染评论的总数量', link: '/middle/article-detail-pubcomment-count' },
        { text: '发布评论功能', link: '/middle/article-detail-pubcomment-function' },
        { text: '平滑滚动', link: '/middle/article-detail-pubcomment-popmotion' }
      ]
    },
    {
      text: "个人中心",
      children: [
        { text: '渲染个人中心', link: '/middle/profile-render' },
        { text: '退出登录', link: '/middle/profile-logout' },
        { text: '渲染用户编辑页面', link: '/middle/profile-user-edit-render' },
        { text: '修改用户姓名', link: '/middle/profile-user-edit-name' },
        { text: '修改用户生日', link: '/middle/profile-user-edit-birthday' },
        { text: '修改用户头像', link: '/middle/profile-user-edit-avatar' }
      ]
    },
    {
      text: "小思同学",
      children: [
        { text: 'websocket介绍', link: '/middle/websocket-introduce' },
        { text: '创建聊天组件页面', link: '/middle/websocket-chat-page' },
        { text: '动态渲染聊天消息', link: '/middle/websocket-chat-render' },
        { text: '动态渲染用户头像', link: '/middle/websocket-avatar-render' },
        { text: '动态添加聊天消息', link: '/middle/websocket-chat-push' },
        { text: '安装和配置websocket', link: '/middle/websocket-install-config' },
        { text: '创建和销毁socket实例', link: '/middle/websocket-create-destory'},
        { text: '监听连接建立和关闭', link: '/middle/websocket-connect-listen'},
        { text: '接收服务器的消息', link: '/middle/websocket-message-receive'},
        { text: '向服务器发送消息', link: '/middle/websocket-message-send'},
        { text: '自动滚动到底部', link: '/middle/websocket-auto-scroll-bottom'}
      ]
    },
    {
      text: "后期优化",
      children: [
        { text: '页面权限控制', link: '/late/permission-control'},
        { text: 'token续签', link: '/late/token-renew'},
        { text: '项目优化', link: '/late/project-optimization'},
        { text: '项目打包', link: '/late/build-package'}
      ]
    },

  ]
}

/** 
⓵
⓶
⓷
⓸
⓹
⓺
⓻
⓼
⓽
⓾
*/