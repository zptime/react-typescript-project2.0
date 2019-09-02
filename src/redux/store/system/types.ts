export interface ISystemState {
  loggedIn: boolean
  session: string
  userName: string
}

// src/store/system/types.ts
export const UPDATE_SESSION = 'UPDATE_SESSION'

interface IUpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: ISystemState
}

export type SystemActionTypes = IUpdateSessionAction
