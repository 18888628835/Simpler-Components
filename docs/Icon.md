# Icon 图标

## 传入 path 渲染

```tsx
import React, { useState } from 'react';
import { Icon } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Icon path="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></Icon>
    </div>
  );
};
```

## 改变颜色

```tsx
import React, { useState } from 'react';
import { Icon } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Icon
        path="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
        style={{ color: 'red' }}
      ></Icon>
      <Icon
        path="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
        style={{ color: 'green' }}
      ></Icon>
      <Icon
        path="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
        style={{ color: 'orange' }}
      ></Icon>
    </div>
  );
};
```

## 改变尺寸

```tsx
import React, { useState } from 'react';
import { Icon } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Icon
        path="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
        style={{ fontSize: '40px' }}
      ></Icon>
    </div>
  );
};
```

## 使用说明

> 原生 svg 封装，从 UI 处拿到 svg 文件，复制其 path,传递给 Icon 组件即可渲染
