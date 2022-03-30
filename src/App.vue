<template>
  <div id="app">
    <!-- 路由占位符 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit- -moz-  -o- 统称为浏览器私有前缀
  // 如果想要让代码自动检测并添加浏览器的私有前缀 请使用postcss
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
