export interface DefaultBody<T> {
  description?: string
  type: string
  properties?: T
  items?: DefaultBody<T>
}

export interface ErrorBody extends DefaultBody<any> {
  type: string
  properties: {
    message: { type: string }
    statusCode: { type: string, default: number }
  }
}

export interface NoContentBody extends DefaultBody<any> {
  type: string
  properties: {
    message: { type: string }
    statusCode: { type: string, default: number }
  }
}
