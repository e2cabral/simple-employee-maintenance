import { type NoContentBody } from '../documentation.types'

export const noContentGenericResponse = (message: string): NoContentBody => {
  return {
    description: message,
    type: 'object',
    properties: {
      message: { type: 'string' },
      statusCode: { type: 'integer', default: 204 }
    }
  }
}
