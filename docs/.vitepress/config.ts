export default {
  lang: 'en-US',
  title: 'zhang_Blog',
  description: 'zhang_Blog technical documentation',
  base: "/Zhang_blog",
  // markdown文件设置
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 设置文档所在的文件夹
    docsDir: 'docs',
    // 是否展示 可编辑文档
    // editLinks: true,
    // 搜索插件
    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },
    // 顶部导航
    nav: [
      { text: '前端', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '算法',
        link: '/preparation/01_promise',
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
      text: "学习内容",
      children: [
        { text: '1.这次 一次性搞懂promise', link: '/preparation/01_promise' },
        { text: '2.script setup语法糖', link: '/preparation/02_script setup语法糖' },
        { text: '3.mysql80安装教程', link: '/preparation/03_mysql80安装教程' },
        { text: '4.React笔记', link: '/preparation/04_React笔记' },
      ]
    },
    {
      text: "算法学习",
      children: [
        { text: '4.React笔记', link: '/preparation/04_React笔记' },
      ]
    },
  ]
}
