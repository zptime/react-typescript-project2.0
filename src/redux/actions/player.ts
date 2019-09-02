/*
 * 播放action
 */
import * as constants from '@/redux/constants';
import { IPlayerState } from '../reducers/player';

export interface ISetPlayerAction {
  type: constants.SET_PLAYER;
  payload: IPlayerState;
}

export type PlayerAction = ISetPlayerAction;

export function setPlayer(payload: IPlayerState): PlayerAction {
  return {
    payload,
    type: constants.SET_PLAYER,
  };
}
