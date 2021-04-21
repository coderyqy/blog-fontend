import { request } from './request'

// 上传文章图片（增加时）
export function uploadAddPicture (formData) {
  return request({
    url: `/upload/picture`,
    method: "post",
    data: formData
  })
}
// 上传文章图片
export function uploadPicture (formData, articleId) {
  return request({
    url: `/upload/picture/${articleId}`,
    method: "post",
    data: formData
  })
}
// 上传文章主图
export function uploadMainPicture (formData) {
  return request({
    url: `/upload/mainpicture/`,
    method: "post",
    data: formData
  })
}
