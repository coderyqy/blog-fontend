import axios from "axios"
import store from '@/store/'

export function request (config) {
  // 创建一个实例
  const instance = new axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: 5000
  })

  // 请求拦截 
  instance.interceptors.request.use(config => {
    const { user } = store.state
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}
