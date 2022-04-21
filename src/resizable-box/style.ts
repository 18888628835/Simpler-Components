import styled from 'styled-components';

/*
 * @Author: 邱彦兮
 * @Date: 2022-04-21 16:51:25
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-04-21 23:03:38
 * @FilePath: /Simpler-Components/src/Resizable-box/style.ts
 */
export const Wrap = styled.div`
  .resizable_box {
    width: 200px;
    height: 200px;
    position: absolute;
  }
  .rect {
    width: 8px;
    height: 8px;
    position: absolute;
    border: 1px solid rgb(6, 123, 239);
    background-color: white;
  }
  .rect_left_top {
    left: 0;
    top: 0;
    transform: translate(-25%, -25%);
    cursor: nwse-resize;
  }
  .rect_left_bottom {
    left: 0;
    bottom: 0;
    transform: translate(-25%, 25%);
    cursor: nesw-resize;
  }
  .rect_right_top {
    right: 0;
    top: 0;
    transform: translate(25%, -25%);
    cursor: nesw-resize;
  }
  .rect_right_bottom {
    right: 0;
    bottom: 0;
    transform: translate(25%, 25%);
    cursor: nwse-resize;
  }
  .rect_left_top,
  .rect_left_bottom,
  .rect_right_top,
  .rect_right_bottom {
    z-index: 10;
  }
  .rect_top {
    height: 1px;
    width: 100%;
    top: -1px;
    transform: translateY(1px);
    cursor: ns-resize;
  }
  .rect_bottom {
    bottom: -1px;
    height: 1px;
    width: 100%;
    cursor: ns-resize;
  }
  .rect_left {
    width: 1px;
    height: 100%;
    left: -1px;
    cursor: ew-resize;
    transform: translateX(1px);
  }
  .rect_right {
    width: 1px;
    height: 100%;
    right: -1px;
    cursor: ew-resize;
    transform: translateX(-1px);
  }
`;
