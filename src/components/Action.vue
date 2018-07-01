<template>
  <Dropdown trigger="click" @command="handleCommand">
      <i class="el-icon-more action_icon"></i>
      <DropdownMenu slot="dropdown">
        <DropdownItem  v-for="(item, index) in data" :key="item.text" :command="index">
          {{item.text}}
          </DropdownItem>
        <!-- <DropdownItem command="delete">删除</DropdownItem> -->
      </DropdownMenu>
    </Dropdown>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';

export default {
  name: 'Action',
  components: { Dropdown, DropdownMenu, DropdownItem },
  props: ['data'],
  mounted() {
    console.log(this.data[0].action);
  },
  methods: {
    handleCommand(command) {
      console.log(command, this.data);
      this.data[command].action();
    },
  },
};
</script>

<style scoped>
.action_icon{
  cursor: pointer;
  transform: rotateZ(90deg);
}
</style>
