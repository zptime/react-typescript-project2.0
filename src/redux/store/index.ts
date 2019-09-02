// src/store/index.ts

import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { chatReducer } from './chat/reducers'
import { systemReducer } from './system/reducers'

const rootReducer = combineReducers({
  chat: chatReducer,
  system: systemReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    // composeWithDevTools(middleWareEnhancer)
    middleWareEnhancer
  );

  return store;
}
