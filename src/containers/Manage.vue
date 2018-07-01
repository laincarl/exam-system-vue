<template>
  <div class="manage_container">
    <Menu class="menu_container" @select="handleSelect" router :default-active="$route.path">
      <MenuItem index="/manage/main">
      <i class="el-icon-menu" />
      <span slot="title">基本信息</span>
      </MenuItem>
      <MenuItem index="/manage/user">
      <i class="el-icon-menu" />
      <span slot="title">用户管理</span>
      </MenuItem>
      <MenuItem index="/manage/bank">
      <i class="el-icon-menu" />
      <span slot="title">题库管理</span>
      </MenuItem>
      <MenuItem index="/manage/paper">
      <i class="el-icon-menu" />
      <span slot="title">试卷管理</span>
      </MenuItem>
      <MenuItem index="/manage/exam">
      <i class="el-icon-menu" />
      <span slot="title">考试管理</span>
      </MenuItem>
    </Menu>
    <router-view class="menu_content"></router-view>
  </div>

</template>

<script>
import { Menu, MenuItem } from 'element-ui';

export default {
  name: 'Manage',
  components: { Menu, MenuItem },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.manage_container {
  height: 100%;
  display: flex;
}
.menu_container {
  height: 100%;
  width: 256px;
}
.menu_content {
  flex: 1;
}
</style>
