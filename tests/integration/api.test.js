const request = require('supertest');
const app = require('../../src/app');

describe('Integration Tests', () => {
  test('API returns JSON content-type', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).toMatch(/json/);
  });

  test('API status code is 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });
});