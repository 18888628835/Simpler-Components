/*
 * @Author: 邱彦兮
 * @Date: 2021-12-20 21:31:36
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-20 23:41:20
 * @FilePath: /Simpler-Components/src/Steps/index.tsx
 */
import React from 'react';
import Wrap from './style';

type StepProps = {
  /**
   * @description 图片的宽度
   */
  width: number;
  /**
   * @description 步数
   */
  step: number;
  /**
   * @description 图片的url
   */
  url: string;
  /**
   * @description 图片的高度
   */
  height: number;
  /**
   * @description 持续时间
   * @default 1
   */
  duration?: number;
};

const Steps: React.FC<StepProps> = (props) => {
  const { width, step, url, height, duration = 1 } = props;
  const timer = Date.now();
  return (
    <Wrap {...{ w: width, step, url, height, timer, duration }}>
      <div className={'simpler_steps_container'}>{props.children}</div>
    </Wrap>
  );
};

export default Steps;
