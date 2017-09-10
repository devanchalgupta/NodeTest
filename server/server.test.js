const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server', () => {
    describe('GET /', () => {
        it('should return home page response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        errorMessage: 'Page not found'
                    })
                })
                .end(done);
        });
    });
    describe('GET /users', () => {
        it('should return user page response', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Tom', age: 15
                    })
                })
                .end(done);
        });
    });
});