<template>
  <div>
    <!-- Header 区域 -->
    <van-nav-bar
      fixed
      title="文章详情"
      left-arrow
      @click-left="$router.back()"
    />

    <!-- 文章信息区域 -->
    <div class="article-container" v-if="article">
      <!-- 文章标题 -->
      <h1 class="art-title">{{ article.title }}</h1>

      <!-- 用户信息 -->
      <van-cell
        center
        :title="article.aut_name"
        :label="article.pubdate | formatDate"
      >
        <template #icon>
          <!-- 头像 -->
          <img
            :src="article.aut_photo"
            :alt="article.aut_name"
            class="avatar"
          />
        </template>
        <template #default>
          <div>
            <!-- 是否关注了作者 -->
            <van-button
              type="info"
              size="mini"
              v-if="article.is_followed"
              @click="setUnFollow"
              >已关注</van-button
            >
            <van-button
              icon="plus"
              type="info"
              size="mini"
              plain
              @click="setFollow"
              v-else
              >关注</van-button
            >
          </div>
        </template>
      </van-cell>

      <!-- 分割线 -->
      <van-divider></van-divider>

      <!-- 文章内容 -->
      <div class="art-content" v-html="article.content"></div>

      <!-- 分割线 -->
      <van-divider>End</van-divider>

      <!-- 点赞 -->
      <div class="like-box">
        <!-- 1 代表已点赞  -1 代表未点赞 -->
        <van-button
          icon="good-job"
          type="danger"
          size="small"
          v-if="article.attitude === 1"
          @click="setDisLike"
          >已点赞</van-button
        >
        <van-button
          icon="good-job-o"
          type="danger"
          plain
          size="small"
          @click="setLike"
          v-else
          >点赞</van-button
        >
      </div>
    </div>
    <!-- 文章评论区域 -->
    <ArtCmt :artid="id"></ArtCmt>
  </div>
</template>

<script>
import {
  getArticleDetail,
  followUser,
  unfollowUser,
  addLike,
  delLike,
} from "../../api/articleAPI";
import ArtCmt from "../../components/ArtCmt/ArtCmt.vue";

export default {
  props: ["id"],
  components: {
    ArtCmt,
  },
  data() {
    return {
      article: null,
    };
  },

  watch: {
    id() {
      this.article = null;
      this.initArticle();
    },
  },
  methods: {
    async initArticle() {
      const { data: res } = await getArticleDetail(this.id);

      if (res.message === "OK") {
        // console.log(res);
        this.article = res.data;
        // console.log(this.article.aut_id)
      }
    },
    async setFollow() {
      const { data: res } = await followUser(this.article.aut_id.toString());
      // console.log(res);

      if (res.message === "OK") {
        this.$toast.success("关注成功！");
        this.article.is_followed = true;
      }
    },
    async setUnFollow() {
      const res = await unfollowUser(this.article.aut_id.toString());
      // console.log(typeof res);
      console.log(res);
      if (res.status === 204) {
        // 状态码为204 就意味着 取消关注成功了
        this.$toast.success("取消关注成功！");
        this.article.is_followed = false;
      }
    },
    async setLike() {
      const { data: res } = await addLike(this.article.art_id.toString());
      console.log(res);

      if (res.message === "OK") {
        this.article.attitude = 1;
        this.$toast.success("点赞成功！");
      }
    },
    async setDisLike() {
      const res = await delLike(this.article.art_id.toString());

      if (res.status === 204) {
        // 状态码为204 就意味着 取消关注成功了
        this.$toast.success("取消点赞！");
        this.article.attitude = -1;
      }
    },
  },
  created() {
    this.initArticle();
  },
};
</script>

<style lang="less" scoped>
.article-container {
  padding: 10px;
  margin-top: 46px;
}
.art-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.art-content {
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  overflow-x: scroll;
  word-break: break-all;
}

.van-cell {
  padding: 5px 0;
  &::after {
    display: none;
  }
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-right: 5px;
  border: none;
}

.like-box {
  display: flex;
  justify-content: center;
}
</style>
