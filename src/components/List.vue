<template>
<div>
<div class="text">title</div>
<Item v-for="item in items" :key="item" :text="item"></Item>
<Button @click="add">{{text}}</Button>
</div>

</template>
<script>
import { Button } from 'element-ui';
import Item from './Item';

export default {
  name: 'List',
  components: {
    Item,
    Button,
  },
  data() {
    return {
      text: '点击增加',
      items: ['a', 'b', 'c'],
    };
  },
  methods: {
    add() {
      this.items.push(Math.random());
      console.log(this.$route.params.username, 'add');
    },
  },
};
</script>
