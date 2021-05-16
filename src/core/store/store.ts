import { createStore, createTypedHooks } from 'easy-peasy'

import { currentUser, CurrentUserState } from './currentUser'
import { selectedDevice, SelectedDeviceState } from './selectedDevice'

interface UIStore {
  currentUser: CurrentUserState
  selectedDevice: SelectedDeviceState
}

const tmpStore: UIStore = {
  currentUser,
  selectedDevice,
}

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<UIStore>()

const store = createStore(tmpStore)

export { useStoreActions, useStoreState, useStoreDispatch, store }
