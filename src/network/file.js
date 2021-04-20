import { request } from './request'

export function uploadPicture (formData, articleId) {
  return request({
    url: `/upload/picture/${articleId}`,
    method: "post",
    data: {
      formData
    }
  })
}
