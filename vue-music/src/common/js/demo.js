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
