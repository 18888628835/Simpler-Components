/*
 * @Author: 邱彦兮
 * @Date: 2022-03-25 22:12:24
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-27 13:41:48
 * @FilePath: /Simpler-Components/src/scroll_list/index.tsx
 */

import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import { ScrollListProps } from './types';
import Wrap from './style';
import classNames from 'classnames';

const ScrollList: React.FC<ScrollListProps> = (props) => {
  const {
    rowCount = 5,
    oddColor = 'rgb(10,39,50)',
    eventColor = 'rgb(0, 59, 81)',
    headerColor = 'rgb(0, 186, 255)',
    dataSource = [],
    columns = [],
    delay = 2000,
  } = props;

  const [rowHeight, setRowHeight] = useState(0);
  const timer = useRef<any>();

  useEffect(() => {
    //设置单行高度
    let ele = document.querySelector('.fancy_scroll_list_body');
    let totalHeight = ele?.getBoundingClientRect().height!;
    let _rowHeight = totalHeight / rowCount;
    setRowHeight(_rowHeight);

    //设置动画
    function setAnimation(rowHeight) {
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
    }
    //轮播滚动
    const _setScroll = () => {
      timer.current = setInterval(setAnimation, delay, _rowHeight);
    };
    //清除定时器
    const _clearTimeout = () => {
      clearTimeout(timer.current);
    };

    _setScroll();
    ele?.addEventListener('mouseenter', _clearTimeout);
    ele?.addEventListener('mouseleave', _setScroll);
    return () => {
      _clearTimeout();
      ele?.removeEventListener('mouseenter', _clearTimeout);
      ele?.removeEventListener('mouseleave', _setScroll);
    };
  }, []);

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
