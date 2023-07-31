import { type DefaultBody } from '../documentation.types'
import { type EmployeeErrorResponse } from './index'

export const errorGetResponse = (): DefaultBody<EmployeeErrorResponse> => {
  return {
    description: 'Send an error message in case of error',
    type: 'object',
    properties: {
      message: { type: 'string' },
      status: { type: 'integer' }
    }
  }
}
