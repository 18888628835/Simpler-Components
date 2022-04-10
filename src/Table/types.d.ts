/*
 * @Author: 邱彦兮
 * @Date: 2022-01-18 20:49:57
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-04-10 11:44:00
 * @FilePath: /Simpler-Components/src/Table/types.d.ts
 */
type RecordType = { [key: string]: any };
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
  render?: (
    text: any,
    record: RecordType,
    rowIndex?: number,
  ) => React.ReactNode;
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
  dataSource: Array<RecordType>;
  /**
   * @description 每行的key
   */
  rowKey?: string;
};
