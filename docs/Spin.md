<!--
 * @Author: 邱彦兮
 * @Date: 2021-10-12 14:05:44
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-08 23:11:02
 * @FilePath: /Simpler-Components/docs/Spin.md
-->

# Spin 加载中

## 基础样式

```tsx
import React from 'react';
import { Spin } from 'Simpler-Components';

export default () => (
  <div>
    <Spin flag={true}></Spin>
  </div>
);
```

## 自定义标题

```tsx
import React, { useState } from 'react';
import { Spin, Alert } from 'Simpler-Components';

export default () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <Spin flag={flag} title="加载中..."></Spin>
    </div>
  );
};
```

## 遮罩效果

```tsx
import React, { useState } from 'react';
import { Spin, Alert } from 'Simpler-Components';

export default () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <Spin flag={flag} title="加载中...">
        <Alert>
          这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字
        </Alert>
      </Spin>
    </div>
  );
};
```

<API src='src/Spin'></API>
