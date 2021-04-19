<template>
  <div class="login-wrap">
    <div class="container">
      <el-card>
        <div class="box">
          <div class="box-left">
            <img src="@/assets/image/loginBanner.png" alt />
          </div>
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
      uname: '李四',
      password: '123456'
    }
  },
  methods: {
    async login () {
      console.log(this.uname, this.password)
      const res = await login(this.uname, this.password)
      console.log(res)
      if (res.status == 400) {
        alert(res.msg)
        return
      }
      if (res.status == 404) {
        alert(res.msg)
        return
      }
      // 将后端返回的用户登录状态放到VueX容器中
      localStorage.setItem("token", JSON.stringify(res.token))

      this.$store.commit('setUser', res)

      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/image/adminLgBg3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 600px;
  height: 300px;
  border-radius: 10px;
  text-align: center;
}
.el-card {
  height: 100%;
  padding-top: 50px;
}

.box {
  display: flex;
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
  padding-left: 20px;
}
.box-right::after {
  position: absolute;
  left: -5px;
  top: 0;
  display: block;
  content: '';
  width: 1px;
  height: 200px;
  background: rgb(214, 214, 214);
}
.box-right .item {
  margin-bottom: 20px;
}
</style>