/*
 * @Author: 邱彦兮
 * @Date: 2022-01-19 21:13:18
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-19 21:49:00
 * @FilePath: /Simpler-Components/src/BackToTop/style.ts
 */
import styled from 'styled-components';

const Wrap = styled.div`
  &.fancy_back_to_top {
    position: fixed;
    display: flex;
    bottom: 50px;
    right: 50px;
    cursor: pointer;
  }
`;
export default Wrap;
