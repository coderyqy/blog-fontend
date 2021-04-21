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

export function save (title, content, filename, mimetype) {
  return request({
    url: "/article/save",
    method: "post",
    data: {
      title,
      content,
      filename,
      mimetype
    }
  })
}

export function update (id, title, content, filename, mimetype) {
  console.log(id, title, content, filename, mimetype)
  return request({
    url: `/article/update/${id}`,
    method: "post",
    data: {
      title,
      content,
      filename,
      mimetype
    }
  })
}
