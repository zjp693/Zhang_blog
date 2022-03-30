// 导入Axios实例
import request from "../utils/request";
import axios from "axios";
/**
 * 获取用户的频道
 * @returns Array 用户频道数据
 */
export const userLogin = (userObj) => {
  return request.post("/authorizations", userObj);
};

/**
 * 请求用户基本信息
 * @returns
 */
export const getUserInfo = () => {
  return request.get("/user");
};

/**
 * 请求用户简介信息
 * @returns 用户信息对象
 */
export const getUserProfile = () => {
  return request.get("/user/profile");
};

/**
 * 修改用户简介信
 * @param {*} obj 修改姓名{ name: 'xxx' } 或修改生日 { birthday: '2012-12-12' }
 * @returns
 */
export const updateUserProfile = (obj) => {
  return request.patch("/user/profile", obj);
};

// 修改头像的 API（形参中的 fd 表示 FormData 格式的表单数据）
export const updateUserAvatar = (fd) => {
  return request.patch("/user/photo", fd);
};

// 换取 Token 的 API（形参中的 refreshToken 用来换取新 token）
export const exchangeToken = (refreshToken) => {
  return axios({
    method: "PUT",
    // 这里必须填写完整的请求 URL 地址
    url: "http://toutiao.itheima.net/v1_0/authorizations",
    headers: {
      // 在请求头中携带 Authorization 身份认证字段
      Authorization: "Bearer " + refreshToken,
    },
  });
};
