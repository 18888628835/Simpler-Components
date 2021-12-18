# DashboardScale 大屏适配器

## 类似网易有数的政务大屏适配器

> 能够实现类似网易有数大屏的适配效果，请调整浏览器窗口大小试试。原型自:[网易有数大屏](https://netease.youdata.163.com/dash/screenIntegration/700215255?sid=5889&token=1639845150812957311597127fedab12ce6d2)

```tsx
import React, { useRef } from 'react';
import { DashboardScale } from 'Simpler-Components';
import styled from 'styled-components';
import img from '../src/assets/dp.png';
const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;
export default () => {
  return (
    <div id="parent" style={{ position: 'relative', height: '80vh' }}>
      <DashboardScale width={1360} height={765} parentId="#parent">
        <Content>
          <img style={{ maxWidth: '100%' }} src={img} />
        </Content>
      </DashboardScale>
    </div>
  );
};
```

> 支持 16:9、16：10 等各种比例,默认为 1920\*1080

## API
