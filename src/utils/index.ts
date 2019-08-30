export function createReducer<IState>(initialState: IState, handlers: any) {
  return (state: IState = initialState, action: any) => {
    const { type } = action;
    if (handlers.hasOwnProperty(type)) {
      return handlers[type](state, action);
    }
    return state;
  }
}
