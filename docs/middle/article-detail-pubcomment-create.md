# 创建发布评论组件

::: tip 目标
这一小节，我们的目标是渲染发布评论的基础结构
:::

::: warning 步骤

1. 在 `ArtCmt` 组件中，和“评论列表”平级，声明“评论区域”的结构
2. 美化评论区域的样式
:::

::: info 体验

* **Step.1：在 `ArtCmt` 组件中，和“评论列表”平级，声明“评论区域”的结构**

```html
<!-- 底部添加评论区域 - 1 -->
<div class="add-cmt-box van-hairline--top">
  <van-icon name="arrow-left" size="18" @click="$router.back()" />
  <div class="ipt-cmt-div">发表评论</div>
  <div class="icon-box">
    <van-badge :content="0" :max="99">
      <van-icon name="comment-o" size="20" />
    </van-badge>
    <van-icon name="star-o" size="20" />
    <van-icon name="share-o" size="20" />
  </div>
</div>

<!-- 底部添加评论区域 - 2 -->
<div class="cmt-box van-hairline--top">
  <textarea placeholder="友善评论、理性发言、阳光心灵"></textarea>
  <van-button type="default" disabled>发布</van-button>
</div>
```

* **Step.2：美化评论区域的样式**

```less
// 外层容器
.art-cmt-container-1 {
  padding-bottom: 46px;
}
.art-cmt-container-2 {
  padding-bottom: 80px;
}

// 发布评论的盒子 - 1
.add-cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  line-height: 46px;
  padding-left: 10px;
  .ipt-cmt-div {
    flex: 1;
    border: 1px solid #efefef;
    border-radius: 15px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    padding-left: 15px;
    margin-left: 10px;
    background-color: #f8f8f8;
  }
  .icon-box {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    line-height: 0;
  }
}

.child {
  width: 20px;
  height: 20px;
  background: #f2f3f5;
}

// 发布评论的盒子 - 2
.cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: white;
  textarea {
    flex: 1;
    height: 66%;
    border: 1px solid #efefef;
    background-color: #f8f8f8;
    resize: none;
    border-radius: 6px;
    padding: 5px;
  }
  .van-button {
    height: 100%;
    border: none;
  }
}
```

:::
