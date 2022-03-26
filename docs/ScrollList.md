<!--
 * @Author: 邱彦兮
 * @Date: 2022-03-25 22:12:52
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-26 09:00:38
 * @FilePath: /Simpler-Components/docs/ScrollList.md
-->

# ScrollList 滚动表

## 基本使用

```tsx
import React, { useState } from 'react';
import { ScrollList } from 'Simpler-Components';

export default () => {
  const columns = ['姓名', '年龄', '住址'];
  const dataSource = [
    ['<div class="hello">行1列1</div>', '行1列2', '行1列3'],
    ['<div style="color:red"> 行2列1</div>', '行2列2', '行2列3'],
    ['行3列1', '行3列2', '行3列3'],
    ['行4列1', '<div style="color:red">行4列2</div>', '行4列3'],
    ['行5列1', '行5列2', '行5列3'],
    ['行6列1', '行6列2', '<div style="color:yellow">行6列3</div>'],
    ['行7列1', '行7列2', '行7列3'],
    ['行8列1', '行8列2', '<div style="color:green">行8列3</div>'],
    ['行9列1', '行9列2', '行9列3'],
    ['行10列1', '行10列2', '行10列3'],
  ];
  return (
    <div
      style={{
        width: '500px',
        height: '220px',
      }}
    >
      <ScrollList dataSource={dataSource} columns={columns} />
    </div>
  );
};
```

<API src='src/scroll_list'>
