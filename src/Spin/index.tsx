/*
 * @Author: 邱彦兮
 * @Date: 2021-10-12 14:04:17
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-08 23:10:30
 * @FilePath: /Simpler-Components/src/Spin/index.tsx
 */
import classNames from 'classnames';
import React, { FC } from 'react';

import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #409eff;
  position: relative;
  .children-wrap {
    background-color: white;
    opacity: 0.3;
    z-index: 0;
  }
  .Spin-container {
    position: absolute;
    text-align: center;
    z-index: 2;
  }
  .display {
    display: none;
  }
  .Spin-svg {
    transform-origin: center center;
    width: 30px; /*设置svg显示区域大小*/
    height: 30px;
  }
  .Spin-default {
    animation: SpinRotate 1.5s ease-in-out infinite;
  }
  .Spin-circle {
    animation: SpinRotate 1s linear infinite;
  }
  .Spin-moon {
    animation: SpinRotate 1s linear infinite;
  }
  .path {
    stroke: #409eff; /*给画笔设置一个颜色*/
    stroke-width: 3; /*设置线条的宽度*/
    stroke-dasharray: 95, 126; /*设置实现长95，虚线长126*/
    stroke-dashoffset: 0; /*设置虚线的偏移位置*/
    transition: all 0.3s;
    animation: ui-Spin 1.5s ease-in-out infinite;
  }
  @keyframes SpinRotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes ui-Spin {
    0% {
      stroke-dasharray: 1, 126; /*实线部分1，虚线部分126*/
      stroke-dashoffset: 0; /*前面1/126显示实线，后面125显示空白*/
    }

    50% {
      stroke-dasharray: 95, 126; /*实线部分95，虚线部分126*/
      stroke-dashoffset: -31px; /*顺时针偏移31/126，即前31/126显示空白，后面3/4显示线条*/
    }

    100% {
      stroke-dasharray: 6, 126; /*实线部分6，虚线部分120*/
      stroke-dashoffset: -120px; /*最后顺时针偏移120/126，即前120/126显示空白，后面6点显示线条部分*/
    }
  }
`;
export type SpinProps = {
  /**
   * @description 开关
   */
  flag?: boolean;
  /**
   * @description 标题
   */
  title?: string;
};
const Spin: FC<SpinProps> = (props) => {
  const { flag = false } = props;
  const classes = classNames('Spin-container', {
    display: !flag,
  });

  return (
    <Wrap>
      <div className={classes}>
        <svg viewBox="0 0 50 50" className="Spin-svg Spin-default">
          <circle cx="25" cy="25" r="20" fill="none" className="path"></circle>
        </svg>
        <p style={{ whiteSpace: 'nowrap' }}>{props.title}</p>
      </div>
      <div className={flag ? 'children-wrap' : ''}>{props.children}</div>
    </Wrap>
  );
};

export default Spin;
