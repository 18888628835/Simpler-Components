/*
 * @Author: 邱彦兮
 * @Date: 2021-12-23 21:48:56
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-24 15:46:33
 * @FilePath: /Simpler-Components/src/Progress/types.d.ts
 */
type ProgressProps = {
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
   * @description 是否需要文字标签
   * @default false
   */
  label?: boolean;
  /**
   * @description 自定义进度条颜色
   */
  color?: string;
  /**
   * @description 自定义背景颜色
   */
  bgColor?: string;
};
export default ProgressProps;
