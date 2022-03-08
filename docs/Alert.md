# Alert 弹窗

## 基础样式

```tsx
import React from 'react';
import { Alert } from 'Simpler-Components';

export default () => (
  <div>
    <Alert>default</Alert>
    <br />

    <Alert mode="success">success</Alert>
    <br />

    <Alert mode="danger">danger</Alert>
    <br />

    <Alert mode="warning">warning</Alert>
  </div>
);
```

## outline 模式

```tsx
import React from 'react';
import { Alert } from 'Simpler-Components';

export default () => (
  <div>
    <Alert variant="outline">outline</Alert>
    <br />

    <Alert variant="outline" mode="success">
      outline success
    </Alert>
    <br />

    <Alert variant="outline" mode="danger">
      outline danger
    </Alert>
    <br />

    <Alert variant="outline" mode="warning">
      outline warning
    </Alert>
  </div>
);
```

## filled 模式

```tsx
import React from 'react';
import { Alert } from 'Simpler-Components';

export default () => (
  <div>
    <Alert variant="filled">filled</Alert>
    <br />

    <Alert variant="filled" mode="success">
      filled success
    </Alert>
    <br />

    <Alert variant="filled" mode="danger">
      filled danger
    </Alert>
    <br />

    <Alert variant="filled" mode="warning">
      filled warning
    </Alert>
  </div>
);
```

## 弹窗隐藏

```tsx
import React from 'react';
import { Alert } from 'Simpler-Components';

export default () => (
  <div>
    <Alert closed>default</Alert>
    <br />

    <Alert variant="filled" mode="success" closed>
      filled success
    </Alert>
    <br />

    <Alert variant="outline" mode="danger" closed>
      outline danger
    </Alert>
  </div>
);
```

### 说明

跟 transition 组件不同的是，Alert 组件始终会在 DOM 中，当然你可以结合 transition 组件实现会被卸载的 Alert 组件

## 自定义标题

```tsx
import React from 'react';
import { Alert } from 'Simpler-Components';

export default () => (
  <div>
    <Alert title="hello world" mode="success" closed>
      success
    </Alert>
    <br />

    <Alert variant="filled" mode="danger" closed title="危险">
      filled danger
    </Alert>
    <br />

    <Alert variant="outline" mode="warning" title="警告" closed>
      warning
    </Alert>
  </div>
);
```

## 点击事件

```tsx
import React from 'react';
import { Alert } from 'Simpler-Components';

export default () => (
  <div>
    <Alert
      title="hello world"
      mode="success"
      onClick={() => {
        alert('hello');
      }}
    >
      only onClick
    </Alert>
    <br />

    <Alert
      title="hello world"
      mode="danger"
      closed
      variant="filled"
      onClick={() => {
        alert('hello');
      }}
    >
      onClick + closed
    </Alert>
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Alert } from 'Simpler-Components';

export default () => (
  <div>
    <Alert
      style={{ width: '250px' }}
      title="hello world"
      mode="success"
      variant="outline"
      onClick={() => {
        alert('hello');
      }}
    >
      style属性
    </Alert>
  </div>
);
```

<API src='src/Alert'></API>
