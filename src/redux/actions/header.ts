/*
 * header相关actions
 */
import * as constants from '@/redux/constants'
import { IHeaderState } from '@/redux/reducers/header';
import { IAction } from '.';

// export interface ISetHeaderAction {
//   type: constants.SET_HEADER;
//   payload: IHeaderState;
// }

export type ISetHeaderAction = IAction<constants.SET_HEADER, IHeaderState>;

// action creator
export function setHeader(payload: IHeaderState): ISetHeaderAction {
  return {
    payload,
    type: constants.SET_HEADER,
  };
}
