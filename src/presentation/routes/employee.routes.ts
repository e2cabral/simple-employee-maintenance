import { type FastifyInstance, type RouteShorthandOptions } from 'fastify'

export const EmployeeRoutes = (app: FastifyInstance, _: RouteShorthandOptions, done: () => void): void => {
  app
    .get('/employees', {
      schema: {
        querystring: {
          page: { type: 'number' },
          offset: { type: 'number' }
        }
      }
    }, () => {})
    .get('/employees/:id', {}, () => {})
    .patch('/employees', {}, () => {})
    .delete('/employees', {}, () => {})

  done()
}
