<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      :disabled="finished"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleItem
          v-for="item in articleList"
          :key="item.art_id"
          :article="item"
          @removeItem="revemoItem"
        ></ArticleItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 请求文章列表接口
import { getArticles } from "@/api/homeAPI";
// 导入 ArticleItem
import ArticleItem from "../ArticleItem/ArticleItem.vue";
export default {
  components: {
    ArticleItem,
  },
  props: {
    channelId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      articleList: [],
      timestamp: new Date().valueOf(),
      loading: true,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    async initArticleList(isRefresh) {
      const { data: res } = await getArticles(this.channelId, this.timestamp);

      // console.log(res);
      if (res.message === "OK") {
        if (isRefresh === true) {
          // 下拉刷新 --> 新数据在前 旧数据在后
          this.articleList = [...res.data.results, ...this.articleList];
          this.timestamp = res.data.pre_timestamp;
          this.refreshing = false;
        } else {
          // 下拉加载 --> 旧数据在前 新数据在后
          this.articleList = [...this.articleList, ...res.data.results];
          this.timestamp = res.data.pre_timestamp;
          // loading  下拉加载的loading
          this.loading = false;
        }
        // console.log("文章", res);
        if (res.data.pre_timestamp === null) {
          this.finished = true;
        }
      }
    },
    onLoad() {
      console.log("上拉加载触发了");
      this.initArticleList();
    },
    onRefresh() {
      console.log("下拉刷新触发了");
      this.initArticleList(true);
    },
    revemoItem(targetId) {
      console.log("删除某一篇文章", targetId);
      this.articleList = this.articleList.filter(
        (item) => item.art_id !== targetId
      );

      if (this.articleList.length < 10) {
        this.initArticleList();
      }
    },
  },
  created() {
    this.initArticleList();
  },
};
</script>

<style lang="less" scoped>
.article-list {
  padding-bottom: 46px;
}
</style>
