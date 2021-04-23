import { request } from './request'
// 获取所有文章
export function getAllLabel () {
  return request({
    url: "/label/",
    method: "get",
  })
}