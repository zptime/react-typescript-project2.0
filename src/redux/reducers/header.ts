/*
 * headerbar状态
 */
// import { ISetHeaderAction } from '@/redux/actions/header';
import * as constants from '@/redux/constants'
import { AnyAction } from 'redux';
// import { createReducer } from '@/utils';
// import { IAction } from '../actions';

export interface IHeaderState {
  isShow?: boolean;
  title?: string;
  bg?: string;
}

export const preHeaderState: IHeaderState = {
  bg: 'rgba(43,162,251,0)',
  isShow: true,
  title: '标题',
};

// const handlers = {
//   [constants.SET_HEADER](state: IHeaderState,
//     action: IAction<constants.SET_HEADER, IHeaderState>): IHeaderState {
//     const { payload } = action;
//     return {
//       ...state,
//       ...payload
//     };
//   }
// };

// const header = createReducer({ initialState: preHeaderState, handlers });

// export default header;

// 原始reducer
export default function header(state: IHeaderState = preHeaderState, action: AnyAction): IHeaderState {
  const { type, payload } = action
  switch (type) {
    case constants.SET_HEADER:
      return {
        ...payload
      };
    // case constants.SET_HEADER_TITLE:
    //   return {
    //     ...state,
    //     title: payload
    //   };
    // case constants.SET_HEADER_BG:
    //   return {
    //     ...state,
    //     bg: payload
    //   }
    default:
      return state;
  }
}

