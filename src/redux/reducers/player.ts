/*
 * 播放界面状态，正在加载、是否显示详情播放页面
 */
import { PlayerAction } from '@/redux/actions';
import * as constants from '@/redux/constants';

export interface IPlayerState {
  // 是否正在加载歌曲
  loading?: boolean;
  // 是否正在显示播放详情页
  showDetailPlayer?: boolean;
  // 是否暂停
  pause?: boolean;
}

export const prePlayerState: IPlayerState = {
  loading: false,
  pause: false,
  showDetailPlayer: false,
};

export default function playReducer(state: IPlayerState = prePlayerState, action: PlayerAction): IPlayerState {
  const { type, payload } = action
  switch (type) {
    case constants.SET_PLAYER:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
