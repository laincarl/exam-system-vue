const LOGIN_IN = 'LOGIN_IN';
const LOGIN_OUT = 'LOGIN_OUT';

export default {
  // 登录设置用户信息
  [LOGIN_IN](state, userInfo) {
    state.userInfo = userInfo;
    state.userAuth = true;
  },
  // 登出清除用户信息
  [LOGIN_OUT](state, userInfo) {
    state.userInfo = userInfo;
    state.userAuth = false;
  },

};
