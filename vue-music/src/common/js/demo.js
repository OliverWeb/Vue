/* todo 对dom操作的方法 */
export function addClass(el, className) {
  if (hasclass(el, className)) {
    return
  }
  let newClass = el.className.split('')
  newClass.push(className)
  el.className = newClass.join('')
}

export function hasclass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|&)')
  return reg.test(el.className)
}

/* 获取dom数据 这里的获取属性值 */
export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
