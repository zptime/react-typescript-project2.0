// src/store/system/reducers.ts

import {
  ISystemState,
  SystemActionTypes,
  UPDATE_SESSION
} from './types'

const initialState: ISystemState = {
  loggedIn: false,
  session: '',
  userName: ''
}

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): ISystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}
