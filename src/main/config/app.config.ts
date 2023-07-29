import fastify, { type FastifyInstance } from 'fastify'
import { SetDocumentation, SetDocumentationUI } from './documentation.config'
import { Connect } from '../../infra/database/connection'
import { RouteRegistering } from '../../infra/patterns/facades/route.facade'

export const Start = async (): Promise<void> => {
  const app: FastifyInstance = LoadApp()

  try {
    await Connect()

    await SetDocumentation(app)
    await SetDocumentationUI(app)

    RouteRegistering(app)

    await ListenAndServe(app)
  } catch (err) {
    app.log.error((err as Error).message)
  }
}

const ListenAndServe = async (app: FastifyInstance): Promise<string> => {
  return await app.listen({ port: 3001 })
}

const LoadApp = (): FastifyInstance => {
  return fastify({
    logger: { level: String(process.env.LOG_LEVEL) }
  })
}
