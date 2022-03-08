/*
 * @Author: 邱彦兮
 * @Date: 2022-03-08 22:22:58
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-08 22:59:30
 * @FilePath: /Simpler-Components/src/Input/dummy/index.tsx
 */
import React from 'react';

export type InputProps = {
  /**
   *@description 禁止输入
   */
  disabled?: boolean;
  /**
   *@description 尺寸
   */
  size?: 'large' | 'small';
  /**
   *@description 自定义icon 图标
   */
  icon?: React.ReactNode;
  /**
   *@description 后缀图标
   */
  addonAfter?: React.ReactNode | string;
  /**
   *@description 前缀图标
   */
  addonBefore?: React.ReactNode | string;
  className?: string;
};

const Input: React.FC<InputProps> = () => {
  return <div>index</div>;
};

export default Input;
