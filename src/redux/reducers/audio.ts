
/*
 * 播放数据存储
 */
import { AudioAction } from '@/redux/actions/audio';
import * as constants from '@/redux/constants';

// 播放 NOTE: AudioState 接口的所有属性都可能是undefine，如何解决这个问题
export interface IAudioState {
  songHash?: string;
  // 歌曲文件url
  songUrl?: string;
  // 歌曲url
  imgUrl?: string;
  // 歌曲名称
  title?: string;
  // 歌手
  singer?: string;
  // 当前播放进度
  currentLength?: number;
  // 歌曲时间长度
  songLength?: number;
  // 是否被拖动了时间条 currentFlag
  changeProgress?: boolean;
  // 歌词
  lrc?: string;
}

export const preAudioState: IAudioState = {
  changeProgress: false,
  currentLength: 0,
  imgUrl: 'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
  lrc: '',
  singer: '',
  songLength: 0,
  songUrl: '',
  title: '',
};

export default function audioReducer(state: IAudioState = preAudioState, action: AudioAction): IAudioState {
  const { type, payload } = action
  switch (type) {
    case constants.SET_AUDIO:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
