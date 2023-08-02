import { type DefaultBody, type ErrorBody, type NoContentBody } from '../documentation.types'

export interface EmployeeGetResponse {
  _id: DefaultBody<any>
  firstName: DefaultBody<any>
  lastName: DefaultBody<any>
  hireDate: DefaultBody<any>
  department: DefaultBody<any>
  phone: DefaultBody<any>
  address: DefaultBody<any>
}

export interface EmployeeErrorResponse {
  message: DefaultBody<any>
  statusCode: DefaultBody<ErrorBody>
}

export interface EmployeeNoContentResponse {
  message: DefaultBody<any>
  statusCode: DefaultBody<NoContentBody>
}

export { successGetResponse } from './success-response.route'
export { successGetByIdResponse } from './success-response.route'
export { defaultGetResponse } from './default-response.route'
export { defaultGetByIdResponse } from './default-response.route'
export { errorGenericResponse, internalServerError, badGatewayError, gatewayTimeoutError } from './error-response.route'
export { noContentGenericResponse } from './no-content-response.route'
