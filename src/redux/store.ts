/*
 * redux store状态
 */
import { EnthusiasmAction } from '@/redux/actions';
import { enthusiasm } from '@/redux/reducers';
import { createStore } from 'redux'
// import { applyMiddleware, compose, createStore } from 'redux'
// import logger from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
// import reducer from './reducers'
// import { IAudioState, preAudioState } from './reducers/audio'
// import { IHeaderState, preHeaderState } from './reducers/header'
// import { IPlayerState, prePlayerState } from './reducers/player'
// import { IPlayListState, prePlayerListState } from './reducers/playlist'

// const middlewares = [thunkMiddleware]

// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(logger)
// }

// let composeEnhancers;
// if (process.env.NODE_ENV !== 'production') {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// } else {
//   composeEnhancers = compose;
// }

// 定义Redux保存的state的结构。
// 保存了类型的定义，在整个程序里都可能用到。
export interface IStoreState {
  // header: IHeaderState; // header数据
  // audio: IAudioState; // 播放数据
  // player: IPlayerState; // 播放器状态
  // playList: IPlayListState; // 播放列表
  languageName: string; // hello组件
  enthusiasmLevel: number; // hello组件
}

const preState: IStoreState = {
  enthusiasmLevel: 3, // hello组件
  languageName: 'TypeScript', // hello组件
  // header: preHeaderState,
  // audio: preAudioState,
  // player: prePlayerState,
  // playList: prePlayerListState
}

// export default createStore<IStoreState, any, any, any>(
//   reducer,
//   preState,
//   composeEnhancers(applyMiddleware(...middlewares))
// );

export default createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, preState);
