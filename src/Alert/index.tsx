/*
 * @Author: 邱彦兮
 * @Date: 2021-10-12 10:22:14
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-08 22:20:21
 * @FilePath: /Simpler-Components/src/Alert/index.tsx
 */
import classnames from 'classnames';
import React, { useState } from 'react';
import { Wrap } from './_style';
import 'animate.css';

export enum AlertVariant {
  Outline = 'outline',
  Fill = 'filled',
}
export type AlertProps = {
  /**
   * @description 模式
   * @default default
   */
  mode: 'success' | 'default' | 'danger' | 'warning';
  children: React.ReactNode;
  className: string;
  /**
   * @description 边框或填充样式
   */
  variant: 'outline' | 'filled';
  /**
   * @description 隐藏
   */
  closed: boolean;
  /**
   * @description 标题
   */
  title: string;
  style: React.CSSProperties;
  /**
   * @description 点击右上角隐藏按钮
   */
  onClick?: (args?: any) => void;
};
// 需要引入<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
const Alert: React.FC<Partial<AlertProps>> = (props) => {
  const { mode, children, className, variant, closed, title, style, onClick } =
    props;
  const [disabled, setDisabled] = useState<boolean>(false);

  const classes = classnames('ale', className, 'animate__animated', {
    [`ale-${mode}`]: mode,
    [`ale-${variant}-${mode}`]: variant,
    [`ale-${variant}`]: variant,
    animate__fadeOut: disabled,
  });

  return (
    <Wrap className={classes} style={style}>
      <span>
        {title && <div className="ale-title">{title}</div>}
        {children}
      </span>
      {(closed || onClick) && (
        <span>
          <span
            className="ale-closed"
            onClick={() => {
              if (closed) {
                setDisabled(true);
              }
              if (onClick) {
                onClick();
              }
            }}
          >
            X
          </span>
        </span>
      )}
    </Wrap>
  );
};
Alert.defaultProps = { mode: 'default' };
export default Alert;
