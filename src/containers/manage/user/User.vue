<template>
  <div>
    <Header title="用户管理" />
    <Table
    :data="currentUsers"
    style="width: 100%"
    v-loading="loading">
      <TableColumn prop="name" label="学工号" width="180">
      </TableColumn>
      <TableColumn prop="real_name" label="真实姓名" width="180">
      </TableColumn>
      <TableColumn prop="role" label="身份" width="180">
        <template slot-scope="scope">
          <div>{{roles[scope.row.role]}}</div>
          </template>
      </TableColumn>
      <TableColumn label="操作" width="100">
        <!-- <template slot-scope="scope"> -->
          <Action slot-scope="scope" v-bind:data="getAction(scope.$index, scope.row)"/>
        <!-- </template> -->
      </TableColumn>
    </Table>
    <Pagination
     @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="pagesize"
    layout="prev, pager, next"
    :total="users.length">
    </Pagination>
  </div>
</template>

<script>
import { Table, TableColumn, Button, Loading, Pagination } from 'element-ui';
import Header from '@/components/Header';
import Action from '@/components/Action';
import axios from '@/utils/axios';

export default {
  name: 'User',
  components: { Table, TableColumn, Button, Header, Loading, Pagination, Action },
  methods: {
    getUsers() {
      this.loading = true;
      axios.get('/user/alluser').then((users) => {
        this.users = users;
        this.loading = false;
      });
    },
    getAction(index, row) {
      console.log(index);
      return [{
        action: () => { this.showEditModal(row); },
        text: '编辑',
      }, {
        action: () => { this.showConfirm(row); },
        text: '删除',
      }];
    },
    showEditModal(row) {
      console.log(row, 'edit');
    },
    showConfirm(row) {
      console.log(row, 'confirm');
    },
    handleSizeChange(val) {
      this.pagesize = val;
      //        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
  computed: {
    // 计算属性的 getter
    currentUsers() {
      return this.users
        .slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize);
    },
  },
  mounted() {
    this.getUsers();
  },
  data() {
    return {
      pagesize: 8,
      currentPage: 1,
      loading: true,
      roles: {
        student: '学生',
        teacher: '教师',
        admin: '管理员',
      },
      users: [],
    };
  },
};
</script>

<style scoped>
</style>
