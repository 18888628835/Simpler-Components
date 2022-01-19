<!--
 * @Author: 邱彦兮
 * @Date: 2022-01-19 21:24:20
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-19 22:26:09
 * @FilePath: /Simpler-Components/docs/BackToTop.md
-->

# BackToTop 回到顶部

## 基本使用

```tsx
import React, { useState } from 'react';
import { BackToTop } from 'Simpler-Components';

export default () => {
  return (
    <div style={{ minHeight: '1500px' }}>
      请滚动文档 有默认样式，距离底部 50px，可覆盖。
      <BackToTop>
        <div
          style={{
            width: 60,
            height: 60,
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            color: 'rgb(153, 153, 153)',
            borderRadius: '30px',
            backgroundColor: '#fff',
            lineHeight: '60px',
            textAlign: 'center',
            fontSize: '16px',
          }}
        >
          UP
        </div>
      </BackToTop>
    </div>
  );
};
```

<API src='src/BackToTop'></API>
