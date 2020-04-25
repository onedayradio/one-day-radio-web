import { InMemoryCache, IdGetterObj } from '@apollo/client'

const dataIdFromObject = (result: IdGetterObj) => {
  if (result.id && result.__typename) {
    return result.__typename + result.id
  }
  return undefined
}

export const cache = new InMemoryCache({
  dataIdFromObject,
  addTypename: true,
})
