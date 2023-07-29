import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
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
        description: 'Find more info here'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  })
}

export const SetDocumentationUI = async (app: FastifyInstance): Promise<void> => {
  await app.register(swaggerUi, {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
    transformSpecificationClone: true
  })
}
