/*
 * @Author: 邱彦兮
 * @Date: 2021-10-12 10:16:35
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-16 16:24:20
 * @FilePath: /Simpler-Components/.umirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Fancy',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  alias: {
    src: './src',
  },
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: [],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: false,
    },
  },
  // more config: https://d.umijs.org/config
  base: '/Simpler-Components',
  publicPath: '/Simpler-Components/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // 其他配置
});
