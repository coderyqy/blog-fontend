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