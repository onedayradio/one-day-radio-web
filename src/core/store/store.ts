import { createStore, createTypedHooks } from 'easy-peasy'

import { currentUser, CurrentUserState } from './currentUser'

interface UIStore {
  currentUser: CurrentUserState
}

const tmpStore: UIStore = {
  currentUser,
}

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<UIStore>()

const store = createStore(tmpStore)

export { useStoreActions, useStoreState, useStoreDispatch, store }
