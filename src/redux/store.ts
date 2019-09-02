/*
 * redux store状态
 */

import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from './reducers';

import { IAudioState, preAudioState } from './reducers/audio';
import { IHeaderState, preHeaderState } from './reducers/header';
import { IPlayerState, prePlayerState } from './reducers/player';
import { IPlayListState, prePlayerListState } from './reducers/playlist';

export interface IStoreState {
  header: IHeaderState; // header数据
  audio: IAudioState; // 播放数据
  player: IPlayerState; // 播放器状态
  playList: IPlayListState; // 播放列表
}

const preState: IStoreState = {
  audio: preAudioState,
  header: preHeaderState,
  playList: prePlayerListState,
  player: prePlayerState,
}

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore<IStoreState, any, any, any>(
    rootReducer,
    preState,
    // composeWithDevTools(middleWareEnhancer)
    middleWareEnhancer
  );

  return store;
}
