export default {
  lang: 'en-US',
  title: 'Zhang\'s  blog',
  description: '一个 移动端 技术论坛',
  base: "/",
  // markdown文件设置
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    // 设置文档所在的文件夹
    docsDir: 'docs',
    backToHome: '返回首页',
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
      text: "基础语法",
      children: [
        { text: '1. promise 原理', link: '/documents/01_promise' },
        { text: '2. <script setup>语法糖', link: '/documents/02_script setup语法糖' },
        { text: '3. mysql80安装教程', link: '/documents/03_mysql80安装教程' },
        { text: '4. 指令', link: '/documents/Vue/1111' },
      ]
    }
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