// 本地存储
export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    // 把取出来的数据转为 javascrpt对象
    return JSON.parse(data)
  } catch (error) {
    // 转不了就直接返回data
    return data
  }
}

export const setItem = (name, value) => {
  // 如果是对象，就转为json格式的字符串再存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}

export const removeItem = name => {
  window.localStorage.removeItem(name)
}
