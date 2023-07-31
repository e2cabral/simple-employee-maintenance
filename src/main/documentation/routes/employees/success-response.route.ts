import { type DefaultBody } from '../documentation.types'
import { type EmployeeGetResponse } from './index'

export const successGetResponse = (): DefaultBody<EmployeeGetResponse> => {
  return {
    description: 'Retrieve employees paginated',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
        fastName: { type: 'string' },
        hireDate: { type: 'string' },
        department: { type: 'string' },
        phone: { type: 'string' },
        address: { type: 'string' }
      }
    }
  }
}
