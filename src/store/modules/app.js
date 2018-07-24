const app = {
  state: {
    userAuth: false,
    userInfo: {},
  },
  mutations: {
    // 登录设置用户信息
    LOGIN_IN: (state, userInfo) => {
      // console.log(userInfo);
      state.userInfo = userInfo;
      state.userAuth = true;
    },
    // 登出清除用户信息
    LOGIN_OUT: (state, userInfo) => {
      state.userInfo = userInfo;
      state.userAuth = false;
    },

  },
  actions: {
    login({ commit }, userInfo) {
      // 登录设置用户信息
      commit('LOGIN_IN', userInfo);
    },
  },
};
export default app;
