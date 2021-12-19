/*
 * @Author: 邱彦兮
 * @Date: 2021-12-19 15:38:39
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-19 15:45:19
 * @FilePath: /Simpler-Components/src/DashboardScale/style.ts
 */
import styled from 'styled-components';
const Section = styled.section<{
  scale: number;
}>`
  box-sizing: border-box;
  position: absolute;
  transition: transform 0.5s;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%) scale(${(props) => props.scale});
`;
export default Section;
