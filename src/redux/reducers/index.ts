
/*
 * 合并root reducer
 * Reducers是函数，它们负责生成应用state的拷贝使之产生变化，但它并没有副作用。 它们是一种纯函数。
 */
import { EnthusiasmAction } from '../actions';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants';
// import { combineReducers } from 'redux';
import { IStoreState } from '../store';
// import audio from './audio';
// import header from './header';
// import player from './player';
// import playList from './playlist';

export function enthusiasm(state: IStoreState, action: EnthusiasmAction): IStoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM: // 增加操作会让感叹级别加1
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM: // 减少操作则要将感叹级别减1，但是这个级别永远不能小于1
      // 对象展开（...state），当替换enthusiasmLevel时，它可以对状态进行浅拷贝。
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}

// export default combineReducers<IStoreState>({
//   header,
//   // audio,
//   // player,
//   // playList
// })
