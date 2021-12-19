<!--
 * @Author: 邱彦兮
 * @Date: 2021-12-19 14:32:14
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-19 22:15:18
 * @FilePath: /Simpler-Components/docs/Dialog.md
-->

# Dialog 原生模态框

## 原生的浏览器模态框

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'Simpler-Components';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <section>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        点击弹出
      </Button>
      <Dialog
        title="Basic Modal"
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        这里是内容
      </Dialog>
    </section>
  );
};
```

## 模糊效果

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'Simpler-Components';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <section>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        点击弹出
      </Button>
      <Dialog
        okBtnProps={{ btnType: 'default', variant: 'outline' }}
        cancelBtnProps={{ btnType: 'danger', variant: 'outline' }}
        title="filter Modal"
        visible={visible}
        onCancel={() => setVisible(false)}
        filter={true}
      >
        这里是内容
      </Dialog>
    </section>
  );
};
```

## 关闭点击蒙层隐藏效果

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'Simpler-Components';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <section>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        点击弹出
      </Button>
      <Dialog
        title="关闭点击蒙层隐藏效果"
        visible={visible}
        onCancel={() => setVisible(false)}
        maskClosable={false}
      >
        这里是内容
      </Dialog>
    </section>
  );
};
```

## 自定义 header

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'Simpler-Components';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <section>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        点击弹出
      </Button>
      <Dialog
        header={<div>custom header</div>}
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        这里是内容
      </Dialog>
    </section>
  );
};
```

## 自定义 closeIcon

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'Simpler-Components';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <section>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        点击弹出
      </Button>
      <Dialog
        header={<div>自定义 closeIcon</div>}
        visible={visible}
        closeIcon={<span>✅</span>}
        onCancel={() => setVisible(false)}
      >
        这里是内容
      </Dialog>
    </section>
  );
};
```

## 自定义 body 样式

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'Simpler-Components';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <section>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        点击弹出
      </Button>
      <Dialog
        okText="确认"
        cancelText="返回"
        visible={visible}
        title="自定义 body 样式"
        bodyStyle={{ height: '300px' }}
        onCancel={() => setVisible(false)}
      ></Dialog>
    </section>
  );
};
```

## 根据内容自动伸缩

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'Simpler-Components';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <section>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        点击弹出
      </Button>
      <Dialog
        visible={visible}
        title="根据内容自动伸缩"
        width={1000}
        onCancel={() => setVisible(false)}
      >
        <div style={{ width: '1000px', height: '300px' }}>
          我是内容 长1000，宽300
        </div>
      </Dialog>
    </section>
  );
};
```

## 取消右上角关闭按钮

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'Simpler-Components';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <section>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        点击弹出
      </Button>
      <Dialog
        visible={visible}
        closable={false}
        title="取消右上角关闭按钮"
        width={600}
        onCancel={() => setVisible(false)}
      >
        <div style={{ width: '600px', height: '300px' }}>
          我是内容 长600，宽300
        </div>
      </Dialog>
    </section>
  );
};
```

## 自定义 footer

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'Simpler-Components';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <section>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        点击弹出
      </Button>
      <Dialog
        footer={[
          <Button variant="outline" key="back">
            返回
          </Button>,
          <Button variant="outline" key="ok" btnType="primary">
            确认
          </Button>,
        ]}
        visible={visible}
        title="自定义 footer"
        width={600}
        onCancel={() => setVisible(false)}
      >
        <div style={{ width: '600px', height: '300px' }}>
          我是内容 长600，宽300
        </div>
      </Dialog>
    </section>
  );
};
```

<API src='src/Dialog'></API>
