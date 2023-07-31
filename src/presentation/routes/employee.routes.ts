import { type FastifyInstance, type RouteShorthandOptions } from 'fastify'
import {
  defaultGetResponse,
  successGetResponse,
  errorGenericResponse,
  successGetByIdResponse, defaultGetByIdResponse
} from '../../main/documentation/routes/employees'

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
          400: errorGenericResponse(),
          500: errorGenericResponse(),
          default: defaultGetResponse()
        }
      }
    }, () => {})
    .get(
      '/employees/:id',
      {
        schema: {
          response: {
            200: successGetByIdResponse(),
            400: errorGenericResponse(),
            500: errorGenericResponse(),
            default: defaultGetByIdResponse()
          }
        }
      },
      () => {}
    )
    .patch('/employees', {}, () => {})
    .delete('/employees', {}, () => {})

  done()
}
