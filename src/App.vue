<template>
  <div id="app">
    <MainHeader/>
    <router-view />
  </div>
</template>

<script>
import MainHeader from '@/containers/MainHeader';
import '@/assets/iconfont/iconfont.css';
import axios from '@/utils/axios';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: { MainHeader },
  methods: {
    ...mapActions([
      'login', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ]),
  },
  mounted() {
    axios.get('/user/info').then((userInfo) => {
      if (userInfo) {
        this.login(userInfo);
      }
    }).catch((error) => {
      console.log(error);
    });
  },
};
</script>

<style>
html,
body {
  margin: 0;
}
input {
  -webkit-appearance: none;
}
a {
  color: inherit;
  text-decoration: none;
}
.flex-space {
  flex: 1;
  visibility: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}

</style>
