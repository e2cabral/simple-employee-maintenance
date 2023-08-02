import { type FastifyReply, type FastifyRequest } from 'fastify'
import Joi from 'joi'
import { ConvertTo } from '../../helper/convertion.helper'
import { EmployeeService } from '../../../domain/services/employee/employee.service'

const validate = (data: unknown): Joi.ValidationResult => {
  const schema = Joi.object({
    id: Joi.string().required()
  })

  return schema.validate(data)
}

type IdFromRouteParams = { id: string }

export const getEmployeeById = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    const hasError = validate(request.params).error
    if (hasError != null) {
      reply
        .status(400)
        .send({ message: hasError })
    }

    const { id } = ConvertTo<IdFromRouteParams>(request.params)

    const employee = await EmployeeService.getEmployeeById(id)

    if (employee == null) {
      reply
        .status(200)
        .send({ message: 'We could not find a user with the parameters provided' })
    }

    reply
      .status(200)
      .send(employee)
  } catch (err) {
    reply.send({ message: (err as Error).message })
  }
}
