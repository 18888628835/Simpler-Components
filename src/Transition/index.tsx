/*
 * @Author: 邱彦兮
 * @Date: 2021-10-12 14:45:49
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-08 23:19:01
 * @FilePath: /Simpler-Components/src/Transition/index.tsx
 */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Wrap } from './_styleTransition';
import classnames from 'classnames';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName =
  | 'alert'
  | 'LeftIn-RightOut'
  | 'TopIn-BottomOut'
  | 'BottomIn-TopOut';

type BaseTransitionProps = {
  /**
   * @description 预设的动画效果
   */
  animation?: AnimationName;
  /**
   * @description 是否显示
   */
  showData: boolean;
};
export type TransitionProps = BaseTransitionProps & CSSTransitionProps;
/* 这个组件是基于"React-CSSTransition"的封装，我这里是直接写好了一套样式，直接传 animation 属性，我给它赋到 className 上，然后写好了 css 样式 */
const Transition: React.FC<TransitionProps> = (props) => {
  const { className, animation, children, showData, ...restProps } = props;
  const classes = classnames(className);
  return (
    <Wrap>
      <CSSTransition
        in={showData}
        classNames={className ? classes : animation}
        {...restProps}
      >
        <div className="commonStyle">{children}</div>
      </CSSTransition>
    </Wrap>
  );
};
// 默认直接开启 CSSTransition的appear跟unmountOnExit属性以支持组件的消失和出现
Transition.defaultProps = { appear: true, unmountOnExit: true };
export default Transition;
