/*
 * @Author: 邱彦兮
 * @Date: 2022-04-21 16:49:42
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-04-21 23:09:52
 * @FilePath: /Simpler-Components/src/Resizable-box/index.tsx
 */
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Wrap } from './style';

type Direction =
  | 'left_top'
  | 'left_bottom'
  | 'right_top'
  | 'right_bottom'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';

const ResizableBox = (props) => {
  let { minWidth = 30, minHeight = 30 } = props;
  const box = useRef<HTMLDivElement | null>(null);
  const canResize = useRef(false);
  const direction = useRef('');
  const style = useRef({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    pointX: 0,
    pointY: 0,
  });

  const onMouseDown = useCallback((currentDirection: Direction) => {
    let { left, top, width, height, right, bottom } =
      box.current!.getBoundingClientRect();
    let pointX, pointY;
    switch (currentDirection) {
      case 'left_top':
        pointX = left;
        pointY = top;
        break;
      case 'left_bottom':
        pointX = left;
        pointY = bottom;
        break;
      case 'right_top':
        pointX = right;
        pointY = top;
        break;
      case 'right_bottom':
        pointX = right;
        pointY = bottom;
        break;
      case 'top':
        pointY = top;
        break;
      case 'bottom':
        pointY = bottom;
        break;
      case 'left':
        pointX = left;

        break;
      case 'right':
        pointX = right;
        break;
    }
    style.current = { left, top, width, height, pointX, pointY, right, bottom };
    direction.current = currentDirection;
    canResize.current = true;
  }, []);
  const onMouseMove = useCallback((e) => {
    if (!canResize.current) return;

    let { left, top, width, height, right, bottom } = style.current;
    let offsetX = style.current.pointX - e.pageX;
    let offsetY = style.current.pointY - e.pageY;

    switch (direction.current) {
      case 'left_top':
        left = left - offsetX;
        top = top - offsetY;
        width = width + offsetX;
        height = height + offsetY;
        break;
      case 'left_bottom':
        left = left - offsetX;
        width = width + offsetX;
        height = height - offsetY;
        break;
      case 'right_top':
        top = top - offsetY;
        width = width - offsetX;
        height = height + offsetY;
        break;
      case 'right_bottom':
        width = width - offsetX;
        height = height - offsetY;
        break;
      case 'top':
        height = height + offsetY;
        top = top - offsetY;
        break;
      case 'bottom':
        height = height - offsetY;
        break;
      case 'left':
        width = width + offsetX;
        left = e.pageX;
        break;
      case 'right':
        width = width - offsetX;
        break;
    }
    box.current!.style.left = `${Math.min(left, right - minWidth)}px`;
    box.current!.style.top = `${Math.min(top, bottom - minHeight)}px`;
    box.current!.style.width = `${Math.max(width, minWidth)}px`;
    box.current!.style.height = `${Math.max(height, minHeight)}px`;
  }, []);

  const onMouseUp = useCallback(() => {
    canResize.current = false;
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <Wrap>
      <div className="resizable_box" ref={box}>
        {[
          'left_top',
          'left_bottom',
          'right_top',
          'right_bottom',
          'top',
          'bottom',
          'left',
          'right',
        ].map((item) => (
          <div
            key={item}
            className={`rect rect_${item}`}
            onMouseDown={() => onMouseDown(item as Direction)}
          ></div>
        ))}
      </div>
    </Wrap>
  );
};

export default ResizableBox;
