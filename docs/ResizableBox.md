<!--
 * @Author: 邱彦兮
 * @Date: 2022-04-21 17:18:33
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-04-21 17:20:53
 * @FilePath: /Simpler-Components/docs/ResizableBox.md
-->
<!--
 * @Author: 邱彦兮
 * @Date: 2022-04-10 08:20:14
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-04-10 14:49:02
 * @FilePath: /Simpler-Components/docs/VTable.md
-->

# ResizableBox 可伸缩盒子

## 可伸缩盒子

```tsx
import React, { useState } from 'react';
import { ResizableBox } from 'Simpler-Components';

export default () => {
  return (
    <div style={{ height: '500px', maxWidth: '800px' }}>
      <ResizableBox />
    </div>
  );
};
```
