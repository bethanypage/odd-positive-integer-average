import request from 'supertest';
import {app} from '../src/index';

/*
describe('Integration', () => {
  test.todo('Write some tests :)');

  // Test suite here...
});

https://www.npmjs.com/package/supertest
*/

describe('POST /', () =>
{
  it('Respond with average of odd-pos', () =>
  {
    var values = [1,2,3,4,5];
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res)
      {
        if (err) throw err;
      });
  });
});