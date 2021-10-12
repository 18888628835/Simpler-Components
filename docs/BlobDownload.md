# BlobDownload 下载

## 自定义文字

```tsx
import React, { useState } from 'react';
import { BlobDownload } from 'Simpler-Components';

export default () => {
  return (
    <div style={{ height: '100px' }}>
      <BlobDownload axiosConfig={{ url: '' }}>自定义文字</BlobDownload>
    </div>
  );
};
```

## 隐藏默认 icon

```tsx
import React, { useState } from 'react';
import { BlobDownload } from 'Simpler-Components';

export default () => {
  return (
    <div style={{ height: '100px' }}>
      <BlobDownload hiddenIcon axiosConfig={{ url: '' }}>
        导出
      </BlobDownload>
    </div>
  );
};
```

## 自定义 icon

```tsx
import React, { useState } from 'react';
import { BlobDownload, Icon } from 'Simpler-Components';

export default () => {
  return (
    <div style={{ height: '100px' }}>
      <BlobDownload
        axiosConfig={{ url: '' }}
        icon={<Icon path="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></Icon>}
      >
        导出
      </BlobDownload>
    </div>
  );
};
```

## 下载函数

```javascript
import { blobDownLoad } from 'Simpler-Components';
// 直接使用函数下载
blobDownLoad(axiosConfig, method);
```
