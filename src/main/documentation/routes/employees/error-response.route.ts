import { type DefaultBody } from '../documentation.types'
import { type EmployeeErrorResponse } from './index'

export const errorGenericResponse = (): DefaultBody<EmployeeErrorResponse> => {
  return {
    description: 'Send an error message in case of error',
    type: 'object',
    properties: {
      message: { type: 'string' },
      status: { type: 'integer' }
    }
  }
}
