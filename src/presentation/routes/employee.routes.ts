import { type FastifyInstance, type FastifyReply, type FastifyRequest, type RouteShorthandOptions } from 'fastify'
import {
  defaultGetResponse,
  successGetResponse,
  errorGenericResponse,
  successGetByIdResponse,
  defaultGetByIdResponse,
  noContentGenericResponse,
  badGatewayError,
  internalServerError,
  gatewayTimeoutError
} from '../../main/documentation/routes/employees'
import { getEmployee } from '../controllers/employee/get-employee'

export const EmployeeRoutes = (app: FastifyInstance, _: RouteShorthandOptions, done: () => void): void => {
  app
    .get('/employees', {
      schema: {
        querystring: {
          page: { type: 'string' },
          offset: { type: 'string' }
        },
        response: {
          200: successGetResponse(),
          400: errorGenericResponse(),
          404: errorGenericResponse(),
          500: internalServerError(),
          502: badGatewayError(),
          504: gatewayTimeoutError(),
          default: defaultGetResponse()
        }
      }
    }, async (request: FastifyRequest, reply: FastifyReply) => { await getEmployee(request, reply) })
    .get(
      '/employees/:id',
      {
        schema: {
          response: {
            200: successGetByIdResponse(),
            400: errorGenericResponse(),
            404: errorGenericResponse(),
            500: internalServerError(),
            502: badGatewayError(),
            504: gatewayTimeoutError(),
            default: defaultGetByIdResponse()
          }
        }
      },
      () => {}
    )
    .patch(
      '/employees/:id',
      {
        schema: {
          body: {
            type: 'object',
            properties: {
              firstName: { type: 'string' },
              lastName: { type: 'string' },
              hireDate: { type: 'string' },
              department: { type: 'string' },
              phone: { type: 'string' },
              address: { type: 'string' }
            }
          },
          response: {
            204: noContentGenericResponse('Update the fields sent'),
            400: errorGenericResponse(),
            500: internalServerError(),
            502: badGatewayError(),
            504: gatewayTimeoutError(),
            default: noContentGenericResponse('Update the fields sent')
          }
        }
      },
      () => {}
    )
    .delete(
      '/employees/:id',
      {
        schema: {
          response: {
            204: noContentGenericResponse('Delete the employee'),
            400: errorGenericResponse(),
            500: internalServerError(),
            502: badGatewayError(),
            504: gatewayTimeoutError(),
            default: noContentGenericResponse('Delete the employee')
          }
        }
      },
      () => {}
    )

  done()
}
