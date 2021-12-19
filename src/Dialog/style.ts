/*
 * @Author: 邱彦兮
 * @Date: 2021-12-19 15:47:41
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-19 19:54:59
 * @FilePath: /Simpler-Components/src/Dialog/style.ts
 */
import styled from 'styled-components';

const InnerDialog = styled.dialog<{ width: number }>`
  width: ${(props) => props.width}px;
  border: 1px solid transparent;
  box-sizing: border-box;
  padding: 0;
  transition: all 0.5s;
  &::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
  .simpler_dialog_container {
    padding: 26px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .simpler_dialog_close {
      cursor: pointer;
      color: #00000073;
      transition: all 0.3s;
      width: 30px;
      text-align: center;
      &:hover {
        color: black;
        transform: scale(1.2);
      }
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .simpler_dialog_title {
      font-weight: 500;
      font-size: 16px;
    }
  }
  main {
    flex: 1;
  }
  footer {
    display: flex;
    justify-content: end;
  }
`;
export default InnerDialog;
