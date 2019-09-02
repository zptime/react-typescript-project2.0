export interface IChatState {
  messages: IMessage[]
}

export interface IMessage {
  user: string
  message: string
  timestamp: number
}

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

interface IDeleteMessageAction {
  type: typeof DELETE_MESSAGE
  meta: {
    timestamp: number
  }
}

interface ISendMessageAction {
  type: typeof SEND_MESSAGE
  payload: IMessage
}

export type ChatActionTypes = IDeleteMessageAction | ISendMessageAction
