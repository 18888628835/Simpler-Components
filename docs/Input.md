<!--
 * @Author: 邱彦兮
 * @Date: 2021-10-12 15:22:55
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-16 16:57:26
 * @FilePath: /Simpler-Components/docs/Input.md
-->

# Input 输入框

## 基础样式

```tsx
import React, { useState } from 'react';
import { Input } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Input placeholder="Base" />
    </div>
  );
};
```

## 禁止输入

```tsx
import React, { useState } from 'react';
import { Input } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Input placeholder="disabled" disabled />
    </div>
  );
};
```

## 三种尺寸

```tsx
import React, { useState } from 'react';
import { Input } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Input size="small" placeholder="small" />
      <br />
      <Input placeholder="normal" />
      <br />
      <Input size="large" placeholder="large" />
    </div>
  );
};
```

## 前缀与后缀

```tsx
import React, { useState } from 'react';
import { Input } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Input placeholder="addonBefore" addonBefore={'http://'} />
      <br />
      <Input placeholder="addonAfter" addonAfter={'@qq.com'} />
      <br />
      <Input
        placeholder="addonAfter"
        addonAfter={'.com'}
        addonBefore={'http://'}
      />
    </div>
  );
};
```

## 图标

```tsx
import React, { useState } from 'react';
import { Input, Icon } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Input
        placeholder="icon"
        icon={<Icon path="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></Icon>}
      />
    </div>
  );
};
```

<API src='src/Input'></API>
