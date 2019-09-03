/*
 * header相关actions
 */
import * as constants from '@/redux/constants'
import { IHeaderState } from '@/redux/reducers/header'

export interface ISetHeaderAction {
  payload: IHeaderState;
  type: constants.SET_HEADER;
}

export type HeaderAction = ISetHeaderAction;

// action creator
export function setHeader(payload: IHeaderState): HeaderAction {
  return {
    payload,
    type: constants.SET_HEADER,
  };
}
