/*
 * @Author: 邱彦兮
 * @Date: 2021-10-12 10:16:35
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-19 13:24:05
 * @FilePath: /Simpler-Components/.umirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Simpler-Components',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  alias: {
    src: './src',
  },
  // more config: https://d.umijs.org/config
  base: '/Simpler-Components',
  publicPath: '/Simpler-Components/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // 其他配置
});
