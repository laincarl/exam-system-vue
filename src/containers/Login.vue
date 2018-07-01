<template>
  <div class="login_container">
    <div class="login_title">帐号登录</div>
    <Form label-position="top" ref="form" :model="form" label-width="80px" size="medium">
      <FormItem label="学工号" prop="name" :rules="{
      required: true, message: '学工号不能为空', trigger: 'blur'
    }">
        <Input v-model="form.name" />
      </FormItem>
      <FormItem label="密码" prop="password" :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
    ]">
        <Input type="password" v-model="form.password" />
      </FormItem>
      <FormItem>
        <Button class="login_button" type="primary" @click="onSubmit">登录</Button>
      </FormItem>
    </Form>
    <div class="login_bottom_text">
      首次使用学工号登录，初始密码为学工号的后六位
    </div>
  </div>
</template>

<script>

import { Input, Form, FormItem, Button, Message } from 'element-ui';
import Cookies from 'js-cookie';
import axios from '@/utils/axios';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Login',
  components: { Input, Form, FormItem, Button },
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
    };
  },
  computed: mapState(['userAuth', 'userInfo']),
  methods: {
    onSubmit() {
      axios
        .post('/user/accesstoken', this.form)
        .then((data) => {
          console.log(data);
          this.login(data);
          Cookies.set('token', data.token);
          Message.success('登录成功');
          this.$router.push('/');
          window.location.reload();
          console.log(this.userAuth, this.userInfo);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapActions([
      'login', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ]),
  },
};
</script>
<style lang="less" scoped>
.login_container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  padding: 20px 40px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
}
.login_title {
  font-size: 20px;
  margin-bottom: 20px;
}
.login_bottom_text {
  background: #f8f9fa;
  color: #b6b6b7;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
}
.login_button {
  width: 100%;
}
</style>

