# Transition 通用动画

## 左进右出

```tsx
import React, { useState } from 'react';
import { Transition, Button, Alert } from 'Simpler-Components';

export default () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <Transition showData={isShow} timeout={300} animation="LeftIn-RightOut">
        <Alert
          closed
          model="danger"
          variant="outline"
          style={{ width: '250px' }}
        >
          hello word!
        </Alert>
      </Transition>
      <Button
        btnType="danger"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        触发动画
      </Button>
    </div>
  );
};
```

## 上进下出

```tsx
import React, { useState } from 'react';
import { Transition, Button, Alert } from 'Simpler-Components';

export default () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <Transition showData={isShow} timeout={300} animation="TopIn-BottomOut">
        <Alert
          closed
          model="danger"
          variant="outline"
          style={{ width: '250px' }}
        >
          hello word!
        </Alert>
      </Transition>
      <Button
        btnType="danger"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        触发动画
      </Button>
    </div>
  );
};
```

## 下进上出

```tsx
import React, { useState } from 'react';
import { Transition, Button, Alert } from 'Simpler-Components';

export default () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <Transition showData={isShow} timeout={300} animation="BottomIn-TopOut">
        <Alert
          closed
          model="danger"
          variant="outline"
          style={{ width: '250px' }}
        >
          hello word!
        </Alert>
      </Transition>
      <Button
        btnType="danger"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        触发动画
      </Button>
    </div>
  );
};
```

## alert 模式

```tsx
import React, { useState } from 'react';
import { Transition, Alert, Button } from 'Simpler-Components';

export default () => {
  const [isShow, setIsShow] = useState(true);
  const [showData, setShowData] = useState(true);
  return (
    <div>
      <Transition showData={isShow} timeout={300} animation="alert">
        <Alert closed style={{ width: '250px' }} variant="outline">
          点击 x 时，组件依然挂载在DOM 中
        </Alert>
      </Transition>
      <Button
        btnType="danger"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        卸载组件
      </Button>

      <Transition timeout={300} animation="alert" showData={showData}>
        <Alert
          style={{ width: '250px' }}
          model="danger"
          variant="outline"
          closed
          onClick={() => {
            setShowData(!showData);
          }}
        >
          Alert 可以和 Transition配合使用
        </Alert>
      </Transition>
      <Button
        btnType="danger"
        onClick={() => {
          setShowData(!showData);
        }}
      >
        click here
      </Button>
    </div>
  );
};
```

> 当与 Alert 组件混合使用时，可以控制 Alert 组件在页面中挂载或者卸载
