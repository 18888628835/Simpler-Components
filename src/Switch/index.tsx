/*
 * @Author: 邱彦兮
 * @Date: 2021-10-12 14:28:03
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-08 23:16:51
 * @FilePath: /Simpler-Components/src/Switch/index.tsx
 */
import { FC, useState } from 'react';
import classnames from 'classnames';
import { Wrap, Thumb, Track } from './styleSwitch';
import React from 'react';

export type SwitchProps = {
  /**
   * @description change后的回调
   */
  onChange?: (e: boolean) => void;
  /**
   * @description primary样式
   */
  primary?: boolean;
  /**
   * @description 指定state
   */
  status?: boolean;
  /**
   * @description 是否锁定
   */
  checked?: boolean;
};

const Switch: FC<SwitchProps> = (props) => {
  const { onChange, primary = false, status = false, checked = false } = props;
  const [thumb, setThumb] = useState(status);
  const trackClass = classnames('track', {
    track_click: thumb,
  });
  const thumbClass = classnames('thumb', {
    thumb_click: thumb,
  });
  const handleClick = () => {
    if (!checked) {
      setThumb(!thumb);
      let timer = setTimeout(() => {
        if (onChange) {
          onChange(!thumb);
        }
        clearTimeout(timer);
      }, 250);
    }
  };
  return (
    <Wrap
      className="base_switch"
      onClick={() => {
        handleClick();
      }}
    >
      <Thumb className={thumbClass} {...{ primary, checked, thumb }}>
        <i></i>
      </Thumb>
      <Track className={trackClass} {...{ primary, checked, thumb }} />
    </Wrap>
  );
};

export default Switch;
