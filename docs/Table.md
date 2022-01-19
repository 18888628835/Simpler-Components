<!--
 * @Author: 邱彦兮
 * @Date: 2022-01-18 21:14:32
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-19 22:30:06
 * @FilePath: /Simpler-Components/docs/Table.md
-->

# Table 表格

## 基本使用

```tsx
import React, { useState } from 'react';
import { Table } from 'Simpler-Components';

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const dataSource = [
    {
      key: '1',
      name: '胡彦祖',
      age: 32,
      address: '西湖区',
    },
    {
      key: '2',
      name: '吴彦祖',
      age: 42,
      address: '西湖区',
    },
  ];
  return <Table columns={columns} dataSource={dataSource} />;
};
```

## 自定义 render

```tsx
import React, { useState } from 'react';
import { Table } from 'Simpler-Components';

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      render: (text, record) => <a>{text}</a>,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => [
        <a key="detail" style={{ marginRight: '20px' }}>
          详情
        </a>,
        <a key="delete">删除</a>,
      ],
    },
  ];
  const dataSource = [
    {
      id: '1',
      name: '胡彦祖',
      age: 32,
      address: '西湖区',
    },
    {
      id: '2',
      name: '吴彦祖',
      age: 42,
      address: '西湖区',
    },
  ];
  return <Table columns={columns} dataSource={dataSource} rowKey="id" />;
};
```

## (未完待续)

<API src='src/Table'>
