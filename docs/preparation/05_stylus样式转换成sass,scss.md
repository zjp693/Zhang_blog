# 将stylus 样式 转换成sass,scss

今天遇到一个需求的将stylus的样式转化成scss,手工一个个修改样式，太多了麻烦得很，所以想写一个插件完成这件事，没想到到让我搜索到了一个插件可以完成这件事，话都多说直接上[插件地址](https://www.npmjs.com/package/stylus-converter)

> 使用说明

全局安装(这里看个人 我经常用到所以使用了全局安装)

```js
npm install -g stylus-converter
```

然后直接在你使用的文件输入命令

```js
stylus-conver -i demo.styl -o demo.scss
```

解释

```
stylus-conver -i 源样式文件夹名  -o 转化之后的文件夹名（自动生成）
```

效果图

​	源样式

 <img src="https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/05_stylus样式转换成sass,scss.assets/image-20220510212629536.png" alt=" image-20220510212629536" style="zoom:67%;" />

​	转化之后

 ![image-20220510212704967](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/05_stylus样式转换成sass,scss.assets/image-20220510212704967.png)


> 不得不说噶噶好使 