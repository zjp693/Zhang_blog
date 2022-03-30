<template>
  <div
    class="article-item"
    @click="$router.push('/article/' + article.art_id.toString())"
  >
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ article.title }}</span>
          <!-- 单张图片 -->
          <img
            v-if="article.cover.type === 1"
            alt=""
            class="thumb"
            v-lazy="article.cover.images[0]"
          />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="article.cover.type === 3">
          <img
            v-for="(imgItem, imgIndex) in article.cover.images"
            :key="imgIndex"
            v-lazy="imgItem"
            alt=""
            class="thumb"
          />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span
            >作者：{{ article.aut_name }} &nbsp;&nbsp; 评论：{{
              article.comm_count
            }}
            &nbsp;&nbsp; 发布日期：{{ article.pubdate | formatDate }}</span
          >
          <!-- 关闭按钮 -->
          <van-icon name="cross" @click.stop="show = true" v-if="closeable" />
        </div>
      </template>
    </van-cell>
    <!-- 反馈画板 -->
    <van-action-sheet
      v-model="show"
      cancel-text="取消"
      :closeable="false"
      @close="isFirst = true"
      get-container="body"
    >
      <div class="first" v-if="isFirst">
        <van-cell
          :title="item.name"
          clickable
          v-for="(item, index) in actions"
          :key="index"
          class="center-title"
          @click="onCellClick(item.name)"
        />
      </div>
      <div class="second" v-else>
        <van-cell
          title="返回"
          clickable
          class="center-title"
          @click="isFirst = true"
        />
        <van-cell
          :title="item.label"
          clickable
          v-for="item in reportsList"
          :key="item.type"
          class="center-title"
          @click="reportsArticle(item.type)"
        />
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
// 导入举报内容
import reports from "../../api/reportsAPI";
// 导入 对文章不喜欢 接口
import { disLikeArticle, reportArticle } from "../../api/homeAPI";
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
    // 是否有关闭按钮 true false
    closeable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      show: false,
      actions: [
        { name: "不感兴趣" },
        { name: "反馈垃圾内容" },
        { name: "拉黑作者" },
      ],
      isFirst: true,
      reportsList: reports,
    };
  },
  methods: {
    async onCellClick(name) {
      if (name === "不感兴趣") {
        console.log("不感兴趣");
        const { data: res } = await disLikeArticle(this.artId);
        console.log(res);
        if (res.message === "OK") {
          this.$emit("removeItem", res.data.target);
        }
        this.show = false;
      } else if (name === "反馈垃圾内容") {
        console.log("反馈垃圾内容");
        this.isFirst = false;
      } else if (name === "拉黑作者") {
        console.log("拉黑作者");
      }
    },
    async reportsArticle(type) {
      const { data: res } = await reportArticle(this.artId, type, "");
      // console.log("举报文章", res);

      if (res.message === "OK") {
        this.$emit("removeItem", res.data.target);
      }
      // 3. 关闭动作面板
      this.show = false;
    },
  },
  computed: {
    artId() {
      return this.article.art_id.toString();
    },
  },
};
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}

.center-title {
  text-align: center;
}
</style>
