<!--
 * @Author: 邱彦兮
 * @Date: 2021-10-12 14:30:48
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-08 23:15:38
 * @FilePath: /Simpler-Components/docs/Switch.md
-->

# Switch 开关

## 两种样式

```tsx
import React, { useState } from 'react';
import { Switch } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Switch />
      <Switch primary />
    </div>
  );
};
```

## checked

```tsx
import React, { useState } from 'react';
import { Switch } from 'Simpler-Components';

export default () => {
  return (
    <div>
      <Switch
        checked
        onChange={(value) => {
          alert(`now value is ${value}`);
        }}
      />
    </div>
  );
};
```

## onChange 事件

```tsx
import React, { useState } from 'react';
import { Switch } from 'Simpler-Components';

export default () => {
  const status = useState(false);
  return (
    <div>
      <Switch
        status={true}
        onChange={(value) => {
          alert(`status is ${value}`);
        }}
      />
      toggle me twice!
    </div>
  );
};
```

<API src='src/Switch'></API>
