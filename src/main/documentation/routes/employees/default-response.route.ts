import { type DefaultBody } from '../documentation.types'
import { type EmployeeGetResponse } from './index'

export const defaultGetResponse = (): DefaultBody<EmployeeGetResponse> => {
  return {
    description: 'Retrieve employees paginated',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        hireDate: { type: 'string' },
        department: { type: 'string' },
        phone: { type: 'string' },
        address: { type: 'string' }
      }
    }
  }
}
export const defaultGetByIdResponse = (): DefaultBody<EmployeeGetResponse> => {
  return {
    description: 'Retrieve employees paginated',
    type: 'object',
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      hireDate: { type: 'string' },
      department: { type: 'string' },
      phone: { type: 'string' },
      address: { type: 'string' }
    }
  }
}
