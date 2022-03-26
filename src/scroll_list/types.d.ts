/*
 * @Author: 邱彦兮
 * @Date: 2022-03-26 00:26:57
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-26 09:02:48
 * @FilePath: /Simpler-Components/src/scroll_list/types.d.ts
 */
export type ScrollListProps = {
  /**
   * @description 列表展示多少行
   * @default  5
   */
  rowCount?: number;
  /**
   * @description 列表的数据
   * @default []
   */
  dataSource: Array<string>[];
  /**
   * @description 表头
   * @default []
   */
  columns: Array<string>;
  /**
   * @description 偶数行的颜色
   * @default rgb(0, 59, 81)
   */
  eventColor: string;
  /**
   * @description 奇数行的颜色
   * @default rgb(10,39,50)
   */
  oddColor: string;
  /**
   * @description 多久轮播一次
   * @default  3000
   */
  delay: number;
  /**
   * @description 表头颜色
   * @default  rgb(0, 186, 255)
   */
  headerColor: string;
};
