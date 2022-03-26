/*
 * @Author: 邱彦兮
 * @Date: 2022-03-26 09:14:16
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-26 09:25:12
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
