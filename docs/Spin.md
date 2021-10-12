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
