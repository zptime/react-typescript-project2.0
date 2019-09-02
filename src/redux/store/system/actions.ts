// src/store/system/actions.ts

import { ISystemState, SystemActionTypes, UPDATE_SESSION } from './types'

export function updateSession(newSession: ISystemState): SystemActionTypes {
  return {
    payload: newSession,
    type: UPDATE_SESSION,
  }
}
