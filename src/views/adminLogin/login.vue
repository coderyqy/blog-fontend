<template>
  <div class="login-wrap">
    <div class="container">
      <el-card>
        <div class="box">
          <h2>后台管理系统</h2>
          <div class="box-right">
            <div class="item">
              <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="uname"></el-input>
            </div>
            <div class="item">
              <el-input
                type="password"
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
                v-model="password"
              ></el-input>
            </div>
            <div class="item">
              <el-button type="primary" @click="login">登录</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { login } from 'network/user'
import axios from 'axios'

export default {
  name: "adminLogin",
  data () {
    return {
      uname: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const res = await login(this.uname, this.password)
      console.log(res)
      if (res.status == 400) {
        this.$message({
          message: res.msg,
          type: 'error'
        })
        return
      }
      if (res.status == 404) {
        this.$message({
          message: res.msg,
          type: 'error'
        })
        return
      }
      // 将后端返回的用户登录状态放到VueX容器中
      localStorage.setItem("token", JSON.stringify(res.token))

      this.$store.commit('setUser', res)

      this.$router.push('/home')
    }
  },
  created () {
    window.console.log('虽不能至\r\n心向往之\r\n挺励志的一句话\r\n\r\n\r\n%cfollow me %c https://github.com/coderyqy', 'color:red', 'color:green')
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(53, 64, 83);
}
h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  text-align: center;
}
.el-card {
  height: 100%;
}

.box-left {
  width: 300px;
}
.box-left > img {
  width: 80%;
}
.box-right {
  flex: 1;
  position: relative;
}
.box-right .item {
  margin-bottom: 20px;
}
</style>