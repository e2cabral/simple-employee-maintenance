import { type FastifyReply, type FastifyRequest } from 'fastify'
import Joi from 'joi'
import { EmployeeService } from '../../../domain/services/employee/employee.service'
import { ConvertTo } from '../../helper/convertion.helper'

const validate = (data: unknown): Joi.ValidationResult => {
  const schema = Joi.object({
    page: Joi.number().required(),
    offset: Joi.number().required()
  })

  return schema.validate(data)
}

type PageOffsetQuerystring = { page: string, offset: string }

export const getEmployee = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    const hasError = validate(request.query).error

    if (hasError != null) {
      reply
        .status(400)
        .send({ message: hasError })
    }

    const { page, offset } = ConvertTo<PageOffsetQuerystring>(request.query)

    const employees = await EmployeeService.getEmployee(Number(page), Number(offset))

    reply.send(employees)
  } catch (err) {
    reply.send({ message: (err as Error).message })
  }
}
