const request = require('supertest');
const app = require('../lib/app');

describe('application routes', () => {
  it('returns a header with welcome', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.text).toEqual(expect.stringContaining('welcome'));
      });
  });
  it('returns a color text', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.text).toEqual(expect.stringContaining('red'));
      });
  });
  it('returns a color text', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.text).toEqual(expect.stringContaining('blue'));
      });
  });
  it('returns a color text', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.text).toEqual(expect.stringContaining('green'));
      });
  });
  it('returns a not found', () => {
    return request(app)
      .get('/sometingelse')
      .then(res => {
        expect(res.status).toBe(404);
        expect(res.text).toEqual(expect.stringContaining('not found'));
      });
  });
});


