import { type ErrorBody } from '../documentation.types'

export const errorGenericResponse = (): ErrorBody => {
  return {
    description: 'Send an error message in case of error',
    type: 'object',
    properties: {
      message: { type: 'string' },
      statusCode: { type: 'integer', default: 500 }
    }
  }
}
