import { type DefaultBody } from '../documentation.types'

export interface EmployeeGetResponse {
  firstName: DefaultBody<any>
  fastName: DefaultBody<any>
  hireDate: DefaultBody<any>
  department: DefaultBody<any>
  phone: DefaultBody<any>
  address: DefaultBody<any>
}

export interface EmployeeErrorResponse {
  message: DefaultBody<any>
  status: DefaultBody<any>
}
