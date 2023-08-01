import { type FastifyInstance } from 'fastify'
import { Start } from '../../../../src/main/config/app.config'
import { LoadEnvironmentVars } from '../../../../src/main/config/environment.config'

let app: FastifyInstance

beforeAll(async () => {
  LoadEnvironmentVars()
  app = await Start()
})

afterAll(async () => {
  await app.close()
})

describe('Get Employees', () => {
  test('Should return 200 if all required parameters were provided', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/v1/employees?page=1&offset=10'
    })

    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.json())).toBe(true)
  })

  test('Should return 400 if no page is provided', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/v1/employees?offset=10'
    })

    expect(response.statusCode).toBe(400)
    expect(JSON.parse(response.body).message).toBe('ValidationError: "page" is required')
  })
})
