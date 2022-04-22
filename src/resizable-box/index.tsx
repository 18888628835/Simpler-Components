/*
 * @Author: 邱彦兮
 * @Date: 2022-04-21 16:49:42
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-04-22 10:42:53
 * @FilePath: /Simpler-Components/src/Resizable-box/index.tsx
 */
import { getCoords } from '@/utils/helper';
import React, { useEffect, useRef, useCallback, FC } from 'react';
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

interface ResizableBoxProps {
  /**
   * @default false
   * @description 是否隐藏
   */
  hidden: boolean;
  /**
   * @default 20
   * @description  盒子收缩后最小宽度
   */
  minWidth: number;
  /**
   * @default 20
   * @description  盒子收缩后最小高度
   */
  minHeight: number;
}
const ResizableBox: FC<ResizableBoxProps> = (props) => {
  let { minWidth = 20, minHeight = 20, hidden = false } = props;
  const box = useRef<HTMLDivElement | null>(null);
  const direction = useRef('');
  const propertiesRecord = useRef({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    pointX: 0,
    pointY: 0,
  });

  const onMouseMove = useCallback((e) => {
    let { left, top, width, height, right, bottom } = propertiesRecord.current;
    let offsetX = propertiesRecord.current.pointX - e.clientX;
    let offsetY = propertiesRecord.current.pointY - e.clientY;

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

  const onMouseDown = useCallback((e, currentDirection: Direction) => {
    // 获取元素在文档中的点位
    let { left, right, top, bottom } = getCoords(box.current);
    // 获取元素矩阵大小
    let { width, height } = box.current?.getBoundingClientRect()!;
    // 存下鼠标点击后的鼠标坐标
    let pointX = e.clientX,
      pointY = e.clientY;
    // 将所有属性都记录下来
    Object.assign(propertiesRecord.current, {
      left,
      top,
      width,
      height,
      pointX,
      pointY,
      right,
      bottom,
    });

    direction.current = currentDirection;
    document.addEventListener('mousemove', onMouseMove);
  }, []);

  const onMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <Wrap hidden={hidden}>
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
            onMouseDown={(e) => onMouseDown(e, item as Direction)}
          ></div>
        ))}
      </div>
    </Wrap>
  );
};

export default ResizableBox;
