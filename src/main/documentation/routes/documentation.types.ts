export interface DefaultBody<T> {
  description?: string
  type: string
  properties?: T
  items?: DefaultBody<T>
}
