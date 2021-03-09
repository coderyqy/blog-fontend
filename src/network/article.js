import { request } from './request'

export function getAllArticle () {
  return request({
    url: "/article/",
    method: "get",
  })
}

export function getArticle (id) {
  return request({
    url: `/article/${id}/getArticle`,
    method: "get"
  })
}

export function save (title, content) {
  return request({
    url: "/article/save",
    method: "post",
    data: {
      title,
      content
    }
  })
}
