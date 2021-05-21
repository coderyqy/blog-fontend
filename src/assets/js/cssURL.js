export function getCssURL (ele) {
  const urlPre = window.getComputedStyle(ele).backgroundImage
  return urlPre.substring(5, urlPre.length - 2)
}

