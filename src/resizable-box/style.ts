import styled from 'styled-components';

export const Wrap = styled.div`
  &.resizable_box {
    position: absolute;
    z-index: 0;
    border: 1px dashed transparent;
    cursor: default;
  }
  &.dashed_border {
    border: 1px dashed rgba(6, 123, 239, 1);
  }

  .circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    border: 1px solid rgba(6, 123, 239, 1);
    background-color: white;
    z-index: 10;
  }
  .circle_left_top {
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
    cursor: nwse-resize;
  }
  .circle_left_bottom {
    left: 0;
    bottom: 0;
    transform: translate(-50%, 50%);
    cursor: nesw-resize;
  }
  .circle_right_top {
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
    cursor: nesw-resize;
  }
  .circle_right_bottom {
    right: 0;
    bottom: 0;
    transform: translate(50%, 50%);
    cursor: nwse-resize;
  }

  .rect {
    z-index: 8;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .rect_top,
  .rect_bottom {
    height: 6px;
  }
  .rect_top {
    top: 0px;
    transform: translateY(-50%);
    cursor: ns-resize;
  }
  .rect_bottom {
    bottom: 0px;
    transform: translateY(50%);
    cursor: ns-resize;
  }
  .rect_left,
  .rect_right {
    width: 6px;
  }
  .rect_left {
    left: 0;
    cursor: ew-resize;
    transform: translateX(-50%);
  }
  .rect_right {
    right: 0;
    top: 0;
    cursor: ew-resize;
    border-radius: 0;
    transform: translateX(50%);
  }
  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
