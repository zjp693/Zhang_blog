// 导入Axios实例
import request from "../utils/request";

/**
 * 获取用户的频道
 * @returns Array 用户频道数据
 */
export const getUserChannels = () => {
  return request.get("/user/channels");
};

/**
 * 更新用户频道列表数据的 API
 * @param {*} channels 是一个数组，格式： [ {id, seq} ]
 * @returns
 */

export const updateUserChannels = (channels) => {
  return request.put("/user/channels", {
    channels,
  });
};

/**
 * 获取所有频道列表
 * @returns 返回所有频道
 */
export const getAllChannels = () => {
  return request.get("/channels");
};

/**
 * 获取文章新闻推荐
 * @param {*} channelId 频道Id
 * @param {*} timestamp 时间戳
 * @returns Array 文章列表
 */
export const getArticles = (channelId, timestamp) => {
  return request.get("/articles", {
    params: {
      channel_id: channelId,
      timestamp: timestamp,
    },
  });
};

/**
 * 对文章不喜欢
 * @param {*} targetId 文章Id
 * @returns 返回 不喜欢的文章id
 */
export const disLikeArticle = (targetId) => {
  return request.post("/article/dislikes", {
    target: targetId,
  });
};

/**
 * 举报文章
 * @param {*} targetId 举报的文章id
 * @param {*} type 举报的文章id
 * @param {*} remark  其他问题 的附加说明
 * @returns 返回数据 文章id和举报类型
 */
export const reportArticle = (targetId, type, remark) => {
  return request.post("/article/reports", {
    target: targetId, // 文章的 Id
    type, // 举报的类型
    remark,
  });
};
