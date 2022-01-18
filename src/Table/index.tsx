/*
 * @Author: 邱彦兮
 * @Date: 2022-01-07 14:59:05
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-18 22:16:46
 * @FilePath: /Simpler-Components/src/Table/index.tsx
 */
import React from 'react';
import { Wrap, Td } from './style';
import { TableProps } from './types';

const Table: React.FC<TableProps> = (props) => {
  const { columns, dataSource, rowKey = '' } = props;

  return (
    <Wrap>
      <thead>
        <tr>
          {columns.map(({ title, key }, index) => (
            <th className="fancy_table_cell" key={key || index}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((record) => {
          return (
            <tr key={record.key || record[rowKey]}>
              {columns.map(({ dataIndex, render }, index) => (
                <Td className="fancy_table_cell" key={index}>
                  {render
                    ? render(record[dataIndex], record)
                    : record[dataIndex]}
                </Td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Wrap>
  );
};

export default Table;
