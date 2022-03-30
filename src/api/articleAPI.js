// 导入Axios实例
import request from "../utils/request";

/**
 * 获取文章详情
 * @param {*} id  文章id
 * @returns 文章内容
 */
export const getArticleDetail = (id) => {
  return request.get(`/articles/${id}`);
};

/**
 * 关注用户
 * @param {*} userId 关注用户的id
 * @returns 对象
 */
export const followUser = (userId) => {
  return request.post("/user/followings", {
    target: userId,
  });
};

/**
 * 取消关注用户
 * @param {*} userId 用户id
 * @returns
 */
export const unfollowUser = (userId) => {
  return request.delete(`/user/followings/${userId}`);
};

// 给文章点赞）
/**
 * 点赞
 * @param {*} artId 文章的 Id
 * @returns
 */
export const addLike = (artId) => {
  return request.post("/article/likings", {
    target: artId,
  });
};

/**
 * 取消点赞
 * @param {*} artId 文章Id
 * @returns 无返回
 */
export const delLike = (artId) => {
  return request.delete(`/article/likings/${artId}`);
};

/**
 * 获取文章下评论数据
 * @param {*} artId 文章id
 * @param {*} offset 偏移量
 * @returns
 */
export const getCmtList = (artId, offset) => {
  return request.get("/comments", {
    params: {
      // a 表示获取文章下的评论
      type: "a",
      // 文章的 Id
      source: artId,
      // 获取评论数据的偏移量，值为评论的 id。表示从此 id 的数据向后取，不传表示从第一页开始读取数据
      offset,
    },
  });
};

/**
 * 评论点赞
 * @param {*} cmtId 评论id
 * @returns 返回对象
 */
export const addLikeCmt = (cmtId) => {
  return request.post("/comment/likings", {
    target: cmtId,
  });
};

/**
 * 评论取消点赞
 * @param {*} cmtId 评论id
 * @returns
 */
export const delLikeCmt = (cmtId) => {
  return request.delete(`/comment/likings/${cmtId}`);
};

/**
 * // 发表评论
 * @param {*} artId 文章id
 * @param {*} content 评论的内容
 * @returns
 */
export const pubComment = (artId, content) => {
  return request.post("/comments", {
    target: artId,
    content,
  });
};
