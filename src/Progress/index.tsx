/*
 * @Author: 邱彦兮
 * @Date: 2021-12-22 21:15:10
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-25 13:13:57
 * @FilePath: /Simpler-Components/src/Progress/index.tsx
 */

import classNames from 'classnames';
import React from 'react';
import Wrap from './style';
import Circle from './circle';
import { ProgressProps } from './types';

const Progress: React.FC<ProgressProps> = (props) => {
  const {
    value,
    mode = 'line',
    type = 'primary',
    label = false,
    color = '',
    bgColor = '',
    labelColor = '',
    fontSize = 20,
  } = props;

  const classes = classNames('base_fancy_progress', {
    [`fancy_loadingBar_${type}`]: !color,
    fancy_progress_custom_color: color,
    fancy_loadingBar_bar: value !== undefined,
    linear_progress: value === undefined,
  });

  const lineProgress = (
    <Wrap {...{ progress: value || 0, type, color, bgColor, labelColor }}>
      <div className="fancy_loadingBar_container">
        <div className={classes}></div>
      </div>
      {label && (
        <div className="fancy_loadingBar_label">
          {typeof label !== 'boolean' ? label : Math.floor(value || 0) + '%'}
        </div>
      )}
    </Wrap>
  );
  const circleProgress = (
    <Circle
      {...{
        value: value || 0,
        type,
        color,
        bgColor,
        label,
        labelColor,
        fontSize,
      }}
    />
  );

  return mode === 'circle' ? circleProgress : lineProgress;
};

export default Progress;
