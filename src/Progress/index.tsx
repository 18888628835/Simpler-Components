/*
 * @Author: 邱彦兮
 * @Date: 2021-12-22 21:15:10
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-24 15:46:43
 * @FilePath: /Simpler-Components/src/Progress/index.tsx
 */

import classNames from 'classnames';
import React from 'react';
import Wrap from './style';
import ProgressProps from './types';

const Progress: React.FC<ProgressProps> = (props) => {
  const {
    value,
    type = 'primary',
    label = false,
    color = '',
    bgColor = '',
  } = props;

  const classes = classNames('base_fancy_progress', {
    [`fancy_loadingBar_${type}`]: !color,
    fancy_progress_custom_color: color,
    fancy_loadingBar_bar: value !== undefined,
    linear_progress: value === undefined,
  });

  return (
    <Wrap {...{ progress: value || 0, type, color, bgColor }}>
      <div className="fancy_loadingBar_container">
        <div className={classes}></div>
      </div>
      {label && (
        <div className="fancy_loadingBar_label">
          {Math.floor(Number(value || 0))}%
        </div>
      )}
    </Wrap>
  );
};

export default Progress;
