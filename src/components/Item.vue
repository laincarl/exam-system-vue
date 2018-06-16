<template>
<div class="text">
{{text}}
</div>
</template>
<script>
export default {
  name: 'Item',
  props: ['text'],
  // data() {
  //   return {
  //     text: 'ssss',
  //   };
  // },
};
</script>
<style scoped>
.text{
  color:red;
}
</style>
