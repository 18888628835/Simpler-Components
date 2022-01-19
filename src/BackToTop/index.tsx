/*
 * @Author: 邱彦兮
 * @Date: 2022-01-19 21:12:32
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-19 22:28:04
 * @FilePath: /Simpler-Components/src/BackToTop/index.tsx
 */

import React, { useEffect, useRef, useState } from 'react';
import Wrap from './style';

type BackToTopProps = {
  /**
   * @description 滚动高度达到此参数值才出现 BackTop
   */
  visibilityHeight?: number;
  /**
   * @description 点击按钮的回调函数
   */
  onClick?: (...rest) => any;
};

function throttle(handler, delay) {
  let timer;
  return function (...rest) {
    if (timer) return;
    const context = this;
    timer = setTimeout(function () {
      handler.apply(context, ...rest);
      clearTimeout(timer);
      timer = null;
    }, delay);
  };
}
const BackToTop: React.FC<BackToTopProps> = (props) => {
  const { visibilityHeight, onClick } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(true);
  function scroll() {
    if (
      (visibilityHeight && window.pageYOffset >= visibilityHeight) ||
      window.pageYOffset / document.documentElement.clientHeight > 0.3
    ) {
      setHidden(false);
      return;
    }
    setHidden(true);
  }
  useEffect(() => {
    const handler = throttle(scroll, 300);
    window.addEventListener('scroll', handler);
    return function () {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <Wrap
      ref={ref}
      className="fancy_back_to_top"
      hidden={hidden}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onClick && onClick();
      }}
    >
      {props.children}
    </Wrap>
  );
};

export default BackToTop;
