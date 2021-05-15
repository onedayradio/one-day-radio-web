import { action, Action } from 'easy-peasy'

export interface SelectedDeviceState {
  deviceId?: string
  setSelectedDeviceId: Action<SelectedDeviceState, string | undefined>
}

export const selectedDevice: SelectedDeviceState = {
  deviceId: undefined,
  setSelectedDeviceId: action((state, deviceId) => ({
    ...state,
    deviceId,
  })),
}
