// 导入Axios实例
import request from "../utils/request";

/**
 * 获取联想建议（自动补全）
 * @returns Array 用户频道数据
 */
export const getSuggestion = (query) => {
  return request.get("/suggestion", {
    params: {
      q: query,
    },
  });
};

/**
 * 获取搜索结果
 * @param {*} keywords 搜索关键词
 * @param {*} page 页码
 * @param {*} per_page 每页多少条数据
 * @returns 搜索结果列表
 */
export const getSearchResult = (keywords, page, per_page) => {
  return request.get("/search", {
    params: {
      q: keywords,
      page: page,
      per_page: per_page || 10,
    },
  });
};
