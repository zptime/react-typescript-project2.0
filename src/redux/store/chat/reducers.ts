// src/store/chat/reducers.ts

import {
  ChatActionTypes,
  DELETE_MESSAGE,
  IChatState,
  SEND_MESSAGE
} from './types'

const initialState: IChatState = {
  messages: []
}

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): IChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      }
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      }
    default:
      return state
  }
}
