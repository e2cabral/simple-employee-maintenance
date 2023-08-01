import { type FastifyReply, type FastifyRequest } from 'fastify'
import Joi from 'joi'

const validate = (data: unknown): Joi.ValidationResult => {
  const schema = Joi.object({
    page: Joi.number().required(),
    offset: Joi.number().required()
  })

  return schema.validate(data)
}

export const getEmployee = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const hasError = validate(request.query).error

  if (hasError != null) {
    reply.status(400).send({ message: hasError })
  }
  reply.send([
    {
      firstName: 'string',
      fastName: 'string',
      hireDate: 'string',
      department: 'string',
      phone: 'string',
      address: 'string'
    }
  ])
}
