/*
 * @Author: 邱彦兮
 * @Date: 2021-12-22 21:15:38
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-24 15:46:10
 * @FilePath: /Simpler-Components/src/Progress/style.ts
 */
import styled from 'styled-components';
const Wrap = styled.section<{
  progress: number;
  type: string;
  color: string;
  bgColor: string;
}>`
  display: flex;
  align-items: center;
  .fancy_loadingBar_container {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    height: 6px;
    width: 100%;
    background-color: ${(props) => {
      return props.bgColor || 'var(--' + props.type + '-container-color)';
    }};
  }
  .base_fancy_progress {
    border-radius: 4px;
    height: 100%;
    transition: all 0.3s;
  }
  .fancy_loadingBar_label {
    text-align: center;
    min-width: 35px;
    margin-left: 3px;
    color: var(--label-primary-color);
  }
  .fancy_loadingBar_bar {
    width: ${(props) => Math.min(props.progress, 100)}%;
  }
  .fancy_progress_custom_color {
    background-color: ${(props) => props.color};
  }
  .fancy_loadingBar_success {
    background-color: var(--success-bg-color);
  }
  .fancy_loadingBar_danger {
    background-color: var(--danger-bg-color);
  }
  .fancy_loadingBar_primary {
    background-color: var(--primary-bg-color);
  }
  .linear_progress {
    width: auto;
    animation: progress 1.5s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  @keyframes progress {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }
`;
export default Wrap;
