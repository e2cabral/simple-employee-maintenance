import 'reflect-metadata'
import fastify, { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify'

const app: FastifyInstance = fastify({
  logger: { level: 'info' }
})

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  await reply.send({ statusCode: 200, body: { message: 'Hello, World!' } })
})

app
  .listen({ port: 3001 })
  .then((res) => {
    app.log.info(`Server is running on ${res}.`)
  })
  .catch((err) => {
    app.log.error((err as Error).message)
  })
