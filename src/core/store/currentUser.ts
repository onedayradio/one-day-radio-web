import { action, Action } from 'easy-peasy'
import { User } from '../../shared'

export interface CurrentUserState {
  user?: User
  setUser: Action<CurrentUserState, User | undefined>
}

export const currentUser: CurrentUserState = {
  user: undefined,
  setUser: action((state, user) => ({
    ...state,
    user,
    fetched: true,
  })),
}
