export function getCssURL (ele) {
  // 获取背景图url
  const urlPre = window.getComputedStyle(ele).backgroundImage
  return urlPre.substring(5, urlPre.length - 2)
}
