/*
 * @Author: 邱彦兮
 * @Date: 2022-03-08 22:47:25
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-08 22:55:53
 * @FilePath: /Simpler-Components/src/AutoComplete/types.d.ts
 */
// 需要筛选的数据item 项目必须包含 value 属性
interface DataSourceObj {
  value: string;
}
// 泛型，包含 value:string 属性的对象，其他属性不限
export type DataSourceType<T = {}> = T & DataSourceObj;

// 基础 props
export type BaseAutoCompleteProps = {
  /**
   * @description 选择事件
   */
  onSelect?: (e?: any) => void;
  /**
   * @description 筛选选项
   */
  filterOption: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  /**
   * @description 是否可置空
   */
  empty?: boolean;
  /**
   * @description 选项
   */
  renderOption?: (value: string) => React.ReactElement;
};
