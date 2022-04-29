# ResizableBox 可伸缩盒子

## 可伸缩盒子

```tsx
import React, { useState } from 'react';
import { ResizableBox, Button } from 'Simpler-Components';

export default () => {
  return (
    <div style={{ height: '300px', maxWidth: '300px' }}>
      <ResizableBox style={{ backgroundColor: 'rgb(243,235,235)' }}>
        <div
          style={{
            padding: '10px',
            width: '100%',
          }}
        >
          点击我，你就可以对我进行放大缩小
        </div>
      </ResizableBox>
    </div>
  );
};
```

## rect 预设位置和大小

```tsx
import React, { useState } from 'react';
import { ResizableBox, Button } from 'Simpler-Components';

export default () => {
  return (
    <div style={{ height: '300px', maxWidth: '300px' }}>
      <ResizableBox
        rect={{ width: 100, height: 100, left: 520, top: 820 }}
        style={{ backgroundColor: 'rgb(243,235,235)' }}
      >
        <div
          style={{
            padding: '10px',
            width: '100%',
          }}
        >
          点击我，你就可以对我进行放大缩小
        </div>
      </ResizableBox>
    </div>
  );
};
```

## limit 控制界限

即使放大了也不会超出界限

```tsx
import React, { useState } from 'react';
import { ResizableBox, Button } from 'Simpler-Components';

export default () => {
  return (
    <div
      style={{ height: '300px', maxWidth: '300px', border: '1px solid red' }}
    >
      <ResizableBox
        rect={{ width: 100, height: 100, left: 520, top: 1305 }}
        limit={{ left: 344, top: 1305, right: 642, bottom: 1605 }}
        style={{ backgroundColor: 'rgb(243,235,235)' }}
      >
        <div
          style={{
            padding: '10px',
            width: '100%',
          }}
        >
          点击我，你就可以对我进行放大缩小
        </div>
      </ResizableBox>
    </div>
  );
};
```

## onChange 受控组件

你可能需要在父组件上控制组件的位置、大小，那么请使用 onChange 来让组件受控

```tsx
import React, { useState } from 'react';
import { ResizableBox, Button } from 'Simpler-Components';

export default () => {
  const [rect, setRect] = useState({
    width: 100,
    height: 100,
    left: 520,
    top: 1863,
  });
  return (
    <div
      style={{ height: '300px', maxWidth: '300px', border: '1px solid red' }}
    >
      <ResizableBox
        onChange={(newRect) => setRect(newRect)}
        rect={rect}
        limit={{ left: 344, top: 1863, right: 642, bottom: 2161 }}
        style={{ backgroundColor: 'rgb(243,235,235)' }}
      >
        <div
          style={{
            padding: '10px',
            width: '100%',
          }}
        >
          点击我，你就可以对我进行放大缩小
        </div>
      </ResizableBox>
    </div>
  );
};
```

## relative

此组件默认相对于 document 移动，如果父容器设置了 position:relative 等定位，则需要将 relative 设置为 true。
此时请按照父盒子的宽高设置 limit。

```tsx
import React, { useState } from 'react';
import { ResizableBox, Button } from 'Simpler-Components';

export default () => {
  const [rect, setRect] = useState({
    width: 100,
    height: 100,
    left: 20,
    top: 50,
  });
  return (
    <div
      style={{
        height: '300px',
        maxWidth: '300px',
        border: '1px solid red',
        position: 'relative',
      }}
    >
      <ResizableBox
        rect={rect}
        relative
        onChange={(newRect) => setRect(newRect)}
        limit={{ left: 0, top: 0, right: 300, bottom: 300 }}
        style={{ backgroundColor: 'rgb(243,235,235)' }}
      >
        <div
          style={{
            padding: '10px',
            width: '100%',
          }}
        >
          点击我，你就可以对我进行放大缩小
        </div>
      </ResizableBox>
    </div>
  );
};
```

<API src='src/resizable-box'>
