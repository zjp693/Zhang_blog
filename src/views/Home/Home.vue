<template>
  <div class="home">
    <!-- 1.navbar -->
    <van-nav-bar title="头条">
      <template #left>
        <!-- logo图片 -->
        <img class="logo" src="@/assets/toutiao.png" alt />
      </template>
      <template #right>
        <van-icon name="search" size="18" @click="$router.push('/search')" />
      </template>
    </van-nav-bar>
    <!-- 2.用户频道 -->
    <van-tabs v-model="active" sticky offset-top="46px">
      <van-tab :title="item.name" v-for="item in userChannels" :key="item.id">
        <!-- 3.文章列表 -->
        <ArticleList :channelId="item.id"></ArticleList>
      </van-tab>
    </van-tabs>
    <!-- 频道管理的小图标 -->
    <van-icon name="plus" size="16" class="plus" @click="show = true" />
    <!-- 频道管理弹出层 -->
    <van-popup
      v-model="show"
      :close-on-click-overlay="false"
      @closed="isDel = false"
    >
      <div class="popup-container">
        <!-- 弹出层的头部区域 -->
        <van-nav-bar title="频道管理">
          <template #right>
            <van-icon
              name="cross"
              size="14"
              color="white"
              @click="show = false"
            />
          </template>
        </van-nav-bar>

        <!-- 弹出层的主体区域 -->
        <div class="pop-body">
          <!-- 我的频道 -->
          <div class="my-channel-box">
            <div class="channel-title">
              <div>
                <span class="title-bold">已添加频道：</span>
                <span class="title-gray">{{
                  isDel ? "点击移除频道" : "点击进入频道"
                }}</span>
              </div>
              <span class="btn-edit" @click="isDel = !isDel">{{
                isDel ? "完成" : "编辑"
              }}</span>
            </div>
            <!-- 我的频道列表 -->
            <van-row type="flex">
              <van-col
                span="6"
                v-for="(item, index) in userChannels"
                :key="item.id"
              >
                <!-- 用户的频道 Item 项 -->
                <div
                  class="channel-item van-hairline--surround"
                  @click="onUserChannelClick(item, index)"
                >
                  {{ item.name }}
                  <!-- 删除的图标 -->
                  <van-badge
                    color="transparent"
                    class="cross-badge"
                    v-if="
                      isDel && item.name !== '推荐' && userChannels.length > 2
                    "
                  >
                    <template #content>
                      <van-icon
                        name="cross"
                        class="badge-icon"
                        color="#cfcfcf"
                        size="12"
                      />
                    </template>
                  </van-badge>
                </div>
              </van-col>
            </van-row>
          </div>

          <!-- 分隔线 -->
          <div class="van-hairline--top sp-line"></div>

          <!-- 更多频道 -->
          <div class="more-channel-box">
            <div class="channel-title">
              <div>
                <span class="title-bold">可添加频道：</span>
                <span class="title-gray">点击添加频道</span>
              </div>
            </div>
            <!-- 更多频道列表 -->
            <van-row type="flex">
              <van-col
                span="6"
                v-for="item in moreChannels"
                :key="item.id"
                @click="addChannel(item)"
              >
                <div class="channel-item van-hairline--surround">
                  {{ item.name }}
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
// 导入 用户频道数据接口
import {
  getUserChannels,
  getAllChannels,
  updateUserChannels,
} from "@/api/homeAPI";
// 导入 文章列表组件
import ArticleList from "@/components/ArticleList/ArticleList.vue";
export default {
  components: {
    ArticleList,
  },

  data() {
    return {
      active: 0,
      show: false,
      userChannels: [],
      allChannels: [],
      isDel: false,
    };
  },
  methods: {
    // 初始化用户频道列表
    async initUserChannels() {
      const { data: res } = await getUserChannels();
      if (res.message === "OK") {
        this.userChannels = res.data.channels;
        // console.log(this.userChannels)
      }
    },
    // 初始化所有频道列表
    async initAllChannels() {
      const { data: res } = await getAllChannels();
      if (res.message === "OK") {
        this.allChannels = res.data.channels;
        // console.log(this.allChannels)
      }
    },
    // 添加频道
    addChannel(channel) {
      // console.log("频道");
      // 1.把点击的那个频道添加到用户频道里面去
      this.userChannels.push(channel);
      // console.log(channel)
      // 2. 调用 updateChannels这个方法
      this.updateChannels();
    },
    async updateChannels() {
      // 1. 组织数据
      // console.log(channels)
      let channels = this.userChannels
        .filter((item) => item.name !== "推荐")
        .map((x, index) => {
          return {
            id: x.id,
            seq: index + 1,
          };
        });

      // console.log(channels)
      // 2. 发起请求
      const { data: res } = await updateUserChannels(channels);

      // console.log(res);
      if (res.message === "更新用户频道成功") {
        // 3. 通过 notify 弹框提示用户更新成功
        this.$notify({ type: "success", message: "更新成功", duration: 1000 });
      }
    },
    onUserChannelClick(channel, index) {
      // 如果传来的频道id 和userChannels数组里面的不一样 那么就返回 如果一样 过滤掉
      if (
        this.isDel &&
        channel.name !== "推荐" &&
        this.userChannels.length > 2
      ) {
        this.userChannels = this.userChannels.filter(
          (item) => item.id !== channel.id
        );

        // console.log(this.userChannels);
        this.updateChannels();
      } else {
        this.active = index;
        this.show = false;
      }
    },
  },
  computed: {
    // 更多频道 = 所有频道 -  用户频道
    moreChannels() {
      // 所有频道 遍历
      return this.allChannels.filter((item) => {
        // 根据 item里面的id 去查找 用户频道里面 有没有该id
        let result = this.userChannels.findIndex((x) => x.id === item.id);
        //  console.log(result);
        // 如果没有
        if (result == -1) return true;
      });
    },
  },
  created() {
    this.initUserChannels();
    this.initAllChannels();
  },
  beforeRouteLeave(to, from, next) {
    from.meta.top = window.scrollY;
    next();
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  padding-bottom: 53px;
  box-sizing: border-box;
  .logo {
    height: 80%;
  }

  ::v-deep .van-nav-bar {
    position: sticky;
    top: 0px;
  }
  // 突破 scoped的束缚
  ::v-deep .van-nav-bar__title {
    color: white;
  }

  // 为 tabs 容器设置右 padding
  ::v-deep .van-tabs__wrap {
    padding-right: 36px;
    background-color: white;
  }

  /* 频道管理小图标的定位 */
  .plus {
    position: fixed;
    top: 58px;
    right: 10px;
    z-index: 999;
  }
  .van-popup,
  .popup-container {
    background-color: transparent;
    height: 100%;
    width: 100%;
  }

  .popup-container {
    display: flex;
    flex-direction: column;
  }

  .pop-body {
    flex: 1;
    overflow: scroll;
    padding: 8px;
    background-color: white;
  }

  .my-channel-box,
  .more-channel-box {
    .channel-title {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      line-height: 28px;
      padding: 0 6px;
      .title-bold {
        font-weight: bold;
      }
      .title-gray {
        color: gray;
        font-size: 12px;
      }
    }
  }

  .btn-edit {
    border: 1px solid #a3a2a2;
    padding: 0 10px;
    line-height: 20px;
    height: 20px;
    border-radius: 6px;
    font-size: 12px;
  }

  .channel-item {
    font-size: 12px;
    text-align: center;
    line-height: 36px;
    background-color: #fafafa;
    margin: 6px;
  }

  .cross-badge {
    position: absolute;
    right: -3px;
    top: 0;
    border: none;
  }

  .sp-line {
    margin: 10px 0 20px 0;
  }
}

// scoped 的作用就是使得css样式拥有了作用域
// 写在该组件中的样式 只在该组件中有效
// 本质其实就是一个属性选择器
</style>
