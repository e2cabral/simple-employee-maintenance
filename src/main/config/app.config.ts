import fastify, { type FastifyInstance } from 'fastify'
import { SetDocumentation } from './documentation.config'
import { RouteRegistering } from '../infra/patterns/facades/route.facades'

export const Start = async (): Promise<void> => {
  const app: FastifyInstance = fastify({
    logger: { level: 'debug' }
  })

  RouteRegistering(app)

  await SetDocumentation(app)

  ListenAndServe(app)
    .then((res) => {
      app.log.info(`Server is running on ${res}`)
      app.swagger()
    })
    .catch((err) => {
      app.log.error((err as Error).message)
    })
}

const ListenAndServe = async (app: FastifyInstance): Promise<string> => {
  return await app.listen({ port: 3001 })
}
