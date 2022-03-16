# AutoComplete 自动完成

## 普通使用

输入 o 试试

```tsx
import React, { useState } from 'react';
import { AutoComplete } from 'Simpler-Components';

export default () => {
  const data = [
    { value: 'jamas' },
    { value: 'tom' },
    { value: 'hello' },
    { value: 'word' },
    { value: 'some words' },
  ];
  const handler = (inputValue: string) => {
    return data.filter((item, index) => {
      return item.value.includes(inputValue);
    });
  };
  return (
    <div style={{ height: '100px' }}>
      <AutoComplete filterOption={handler} placeholder="try type a" />
    </div>
  );
};
```

## 清空输入

```tsx
import React, { useState } from 'react';
import { AutoComplete } from 'Simpler-Components';

export default () => {
  const data = [
    { value: 'jamas' },
    { value: 'tom' },
    { value: 'hello' },
    { value: 'word' },
    { value: 'some words' },
  ];
  const handler = (inputValue: string) => {
    return data.filter((item, index) => {
      return item.value.includes(inputValue);
    });
  };
  return (
    <div style={{ height: '100px' }}>
      <AutoComplete filterOption={handler} placeholder=" try type o" empty />
    </div>
  );
};
```

## 下拉内容自定义

```tsx
import React, { useState } from 'react';
import { AutoComplete } from 'Simpler-Components';

export default () => {
  const data = [
    { value: 'jamas' },
    { value: 'tom' },
    { value: 'hello' },
    { value: 'word' },
    { value: 'some words' },
  ];
  const handler = (inputValue: string) => {
    return data.filter((item, index) => {
      return item.value.includes(inputValue);
    });
  };
  return (
    <div style={{ height: '100px' }}>
      <AutoComplete
        filterOption={handler}
        placeholder=" try type o"
        empty
        renderOption={(value) => (
          <>
            <div>自定义内容</div>
            <div>{value}</div>
          </>
        )}
      />
    </div>
  );
};
```

## HTTP 请求

```tsx
import React, { useState } from 'react';
import { AutoComplete } from 'Simpler-Components';

export default () => {
  const fetchHandler = (query: string) => {
    return fetch(`http://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        return data.items.map((item: any) => {
          return { value: item.login };
        });
      });
  };

  const handler = (inputValue: string) => {
    return fetchHandler(inputValue).then((data) => {
      return data.filter((i: any) => {
        return i.value.includes(inputValue);
      });
    });
  };
  return (
    <div style={{ height: '100px' }}>
      <AutoComplete
        filterOption={handler}
        placeholder=" try type o or oo or ooo"
        empty
      />
    </div>
  );
};
```

<API src='src/AutoComplete'></API>
