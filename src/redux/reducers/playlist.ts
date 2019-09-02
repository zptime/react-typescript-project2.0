/*
 * 播放列表
 */
import { ISong } from '@/api/api';
import * as constants from '@/redux/constants';
import { PlayListAction } from '../actions/playlist';

export interface IPlayListState {
  playIndex?: number;
  playList?: ISong[];
}

export const prePlayerListState: IPlayListState = {
  playIndex: 0,
  playList: []
};

export default function playListReducer(state: IPlayListState = prePlayerListState, action: PlayListAction): IPlayListState {
  const { type, payload } = action
  switch (type) {
    case constants.SET_PLAY_LIST:
      return {
        playIndex: state.playIndex,
        playList: payload as ISong[]
      };
    case constants.SET_PLAY_INDEX:
      return {
        playIndex: payload as number,
        playList: state.playList
      };
    default:
      return state;
  }
}
