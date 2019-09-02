// src/store/chat/actions.ts

import { ChatActionTypes, DELETE_MESSAGE, IMessage, SEND_MESSAGE } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: IMessage): ChatActionTypes {
  return {
    payload: newMessage,
    type: SEND_MESSAGE,
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    meta: {
      timestamp
    },
    type: DELETE_MESSAGE,
  }
}
