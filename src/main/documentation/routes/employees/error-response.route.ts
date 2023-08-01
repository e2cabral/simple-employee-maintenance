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

export const internalServerError = (): ErrorBody => {
  return {
    description: 'Internal Server Error: Caused by a problem in the server',
    type: 'object',
    properties: {
      message: { type: 'string' },
      statusCode: { type: 'integer', default: 500 }
    }
  }
}

export const badGatewayError = (): ErrorBody => {
  return {
    description: 'Internal Server Error: Caused by a problem in the server',
    type: 'object',
    properties: {
      message: { type: 'string' },
      statusCode: { type: 'integer', default: 502 }
    }
  }
}

export const gatewayTimeoutError = (): ErrorBody => {
  return {
    description: 'Internal Server Error: Caused by a problem in the server',
    type: 'object',
    properties: {
      message: { type: 'string' },
      statusCode: { type: 'integer', default: 504 }
    }
  }
}
