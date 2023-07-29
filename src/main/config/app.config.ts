import fastify, { type FastifyInstance } from 'fastify'
import { SetDocumentation, SetDocumentationUI } from './documentation.config'
import { RouteRegistering } from '../infra/patterns/facades/route.facades'
import { LoadEnvironmentVars } from './environment.config'
import { Connect } from '../infra/database/connection'

export const Start = async (): Promise<void> => {
  LoadEnvironmentVars()

  const app: FastifyInstance = fastify({
    logger: { level: String(process.env.LOG_LEVEL) }
  })

  await Connect()

  await SetDocumentation(app)
  await SetDocumentationUI(app)

  RouteRegistering(app)

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
