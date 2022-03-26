/*
 * @Author: 邱彦兮
 * @Date: 2022-03-25 22:12:24
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-26 10:33:51
 * @FilePath: /Simpler-Components/src/scroll_list/index.tsx
 */

import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import { ScrollListProps } from './types';
import Wrap from './style';
import { throttle } from '@/utils/helper';
import classNames from 'classnames';

const ScrollList: React.FC<ScrollListProps> = (props) => {
  const {
    rowCount = 5,
    oddColor = 'rgb(10,39,50)',
    eventColor = 'rgb(0, 59, 81)',
    headerColor = 'rgb(0, 186, 255)',
    dataSource = [],
    columns = [],
    delay = 3000,
  } = props;

  const [rowHeight, setRowHeight] = useState(15);
  const [trigger, setTrigger] = useState(true);
  const timer = useRef<any>();
  function setScrolling() {
    setTrigger(!trigger);
  }
  useEffect(() => {
    //设置单行高度
    let ele = document.querySelector('.fancy_scroll_list_body');
    let totalHeight = ele?.getBoundingClientRect().height!;
    let height = totalHeight / rowCount;
    setRowHeight(height);
  }, []);

  useEffect(() => {
    let ele = document.querySelector('.fancy_scroll_list_body');
    //设置滚动
    $('.fancy_scroll_list_body').animate(
      { marginTop: -rowHeight + 'px' },
      600,
      () => {
        $('.fancy_scroll_list_body').css({ marginTop: 0 });
        $('.fancy_scroll_list_body>div:first-child').appendTo(
          $('.fancy_scroll_list_body'),
        );
      },
    );

    timer.current = setTimeout(() => {
      setScrolling();
      _clearTimeout();
    }, delay);

    let _clearTimeout = () => {
      clearTimeout(timer.current);
    };

    let _setScrolling = throttle(setScrolling, delay / 2);
    ele?.addEventListener('mouseenter', _clearTimeout, { once: true });
    ele?.addEventListener('mouseleave', _setScrolling, { once: true });

    return () => {
      ele?.removeEventListener('mouseenter', _clearTimeout);
      ele?.removeEventListener('mouseleave', _setScrolling);
      _clearTimeout();
    };
  }, [trigger]);

  const classes = classNames('fancy_scroll_list_body');
  return (
    <Wrap headerColor={headerColor}>
      <div className="fancy_scroll_list_header">
        {columns.map((name, index) => (
          <div className="header_item" key={index}>
            {name}
          </div>
        ))}
      </div>
      <div className="wrap">
        <div className={classes}>
          {dataSource.map((data, index) => (
            <div
              className="row"
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? eventColor : oddColor,
              }}
            >
              {data.map((d, index) => (
                <div
                  className="cell"
                  style={{
                    lineHeight: rowHeight + 'px',
                  }}
                  key={d}
                  dangerouslySetInnerHTML={{ __html: d }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
};

export default ScrollList;
