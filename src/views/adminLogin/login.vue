<template>
  <div class="login-wrap">
    <div class="container">
      <h1>LOGIN</h1>
			<div class="inputBox">
				<div class="inputText">
					<span class="iconfont icon-nickname"></span>
					<input type="text" v-model="name" placeholder="Username" />
				</div>
				<div class="inputText">
					<span class="iconfont icon-visible"></span>
					<input type="password" v-model="password" placeholder="Password" />
				</div>
			</div>
			<input class="loginButton" type="button" @click="login" value="Login" />
    </div>
  </div>
</template>

<script>
import { login } from 'network/user'
import axios from 'axios'

export default {
  name: "adminLogin",
  data(){
    return {
      name: '张三',
      password: '123456'
    }
  },
  methods: {
    async login() {
      console.log(this.name, this.password);
      const res = await login(this.name, this.password)
      console.log(res);
      if(res.status == 400) {
        alert(res.msg)
        return
      }
      if(res.status == 404) {
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
	background-image: url("../../assets/image/bgimg.jpg");
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
	padding: 20px 50px;
	background-color: #00000090;
	width: 400px;
	height: 300px;
	border-radius: 10px;
	text-align: center;
}

.container h1 {
	color: white;
}

.container .inputBox {
	margin-top: 50px;	
}

.inputBox .inputText input{
	border: 0;
	padding: 10px 10px;
	border-bottom: 1px solid white;	
	background-color: #00000000;	
	color: white;	
}

.loginButton {
	margin-top: 30px;
	width: 150px;
	height: 25px;
	color: white;	
	border: 0; 
	border-radius: 20px;
	background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);	/* 按钮颜色 */
}

</style>