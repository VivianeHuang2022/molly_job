import { defineConfig } from '@playwright/test';
export default defineConfig({
  timeout: 5 * 60 * 1000, // 测试超时设置为5分钟
  expect: {
    timeout: 10 * 1000, // 期望超时设置为10秒
  },
  globalTimeout: 10 * 60 * 1000, // 全局超时设置为1小时
});
