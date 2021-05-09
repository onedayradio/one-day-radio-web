import { Song } from '../types'

export enum Actions {
  PLAY_SONG = 0,
  ADD_SONG = 1,
}

export interface AfterLoginAction {
  route: string
  action: Actions
  spotifySongUri?: string
  songInput?: Partial<Song>
}

export const storeAfterLoginAction = (action: AfterLoginAction) => {
  localStorage.setItem('afterLoginAction', JSON.stringify(action))
}

export const getAfterLoginAction = (): AfterLoginAction | null => {
  const actionString = localStorage.getItem('afterLoginAction')
  if (!actionString) {
    return null
  }
  return JSON.parse(actionString)
}

export const getAndClearAfterLoginAction = (): AfterLoginAction | null => {
  const action = getAfterLoginAction()
  localStorage.removeItem('afterLoginAction')
  return action
}
