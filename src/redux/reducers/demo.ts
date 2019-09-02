import { EnthusiasmAction } from '../actions/demo';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/demo';

export interface IDemoState {
  enthusiasmLevel: number;
  languageName: string;
}

const initState: IDemoState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

export default function enthusiasm(state: IDemoState = initState, action: EnthusiasmAction): IDemoState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM: // 增加操作会让感叹级别加1
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM: // 减少操作则要将感叹级别减1，但是这个级别永远不能小于1
      // 对象展开（...state），当替换enthusiasmLevel时，它可以对状态进行浅拷贝。
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}
