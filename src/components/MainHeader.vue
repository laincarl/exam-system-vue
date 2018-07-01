<template>
  <div class="container">
    <router-link to="/">
      <div class="header_btn">
        <i class="iconfont icon-home" /> 主页
      </div>
    </router-link>
    <div class="flex-space"></div>
    <div v-if="userAuth&&['admin', 'teacher'].includes(userInfo.role)">
      <router-link to="/manage">
        <div class="header_btn">管理</div>
      </router-link>
    </div>
    <div v-if="userAuth">
      <Popover trigger="click">
        <div style="width:190px">
          <div style="text-align: center;">
            <img class="head_icon_big" :src="userInfo.url" alt="" />
            <div style="margin-top: 10px">{{userInfo.real_name}}</div>
            <div style="font-size: 10px;marginTop: 3px">{{userInfo.role}}</div>
          </div>
          <div class="pop_button_container">
            <Button size="small">个人中心</Button>
            <Button size="small" type="primary">退出登录</Button>
          </div>
        </div>
        <img slot="reference" class="head_icon" :src="userInfo.url" alt="" />
      </Popover>
    </div>
    <div v-else>
      <router-link to="/login">
        <div class="header_btn">登录</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Popover, Button } from 'element-ui';
import { mapState } from 'vuex';

export default {
  name: 'MainHeader',
  components: {
    Popover,
    Button,
  },
  computed: mapState(['userAuth', 'userInfo']),
  data() {
    return {
      login: false,
      real_name: 'wang',
      role: '教师',
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  height: 50px;
  /* boxShadow:0 2px 8px #f0f1f2; */
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  color: black;
  background: white;
  border-bottom: 1px solid #ddd;
}

.header_btn {
  cursor: pointer;
  height: 100%;
  width: 80px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  line-height: 50px;
}

.header_btn:hover {
  color: #1496dd;
  box-shadow: 0 2px 0 #1496dd;
  transition: all 0.3s ease-out;
  user-select: none;
}

.head_icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
}
.head_icon_big {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.pop_button_container {
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
