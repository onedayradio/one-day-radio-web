import { InMemoryCache, IdGetterObj } from '@apollo/client'
import { get } from 'lodash'

const dataIdFromObject = (result: IdGetterObj) => {
  if (result.__typename === 'PlaylistSong') {
    const id = get(result, 'song.spotifyId')
    return result.__typename + id
  }
  if (result.id && result.__typename) {
    return result.__typename + result.id
  }
  return undefined
}

export const cache = new InMemoryCache({
  dataIdFromObject,
  addTypename: true,
})
