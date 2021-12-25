/*
 * @Author: 邱彦兮
 * @Date: 2021-12-24 21:09:44
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-25 13:39:23
 * @FilePath: /Simpler-Components/src/Progress/circle.tsx
 */
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import {
  PolarComponent,
  TitleComponent,
  PolarComponentOption,
  TitleComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { ProgressProps } from './types';

type ECOption = echarts.ComposeOption<
  BarSeriesOption | PolarComponentOption | TitleComponentOption
>;

// 注册必须的组件
echarts.use([PolarComponent, TitleComponent, BarChart, CanvasRenderer]);

enum ColorEnum {
  SUCCESS = '#52c41a',
  DANGER = 'rgb(220, 0, 78)',
  PRIMARY = '#1976d2',
}
const renderText = function (data, label) {
  return typeof label !== 'boolean'
    ? label
    : `${data === 100 ? '✅' : data + '%'}`;
};

const createCircle = (
  myChart,
  data,
  { color, bgColor },
  label,
  labelColor,
  fontSize,
) => {
  const option: ECOption = {
    polar: {
      radius: ['80%', '100%'],
      center: ['50%', '50%'],
    },
    title: {
      show: label,
      text: renderText(data, label),
      left: 'center',
      top: 'middle',
      textStyle: {
        fontSize: fontSize,
        color: labelColor || 'rgba(0, 0, 0, 0.5)',
      },
    },
    angleAxis: {
      max: 100,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      show: false,
    },
    series: {
      type: 'bar',
      roundCap: true,
      showBackground: true,
      backgroundStyle: {
        color: bgColor,
      },
      data: [data],
      coordinateSystem: 'polar',
      itemStyle: {
        color: data === 100 ? ColorEnum.SUCCESS : color,
      },
    },
  };

  option && myChart.setOption(option);
};
const initCircle = (dom) => {
  if (!dom) {
    return;
  }
  echarts.dispose(dom);
  var myChart = echarts.init(dom);

  return myChart;
};

const Circle: React.FC<ProgressProps> = (props) => {
  const {
    value,
    type = 'primary',
    label = false,
    color,
    bgColor,
    labelColor,
    fontSize,
  } = props;

  let typeMap = {
    success: {
      color: ColorEnum.SUCCESS,
      bgColor: bgColor || 'rgba(98, 185, 46, 0.3)',
    },
    danger: {
      color: ColorEnum.DANGER,
      bgColor: bgColor || 'rgba(221, 122, 156, 0.6)',
    },
    primary: {
      color: ColorEnum.PRIMARY,
      bgColor: bgColor || 'rgb(167, 202, 237)',
    },
  };

  const renderColor = !color
    ? typeMap
    : {
        custom: {
          color: color,
          bgColor: bgColor || typeMap[type].bgColor,
        },
      };

  const ref = useRef<echarts.EChartsType>();
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current = initCircle(domRef.current);

    createCircle(
      ref.current,
      value,
      color ? renderColor['custom'] : renderColor[type],
      label,
      labelColor,
      fontSize,
    );
  }, []);

  useEffect(() => {
    ref.current &&
      ref.current.setOption({
        title: {
          text: renderText(value, label),
        },
        series: {
          data: [value],
          itemStyle: {
            color:
              value === 100
                ? ColorEnum.SUCCESS
                : color
                ? renderColor['custom'].color
                : renderColor[type].color,
          },
        },
      });
  }, [value]);

  return (
    <div
      ref={domRef}
      style={{
        minWidth: '120px',
        minHeight: '120px',
        width: 'inherit',
        height: 'inherit',
      }}
    ></div>
  );
};
export default Circle;
