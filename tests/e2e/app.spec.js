const { test, expect } = require('@playwright/test');

test('API health check', async ({ request }) => {
  const res = await request.get('http://127.0.0.1:3000/health');
  expect(res.status()).toBe(200);
});

test('API returns hello world', async ({ request }) => {
  const res = await request.get('http://127.0.0.1:3000/');
  expect(res.status()).toBe(200);
});