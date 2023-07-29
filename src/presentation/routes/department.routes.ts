import { type FastifyInstance, type RouteShorthandOptions } from 'fastify'

export const DepartmentRoutes = (app: FastifyInstance, _: RouteShorthandOptions, done: () => void): void => {
  app
    .get('/departments', {
      schema: {
        querystring: {
          page: { type: 'number' },
          offset: { type: 'number' }
        }
      }
    }, () => {})

  done()
}
