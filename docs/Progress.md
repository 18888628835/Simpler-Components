<!--
 * @Author: 邱彦兮
 * @Date: 2021-12-22 21:29:10
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-25 13:39:05
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
      <br />
      <div style={{ display: 'flex' }}>
        <Progress mode="circle" />
        <Progress value={33} mode="circle" type="success" />
        <Progress value={60} mode="circle" type="danger" />
        <Progress value={90} mode="circle" />
      </div>
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
          clearInterval(timer);
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Progress value={progress} type="primary" />
      <br />
      <Progress value={progress} type="primary" mode="circle" />
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
      <Progress value={66} label />
      <br />
      <Progress value={88} label="进行中" type="danger" />
      <br />
      <Progress value={30} label={30} type="success" />
      <br />
      <div style={{ display: 'flex' }}>
        <Progress value={66} label type="success" mode="circle" type="danger" />
        <Progress
          value={88}
          label="进行中"
          type="success"
          bgColor="white"
          mode="circle"
        />
        <Progress
          value={88}
          label={88}
          type="primary"
          bgColor="white"
          mode="circle"
        />
      </div>
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
      <Progress value={88} color="rgb(255, 0, 128)" bgColor="#F2F2F2" />
      <br />
      <Progress value={88} bgColor="#F2F2F2" />
      <br />
      <Progress
        value={88}
        bgColor="#F2F2F2"
        label
        labelColor="rgb(0, 191, 255)"
      />
      <br />
      <div style={{ display: 'flex' }}>
        <Progress value={88} color="rgb(0, 191, 255)" mode="circle" />
        <Progress value={88} bgColor="white" mode="circle" />
        <Progress
          value={88}
          type="success"
          label
          labelColor="rgb(0, 191, 255)"
          mode="circle"
        />
      </div>
      <br />
    </div>
  );
};
```

## circle 尺寸自适应

```tsx
import React, { useState, useEffect } from 'react';
import { Progress, Button } from 'Simpler-Components';

export default () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '180px', height: '180px' }}>
        <Progress fontSize={28} value={66} label mode="circle" />
      </div>
      <div style={{ width: '150px', height: '150px' }}>
        <Progress value={66} fontSize={24} label type="success" mode="circle" />
      </div>
      <div style={{ width: '100px', height: '100px' }}>
        <Progress value={66} label type="danger" mode="circle" />
      </div>
    </div>
  );
};
```

## 动态进度条

> 会变的进度条，才是好进度条

```tsx
import React, { useState, useEffect } from 'react';
import { Progress, Button } from 'Simpler-Components';

export default () => {
  const [state, setState] = useState(80);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Progress value={state} label mode="circle" />
      <Progress
        type="danger"
        value={state}
        label={state === 100 ? '完成' : true}
        mode="circle"
      />
      <Progress value={state} label={state} mode="circle" />
      <Progress
        value={state}
        label={state === 100 ? 'DONE' : state}
        mode="circle"
        type="danger"
      />

      <Button
        btnType="primary"
        onClick={() => {
          setState((oldState) => {
            if (oldState === 100) {
              return 0;
            }
            return oldState + 20;
          });
        }}
      >
        请点击
      </Button>
    </div>
  );
};
```

<API src='src/Progress'></API>
