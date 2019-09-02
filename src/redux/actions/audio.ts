/*
 * 歌曲播放action
 */
import Api from '@/api';
import * as constants from '@/redux/constants';
import { CancelToken } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { IAudioState } from '../reducers/audio';
import { IStoreState } from '../store';
import { PlayerAction, setPlayer } from './player';

export interface ISetAudioAction {
  type: constants.SET_AUDIO;
  payload: IAudioState;
}

export type AudioAction = ISetAudioAction;

// action creator
export function setAudio(payload: IAudioState): AudioAction {
  return {
    payload,
    type: constants.SET_AUDIO,
  };
}

// redux-thunk 中间件
export type IGetSongAction = ThunkAction<Promise<void>, IStoreState, null, AudioAction | PlayerAction>

export const getSong = (songHash: string,
  token?: CancelToken): IGetSongAction =>
  async (dispatch) => {
    try {
      // 设置加载歌曲开始
      dispatch(setPlayer({ loading: true }));

      const { data: { data } } = await Api.getSongInfo({ hash: songHash }, token);
      const audio: IAudioState = {
        changeProgress: false,
        currentLength: 0,
        imgUrl: data.img,
        lrc: data.lyrics,
        singer: data.author_name,
        songHash,
        songLength: data.timelength / 1000,
        songUrl: data.play_url,
        title: data.audio_name,
      };
      dispatch(setAudio(audio));
    } catch (e) {
      console.error(e);
      // NOTE: 在action里面发生error怎么办
    } finally {
      // 设置加载歌曲完毕
      dispatch(setPlayer({ loading: false }));
    }
  }
