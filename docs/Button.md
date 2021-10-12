# Button 按钮

## 默认样式

```tsx
import React from 'react';
import { Button, ButtonProps } from 'Simpler-Components';

export default () => (
  <div>
    <Button>default</Button>
    <Button btnType="primary">primary</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link">link</Button>
  </div>
);
```

## 边框模式

```tsx
import React from 'react';
import { Button, ButtonProps } from 'Simpler-Components';

export default () => (
  <div>
    <Button>default</Button>
    <Button variant="outline">default</Button>
    <Button size="small" btnType="primary" variant="outline">
      small
    </Button>
    <Button size="large" variant="outline" btnType="danger">
      large
    </Button>
  </div>
);
```

## 三种尺寸

```tsx
import React from 'react';
import { Button, ButtonProps } from 'Simpler-Components';

export default () => (
  <div>
    <Button>default</Button>
    <Button variant="outline">default</Button>
    <Button size="small" btnType="primary" variant="outline">
      small
    </Button>
    <Button size="large" variant="outline" btnType="danger">
      large
    </Button>
  </div>
);
```

## disabled

```tsx
import React from 'react';
import { Button, ButtonProps } from 'Simpler-Components';

export default () => (
  <div>
    <Button disabled>disabled</Button>
    <Button disabled variant="outline">
      disabled
    </Button>
    <Button disabled variant="outline" size="large">
      disabled
    </Button>
  </div>
);
```

## 点击事件

```tsx
import React from 'react';
import { Button, ButtonProps } from 'Simpler-Components';

export default () => (
  <div>
    <Button
      btnType="primary"
      onClick={() => {
        alert('click');
      }}
    >
      click
    </Button>
    <Button
      onClick={() => {
        alert('click');
      }}
      variant="outline"
    >
      click
    </Button>
    <Button
      disabled
      onClick={() => {
        alert('click');
      }}
    >
      disabled will unClick
    </Button>
  </div>
);
```

## href 跳转

```tsx
import React from 'react';
import { Button, ButtonProps } from 'Simpler-Components';

export default () => (
  <div>
    <Button btnType="link" href="https://www.baidu.com/">
      跳转
    </Button>
  </div>
);
```
