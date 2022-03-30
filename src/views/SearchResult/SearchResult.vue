<template>
  <div class="search-result-container">
    <!-- 点击实现后退效果 -->
    <van-nav-bar
      title="搜索结果"
      left-arrow
      @click-left="$router.back()"
      fixed
    />

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onLoad"
    >
      <ArticleItem
        v-for="item in searchList"
        :key="item.art_id.toString()"
        :article="item"
        :closeable="false"
      ></ArticleItem>
    </van-list>
  </div>
</template>

<script>
// import { getSearchResult } from "@/api/searchAPI"
// 上面的代码和下面的代码作用一样 只不过下面的代码会提示函数的参数解释
import { getSearchResult } from "../../api/searchAPI";

import ArticleItem from "../../components/ArticleItem/ArticleItem.vue";
export default {
  name: "SearchResult",
  props: ["keywords"],
  components: {
    ArticleItem,
  },
  data() {
    return {
      page: 1,
      searchList: [],
      loading: false,
      finished: false,
    };
  },
  watch: {
    kw() {
      // 1. 重置关键数据
      this.page = 1;
      this.artList = [];
      this.loading = false;
      this.finished = false;

      // 2. 请求数据
      this.initSearchResult();
    },
  },
  methods: {
    async initSearchResultList() {
      // 1. 调用api 传参数
      const { data: res } = await getSearchResult(this.keywords, this.page);

      if (res.message === "OK") {
        // 1.拼接数据（上拉加载）
        this.searchList = [...this.searchList, ...res.data.results];
        // 2.loading为false
        this.loading = false;
        // 3.判断是否还有数据 如果没有数据 finished为true
        if (res.data.results.length === 0) {
          this.finished = true;
        }

        // 4. 页码增加
        this.page += 1;
      }
    },
    onLoad() {
      console.log("上拉加载");
      this.initSearchResultList();
    },
  },
  created() {
    this.initSearchResultList();
  },
};
</script>

<style lang="less" scoped>
.search-result-container {
  padding-top: 46px;
}
</style>
