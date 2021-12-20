/*
 * @Author: 邱彦兮
 * @Date: 2021-12-20 21:35:37
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-20 23:39:37
 * @FilePath: /Simpler-Components/src/Steps/style.ts
 */
import styled from 'styled-components';
const Wrap = styled.div<{
  w: number;
  height: number;
  url: string;
  step: number;
  timer: number;
  duration: number;
}>`
  .simpler_steps_container {
    height: ${(props) => props.height}px;
    width: ${(props) => props.w / props.step}px;
    background: url(${(props) => props.url}) 0 0 no-repeat;
    animation: ${(props) => 'run' + props.timer} ${(props) => props.duration}s
      infinite steps(${(props) => props.step});
  }
  @keyframes run${(props) => props.timer} {
    to {
      background-position: -${(props) => props.w}px 0;
    }
  }
`;
export default Wrap;
