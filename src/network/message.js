import { request } from './request'

// 发表留言
export function message (name, content) {
  return request({
    url: `/message/publish`,
    method: "post",
    data: {
      name,
      content
    }
  })
}

// 回复留言
export function replyMessage (name, content, messageId) {
  return request({
    url: `/message/reply/`,
    method: "post",
    data: {
      name,
      content,
      messageId
    }
  })
}

// 获取所有留言
export function getMessage () {
  return request({
    url: `/message/getmsg`,
    method: "get"
  })
}

// 获取被回复的名字
export function getMessageReplyName (messageId) {
  return request({
    url: `/message/replyname/${messageId}`,
    method: "get"
  })
}
