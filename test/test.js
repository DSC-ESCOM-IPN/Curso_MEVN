const request = require('supertest');
const app = require('../app');

describe('Test todo methods', () => {
  it('gets the test endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
