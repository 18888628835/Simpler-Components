# ResizableBox 可伸缩盒子

## 可伸缩盒子

```tsx
import React, { useState } from 'react';
import { ResizableBox, Button } from 'Simpler-Components';

export default () => {
  const [allowResize, setAllowResize] = useState(true);
  return (
    <div style={{ height: '300px', maxWidth: '300px' }}>
      <ResizableBox style={{ backgroundColor: 'rgb(243,235,235)' }}>
        <div style={{ padding: '10px', width: '100%', height: '100%' }}>
          点击我，你就可以对我进行放大缩小
        </div>
      </ResizableBox>
    </div>
  );
};
```

<API src='src/resizable-box'>
