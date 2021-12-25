/*
 * @Author: 邱彦兮
 * @Date: 2021-12-23 21:48:56
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-25 13:13:45
 * @FilePath: /Simpler-Components/src/Progress/types.d.ts
 */

export type ProgressProps = {
  /**
   * @description 模式
   * @default line
   */
  mode?: 'line' | 'circle';
  /**
   * @description 进度值
   */
  value?: number;
  /**
   * @description 预设样式类型
   * @default success
   */
  type?: 'success' | 'danger' | 'primary';
  /**
   * @description 文字标签
   * @default false
   */
  label?: boolean | number | string;
  /**
   * @description 自定义进度条颜色
   */
  color?: string;
  /**
   * @description 自定义背景颜色
   */
  bgColor?: string;
  /**
   * @description 自定义文字颜色
   */
  labelColor?: string;
  /**
   * @description circle组件的文字尺寸
   * @default 20
   */
  fontSize?: number;
};
