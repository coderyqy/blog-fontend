import { request } from './request'
// 获取所有文章
export function getAllComment () {
  return request({
    url: "/comment/",
    method: "get",
  })
}
// 获取单篇文章
export function getArticle (id) {
  return request({
    url: `/article/${id}/getArticle`,
    method: "get"
  })
}

// 删除文章
export function deleteComment (id) {
  console.log(id)
  return request({
    url: `/comment/delete/${id}`,
    method: "post",
    data: {}
  })
}