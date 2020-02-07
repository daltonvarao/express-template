const app = require('../../app')
const request = require('supertest')(app)


describe('App index', () => {
  it('should request in not registred routes to return status code 404', async () => {
    const response = await request.get('/notfound')

    expect(response.status).toBe(404)
  })
})
