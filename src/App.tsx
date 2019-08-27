import * as React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Hello from './containers/Hello';
import { EnthusiasmAction } from './redux/actions';
import { enthusiasm } from './redux/reducers';
import { IStoreState } from './redux/store';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Hello />
      </Provider>
    );
  }
}

export default App;
