import { type FastifyInstance, type RouteShorthandOptions } from 'fastify'
import { defaultGetResponse, successGetResponse } from '../../main/documentation/routes/employees'
import { errorGetResponse } from '../../main/documentation/routes/employees/error-response.route'

export const EmployeeRoutes = (app: FastifyInstance, _: RouteShorthandOptions, done: () => void): void => {
  app
    .get('/employees', {
      schema: {
        querystring: {
          page: { type: 'number' },
          offset: { type: 'number' }
        },
        response: {
          200: successGetResponse(),
          400: errorGetResponse(),
          500: errorGetResponse(),
          default: defaultGetResponse()
        }
      }
    }, () => {})
    .get('/employees/:id', {}, () => {})
    .patch('/employees', {}, () => {})
    .delete('/employees', {}, () => {})

  done()
}
