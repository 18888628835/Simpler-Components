/*
 * @Author: 邱彦兮
 * @Date: 2022-03-26 09:14:16
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-04-22 09:54:21
 * @FilePath: /Simpler-Components/src/utils/helper.ts
 */
export function throttle(handler, delay) {
  let flag = false;
  let timer;
  return function () {
    if (flag) {
      return;
    }
    flag = true;
    timer = setTimeout(() => {
      flag = false;
      handler();
      clearTimeout(timer);
    }, delay);
  };
}

export function debounce(handler, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    let context = this;
    timer = setTimeout(() => {
      handler.call(context, ...args);
      clearTimeout(timer);
    }, delay);
  };
}

/**
 * 获取元素在整个文档中的位置
 * @param elem 元素
 * @returns 返回元素在文档中的left、right、top、bottom 位置
 */
export function getCoords(elem) {
  const rect = elem.getBoundingClientRect();
  let left = window.pageXOffset + rect.left;
  let right = window.pageXOffset + rect.right;
  let top = window.pageYOffset + rect.top;
  let bottom = window.pageYOffset + rect.bottom;
  return {
    left,
    right,
    top,
    bottom,
  };
}
