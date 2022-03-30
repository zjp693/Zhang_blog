<template>
  <div
    :class="[
      'article-comment',
      isShowBox1 ? 'art-cmt-container-1' : 'art-cmt-container-2',
    ]"
  >
    <!-- 评论列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
      class="cmt-list"
    >
      <!-- 评论的 Item 项 -->
      <div class="cmt-item" v-for="item in cmtList" :key="item.com_id">
        <!-- 头部区域 -->
        <div class="cmt-header">
          <!-- 头部左侧 -->
          <div class="cmt-header-left">
            <img :src="item.aut_photo" alt class="avatar" />
            <span class="uname">{{ item.aut_name }}</span>
          </div>
          <!-- 头部右侧 -->
          <div class="cmt-header-right">
            <van-icon
              name="like"
              size="16"
              color="red"
              v-if="item.is_liking"
              @click="delCmtLike(item.com_id.toString())"
            />
            <van-icon
              name="like-o"
              size="16"
              color="gray"
              @click="addCmtLike(item.com_id.toString())"
              v-else
            />
          </div>
        </div>
        <!-- 主体区域 -->
        <div class="cmt-body">{{ item.content }}</div>
        <!-- 尾部区域 -->
        <div class="cmt-footer">{{ item.pubdate | formatDate }}</div>
      </div>
    </van-list>
    <!-- 底部添加评论区域 - 1 -->
    <div class="add-cmt-box van-hairline--top" v-if="isShowBox1">
      <van-icon name="arrow-left" size="18" @click="$router.back()" />
      <div class="ipt-cmt-div" @click="showBox2">发表评论</div>
      <div class="icon-box">
        <van-badge :content="cmtCount" :max="99">
          <van-icon name="comment-o" @click="scrollToCmtList" size="20" />
        </van-badge>
        <van-icon name="star-o" size="20" />
        <van-icon name="share-o" size="20" />
      </div>
    </div>

    <!-- 底部添加评论区域 - 2 -->
    <div class="cmt-box van-hairline--top" v-else>
      <textarea
        placeholder="友善评论、理性发言、阳光心灵"
        ref="textarea"
        v-model.trim="cmt"
        @blur="hideBox2"
      ></textarea>
      <van-button type="default" :disabled="cmt.length === 0" @click="pubCmt"
        >发布</van-button
      >
    </div>
  </div>
</template>

<script>
import {
  getCmtList,
  addLikeCmt,
  delLikeCmt,
  pubComment,
} from "../../api/articleAPI";
import { animate } from "popmotion";
export default {
  props: {
    artid: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      cmtList: [],
      cmtCount: 1,
      offset: null,
      // 是否已经加载完毕
      loading: false,
      // 数据是否到底
      finished: false,
      // 是否展示评论区域1（如果值为 true 则展示评论区域1；如果值为 false 则展示评论区域2）
      isShowBox1: true,
      cmt: "",
    };
  },
  methods: {
    async initCmtList() {
      const { data: res } = await getCmtList(this.artid, this.offset);

      if (res.message === "OK") {
        this.cmtCount = res.data.total_count;
        this.cmtList = [...this.cmtList, ...res.data.results];
        // console.log(this.cmtList);
        // 为偏移量赋值
        this.offset = res.data.last_id;

        this.loading = false;
        // 如果发起请求 但是请求数据为0 则认为没有评论了
        if (res.data.results.length === 0) {
          this.finished = true;
        }
      }
    },
    async addCmtLike(comId) {
      const { data: res } = await addLikeCmt(comId);

      if (res.message === "OK") {
        // console.log(res);
        // 用js直接把点赞变成红心

        // 先找到所有的品论 进行遍历
        this.cmtList.forEach((ele) => {
          // 判断哪一个评论的id和我点的那个id一样 那么就把该评论的那个点赞的状态变红
          // console.log(ele.com_id.toString() === comId)
          if (ele.com_id.toString() === comId) {
            ele.is_liking = true;
          }
        });
        // 提示用户 点赞成功
        this.$toast.success("点赞成功！");
      }
    },
    async delCmtLike(comId) {
      const res = await delLikeCmt(comId);

      // console.log(res);
      if (res.status === 204) {
        // 先找到所有的品论 进行遍历
        this.cmtList.forEach((ele) => {
          // 判断哪一个评论的id和我点的那个id一样 那么就把该评论的那个点赞的状态变红
          // console.log(ele.com_id.toString() === comId)
          if (ele.com_id.toString() === comId) {
            ele.is_liking = false;
          }
        });
        // 提示用户 点赞成功
        this.$toast.success("取消点赞！");
      }
    },
    onLoad() {
      this.initCmtList();
    },
    showBox2() {
      this.isShowBox1 = false;
      this.$nextTick(() => {
        // console.log(this.$refs.textarea)
        this.$refs.textarea.focus();
      });
    },
    hideBox2() {
      if (this.cmt.length <= 0) {
        this.isShowBox1 = true;
      }
    },
    async pubCmt() {
      // console.log(this.cmt)
      const { data: res } = await pubComment(this.artid, this.cmt);

      if (res.message === "OK") {
        console.log(res);
        // 评论的数量+1
        this.cmtCount += 1;
        // 动态给响应回来的数据添加 is_liking 属性
        res.data.new_obj.is_liking = false;
        // 把评论的内容添加到 cmtList
        this.cmtList.unshift(res.data.new_obj);

        // 提示用户发表评论成功
        this.$toast.success("发表评论成功");
      }

      setTimeout(() => {
        this.isShowBox1 = true;
        this.cmt = "";
      }, 500);
    },
    scrollToCmtList() {
      // from 开始点
      let now = window.scrollY;
      // console.log(now);
      // to 终止点
      let dist = document.querySelector(".art-content").offsetHeight;
      animate({
        from: now,
        to: dist,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    },
  },
  created() {
    // 代码 边写 边测试 边调试
    // console.log(this.artid);
    this.initCmtList();
  },
};
</script>

<style lang="less" scoped>
.cmt-list {
  padding: 10px;
  .cmt-item {
    padding: 15px 0;
    + .cmt-item {
      border-top: 1px solid #f8f8f8;
    }
    .cmt-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cmt-header-left {
        display: flex;
        align-items: center;
        .avatar {
          width: 40px;
          height: 40px;
          background-color: #f8f8f8;
          border-radius: 50%;
          margin-right: 15px;
        }
        .uname {
          font-size: 12px;
        }
      }
    }
    .cmt-body {
      font-size: 14px;
      line-height: 28px;
      text-indent: 2em;
      margin-top: 6px;
      word-break: break-all;
    }
    .cmt-footer {
      font-size: 12px;
      color: gray;
      margin-top: 10px;
    }
  }
}

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
</style>
