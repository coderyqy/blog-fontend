<template>
  <div id="article">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="uname" label="昵称" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
          <template slot-scope="scope">{{scope.row.email ? scope.row.email :'无'}}</template>
        </el-table-column>
        <el-table-column prop="createAt" label="创建时间" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button class="delete" @click="deleteUser(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getAllUser, deleteUser } from 'network/user'

export default {
  name: "Comment",
  data () {
    return {
      input: "23156",
      value: '',
      tableData: [],
    }
  },
  components: {
  },
  methods: {
    // 获取所有用户
    async getAllUsers () {
      const result = await getAllUser()
      this.tableData = result
      console.log(result)
    },
    // 删除用户
    async deleteUser (id) {
      const result = await deleteUser(id)
      if (result.status == 200) {
        this.$message({
          message: result.message,
          type: 'success'
        })
        this.getAllUsers()
      }
    }
  },
  created () {
    // 加载用户列表
    this.getAllUsers()
  }
}
</script>

<style scoped>
#article {
  margin: 14px;
}
.search {
  display: flex;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgb(219, 219, 219);
}
.search .search-item {
  margin-left: 12px;
}
.main {
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgb(219, 219, 219);
}
.delete:hover {
  background: rgb(245, 139, 68);
  color: #fff;
}
.stop:hover {
  background: rgb(197, 69, 94);
  color: #fff;
}
</style>