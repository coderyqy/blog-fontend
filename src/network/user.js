import { request } from './request'

export function register (name, password) {
  return request({
    url: "/user",
    method: "post",
    data: {
      name,
      password
    }
  })
}

export function login (name, password) {
  return request({
    url: "/user/login",
    method: "post",
    data: {
      name,
      password
    }
  })
}

// 获取所有的用户
export function getAllUser () {
  return request({
    url: "/user/ulist",
    method: "get",
  })
}

export function deleteUser (id) {
  return request({
    url: `/user/deleteUser/${id}`,
    method: "get",
  })
}