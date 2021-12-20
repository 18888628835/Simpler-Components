<!--
 * @Author: 邱彦兮
 * @Date: 2021-12-20 21:54:16
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-20 23:33:57
 * @FilePath: /Simpler-Components/docs/Steps.md
-->

# Steps 步进器

## 步进器实现的加载效果

```tsx
import React, { useState } from 'react';
import { Steps } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Steps
        width={800}
        height={100}
        step={8}
        url="http://dabblet.com/img/loader.png"
      />
    </div>
  );
};
```

## 步进器实现的动画效果

```tsx
import React, { useState } from 'react';
import { Steps } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Steps
        width={500}
        height={70}
        step={10}
        url="https://s.cdpn.io/79/sprite-steps.png"
      />
    </div>
  );
};
```

<API src='src/Steps'>
