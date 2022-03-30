// postcss  是一个用 JavaScript 工具和插件转换 CSS 代码的工具
// 作用: 1. 自动给未完全成为标准的css 添加浏览器前缀
// -webkit-animation:
// animation:
module.exports = {
  // 插件
  plugins: {
    // 使用 postcss-pxtorem插件 来把开发中 写的 px单位转换成 rem
    "postcss-pxtorem": {
      rootValue: 37.5, // 根节点的 font-size 值
      propList: ["*"], // 要处理的属性列表，* 代表所有属性
      exclude: /node_modules|docs/i,
    },
  },
};
