<template>
  <div class="header">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title'],
};
</script>

<style lang="less" scoped>
.header {
  background: white;
  height: 50px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  width: 100%;
  .title {
    font-size: 18px;
    margin-left: 10px;
  }
}
</style>

