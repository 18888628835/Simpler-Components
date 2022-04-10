/*
 * @Author: 邱彦兮
 * @Date: 2022-04-10 09:12:10
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-04-10 13:41:44
 * @FilePath: /Simpler-Components/src/v-table/style.ts
 */
import styled from 'styled-components';
import { THead } from '../Table/style';

const scrollWidth = '8px';

export const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;

  .thead {
    ${THead}
    display: flex;
    align-items: center;
  }
  .fancy_v_table_content {
    height: 100%;
    overflow-y: hidden;
    padding-right: ${scrollWidth};
    :hover {
      padding-right: 0;
      overflow-y: auto;
    }
    ::-webkit-scrollbar {
      width: ${scrollWidth};
    }

    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: ${scrollWidth};
    }

    ::-webkit-scrollbar-thumb {
      background-color: #d4aa70;
      border-radius: ${scrollWidth};
    }
    .container {
      position: relative;
    }
  }
  .fancy_v_table_row {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    border-bottom: 1px solid var(--default-bd-color);
  }
  .fancy_table_cell {
    padding-left: 8px;
    padding-right: 8px;
  }
`;
