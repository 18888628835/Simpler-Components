# Svg 图标

## 使用说明

这个组件是我用来简化`Iconfont`的引入流程的

假设你已经知道 Iconfont 中的 symbol 是怎样使用的了。如果不知道，可以看这里[Iconfont 使用](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.17&helptype=code)

iconfont 配合 symbol 使用时，需要我们手动复制粘贴三次代码，非常麻烦。

于是我直接写了一个名字叫 createSvgScript 的函数，你只需要获得 Iconfont 给你的引入地址，然后通过一个数组调用该函数，就不用再复制代码了。

## 使用方式

1.首先引入 createSvgScript 函数

```javascript
createSvgScript(['//at.alicdn.com/t/font_2334418_rvcbq0a2z4s.js']);
```

2.然后将你获取到的`icon-name`通过`svgName`属性传给 Svg 组件，就可以看到屏幕中已经出现了你想要的图标。

## 传入图标名

```tsx
import React, { useState } from 'react';
import { Svg, createSvgScript } from 'Simpler-Components';

createSvgScript(['//at.alicdn.com/t/font_2334418_rvcbq0a2z4s.js']);

export default () => {
  return (
    <div>
      <Svg svgName="icon-qianjin"></Svg>
    </div>
  );
};
```

## 调整颜色

```tsx
import React, { useState } from 'react';
import { Svg, createSvgScript } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Svg
        svgName="icon-qianjin"
        style={{ color: 'red', marginRight: '10px' }}
      />
      <Svg
        svgName="icon-qianjin"
        style={{ color: 'green', marginRight: '10px' }}
      />
      <Svg svgName="icon-qianjin" style={{ color: 'orange' }} />
    </div>
  );
};
```

## 调整尺寸

```tsx
import React, { useState } from 'react';
import { Svg, createSvgScript } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Svg
        svgName="icon-qianjin"
        style={{ fontSize: '20px', marginRight: '10px' }}
      />
      <Svg svgName="icon-qianjin" style={{ fontSize: '30px' }} />
    </div>
  );
};
```
