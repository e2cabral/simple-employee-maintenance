import { type EmployeeErrorResponse, type EmployeeNoContentResponse } from './employees'

export interface DefaultBody<T> {
  description?: string
  type: string
  properties?: T
  items?: DefaultBody<T>
}

export interface ErrorBody extends DefaultBody<EmployeeErrorResponse> {
  type: string
  properties: {
    message: { type: string }
    statusCode: { type: string, default: number }
  }
}

export interface NoContentBody extends DefaultBody<EmployeeNoContentResponse> {
  type: string
  properties: {
    message: { type: string }
    statusCode: { type: string, default: number }
  }
}
