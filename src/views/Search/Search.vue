<template>
  <div class="search">
    <!-- Header 头部区域 -->
    <div class="search-header" ref="search">
      <!-- 后退图标 -->
      <van-icon
        name="arrow-left"
        color="white"
        size="18"
        class="goback"
        @click="$router.back()"
      />
      <!-- 搜索组件 -->
      <van-search
        v-model.trim="kw"
        placeholder="请输入搜索关键词"
        background="#007BFF"
        shape="round"
        @input="onInput"
      />
    </div>
    <!-- 搜索建议 -->
    <div class="sugg-list" v-if="kw.length !== 0">
      <div
        class="sugg-item"
        v-for="(item, i) in suggestList"
        :key="i"
        v-html="item"
        @click="gotoSearchResult"
      ></div>
    </div>
    <!-- 搜索历史 -->
    <div class="search-history" v-else>
      <!-- 标题 -->
      <van-cell title="搜索历史">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="delete" class="search-icon" @click="history = []" />
        </template>
      </van-cell>

      <!-- 历史列表 -->
      <div class="history-list">
        <span
          class="history-item"
          v-for="(tag, i) in history"
          :key="i"
          @click="gotoSearchResult"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getSuggestion } from "@/api/searchAPI";

export default {
  name: "Search",
  data() {
    return {
      // 搜索关键词
      kw: "",
      // 定时器
      timerId: null,
      // 搜索建议列表
      suggestList: [],
      // 搜索历史
      history: JSON.parse(localStorage.getItem("hmHistory") || "[]"),
    };
  },
  methods: {
    onInput() {
      // 清除上次定时器
      clearTimeout(this.timerId);

      if (this.kw.length === 0) return (this.suggestList = []);
      // 开启定时器
      this.timerId = setTimeout(() => {
        this.initSuggestList();
      }, 500);
    },
    async initSuggestList() {
      const { data: res } = await getSuggestion(this.kw);

      if (res.message === "OK") {
        this.hLightKeywords(res.data.options);
        this.suggestList = res.data.options;

        // 把搜索历史关键词存储到history数组中 history: [c,a,b]

        // 实现 最新搜索的关键字存在于history中  变为第一个 元素 通过关键词 去数组中寻找 一样 把这个一样的滤掉 返回不一样的
        let newHistory = this.history.filter((item) => item !== this.kw);
        // 实现把最新的关键词排在第一个
        newHistory.unshift(this.kw);

        this.history = newHistory;

        console.log(this.history);
      }
    },
    hLightKeywords(arr) {
      // 1. 根据用户输入的 kw，动态创建正则表达式
      let regexp = new RegExp(this.kw, "i");
      // 循环数组中的每一项
      arr.forEach((ele, index) => {
        // 2. 调用字符串的 replace 方法进行关键字的高亮处理
        arr[index] = ele.replace(regexp, (val) => {
          return `<span style="color: red; font-weight: bold;">${val}</span>`;
        });
      });
    },
    gotoSearchResult(e) {
      console.log(e.currentTarget.innerText);

      let keywords = e.currentTarget.innerText;

      this.$router.push(`/search/${keywords}`);
    },
  },
  watch: {
    history(newVal) {
      console.log("被侦听的历史记录", newVal);
      localStorage.setItem("hmHistory", JSON.stringify(newVal));
    },
  },
  mounted() {
    // console.log("这个ref是用来获取DOM元素的",this.$refs.search)

    // this.$refs.search.style.backgroundColor ="red";
    // ref 就是如果某一天你要对元素进行增删改查 就用ref
    const ipt = document.querySelector('input[type="search"]');
    ipt && ipt.focus();
  },
};
</script>

<style lang="less" scoped>
.search-header {
  height: 46px;
  display: flex;
  align-items: center;
  background-color: #007bff;
  overflow: hidden;
  // 后退按钮
  .goback {
    padding-left: 14px;
  }
  // 搜索组件
  .van-search {
    flex: 1;
  }
}

.sugg-list {
  .sugg-item {
    padding: 0 15px;
    border-bottom: 1px solid #f8f8f8;
    font-size: 14px;
    line-height: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}

.history-list {
  padding: 0 10px;
  .history-item {
    display: inline-block;
    font-size: 12px;
    padding: 8px 14px;
    background-color: #efefef;
    margin: 10px 8px 0px 8px;
    border-radius: 10px;
  }
}
</style>
