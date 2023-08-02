import { types } from 'util'

export const ConvertTo = <T>(data: unknown): T => {
  if (types.isStringObject(data)) {
    return JSON.parse(String(data)) as T
  }
  return JSON.parse(JSON.stringify(data)) as T
}
