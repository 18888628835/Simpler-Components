/*
 * @Author: 邱彦兮
 * @Date: 2022-01-18 20:42:37
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-18 22:27:33
 * @FilePath: /Simpler-Components/src/Table/style.ts
 */
import styled from 'styled-components';
export const Wrap = styled.table`
  width: 100%;
  margin-bottom: 32px;
  thead {
    min-height: 54px;
    font-weight: 500;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),
      #ffffff;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.08);
  }
  tbody {
    tr {
      border-bottom: #e8e8e8 1px solid;
      &:hover {
        background-color: #f9f9f9;
      }
    }
  }
  .fancy_table_cell {
    min-width: 50px;
    padding: 16px;
    text-align: left;
  }
`;
export const Td = styled.td``;
