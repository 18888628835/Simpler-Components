/*
 * @Author: 邱彦兮
 * @Date: 2022-03-26 09:13:06
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-27 13:33:18
 * @FilePath: /Simpler-Components/src/scroll_list/style.ts
 */
import styled from 'styled-components';
const Wrap = styled.section<{ headerColor: string }>`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .fancy_scroll_list_header {
    line-height: 35px;
    width: inherit;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    background-color: ${(props) => props.headerColor};
    box-shadow: inset 0px 0px 20px rgba(4, 154, 255, 0.3);
    .header_item {
      flex: 1;
      padding-left: 10px;
    }
  }
  .wrap {
    flex: 1;
    overflow: scroll;
  }
  .fancy_scroll_list_body {
    height: 100%;
    width: inherit;
    display: flex;
    flex-direction: column;
    .row {
      display: flex;
      .cell {
        flex: 1;
        padding-left: 10px;
      }
    }
  }
`;
export default Wrap;
