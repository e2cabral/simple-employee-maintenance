import swagger from '@fastify/swagger'
import { type FastifyInstance } from 'fastify'

export const SetDocumentation = async (app: FastifyInstance): Promise<void> => {
  await app.register(swagger, {
    swagger: {
      info: {
        title: 'Simple Employee Maintenance',
        description: 'Simple Employee Maintenance Documentation',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'You will find more info here'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  })
}
