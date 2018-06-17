export default {
  login({ commit }, userInfo) {
    // 登录设置用户信息
    commit('LOGIN_IN', userInfo);
  },
};
