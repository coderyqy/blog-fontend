import { request } from './request'
// 获取所有文章
export function getAllArticle () {
  return request({
    url: "/article/",
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
// 添加文章
export function save (title, condec, content, filename, mimetype, checkList) {
  return request({
    url: "/article/save",
    method: "post",
    data: {
      title,
      condec,
      content,
      filename,
      mimetype,
      checkList
    }
  })
}
// 更新文章
export function update (id, title, condec, content, filename, mimetype) {
  return request({
    url: `/article/update/${id}`,
    method: "post",
    data: {
      title,
      content,
      condec,
      filename,
      mimetype
    }
  })
}
// 删除文章
export function deleteArticle (id) {
  return request({
    url: `/article/deleteArticle/${id}`,
    method: "post",
    data: {}
  })
}