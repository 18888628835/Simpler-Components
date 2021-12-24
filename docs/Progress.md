<!--
 * @Author: 邱彦兮
 * @Date: 2021-12-22 21:29:10
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-24 15:47:26
 * @FilePath: /Simpler-Components/docs/Progress.md
-->

# Progress 进度条

## 基础样式

```tsx
import React from 'react';
import { Progress } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Progress value={33} type="success" />
      <br />
      <Progress value={60} type="danger" />
      <br />
      <Progress value={90} type="primary" />
    </div>
  );
};
```

## 不定量的进度条

```tsx
import React, { useState, useEffect } from 'react';
import { Progress, Button } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Progress />
      <br />
      <Progress type="success" />
      <br />
      <Progress color="rgb(255, 0, 128)" bgColor="#F2F2F2" />
      <br />
    </div>
  );
};
```

## 定量的线性进度条

```tsx
import React, { useState, useEffect } from 'react';
import { Progress, Button } from 'Simpler-Components';

export default () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Progress value={progress} type="primary" />
    </div>
  );
};
```

## 显示文字

```tsx
import React, { useState, useEffect } from 'react';
import { Progress, Button } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Progress value={88} type="success" label />
    </div>
  );
};
```

## 自定义颜色

```tsx
import React, { useState, useEffect } from 'react';
import { Progress, Button } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Progress value={88} label color="rgb(255, 0, 128)" bgColor="#F2F2F2" />
    </div>
  );
};
```

<API src='src/Progress'></API>
