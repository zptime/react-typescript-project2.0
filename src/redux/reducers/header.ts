/*
 * headerbar状态
 */
import { HeaderAction } from '@/redux/actions'
import * as constants from '@/redux/constants'

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

// 原始reducer
export default function headerReducer(state: IHeaderState = preHeaderState, action: HeaderAction): IHeaderState {
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

