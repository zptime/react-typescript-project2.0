import * as constants from '@/redux/constants';

// 负责增加操作的行为
export interface IIncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

// 负责减少操作的行为
export interface IDecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

// 描述了哪些action是可以增加或减少的
export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;


// 定义了两个函数用来创建实际的actions。
export function incrementEnthusiasm(): IIncrementEnthusiasm {
  return {
      type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
  return {
      type: constants.DECREMENT_ENTHUSIASM
  }
}
