/*
 * @Author: 邱彦兮
 * @Date: 2022-01-18 20:49:57
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-18 22:34:34
 * @FilePath: /Simpler-Components/src/Table/types.d.ts
 */
export type columnsProps = {
  /**
   * @description 映射字段
   */
  dataIndex: React.Key;
  /**
   * @description 字段名
   */
  title: string;
  /**
   * @description 自定义render
   */
  render?: (text, record) => React.ReactNode;
  /**
   * @description React的key
   */
  key?: string | number;
  /**
   * @description React的key
   */
  width?: string | number;
};

export type TableProps = {
  /**
   * @description 表格标题
   */
  columns: columnsProps[];
  /**
   * @description 表格数据
   */
  dataSource: Array<any>;
  /**
   * @description 每行的key
   */
  rowKey?: string;
};
