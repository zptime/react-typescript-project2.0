
/*
 * 合并root reducer
 * Reducers是函数，它们负责生成应用state的拷贝使之产生变化，但它并没有副作用。 它们是一种纯函数。
 */

import { combineReducers } from 'redux';

import audioReducer from './audio';
import demoReducer from './demo'
import headerReducer from './header';
import playerReducer from './player';
import playListReducer from './playlist';

export const rootReducer = combineReducers({
  audio: audioReducer,
  enthusiasm: demoReducer,
  header: headerReducer,
  playList: playListReducer,
  player: playerReducer,
})

export type AppState = ReturnType<typeof rootReducer>
