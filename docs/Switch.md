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
