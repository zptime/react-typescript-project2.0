import * as React from 'react';

import { red } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import configureStore from "@/redux/store";
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
const store = configureStore();

import Header from '@/components/Header'
import HeaderBar from '@/components/HeaderBar'
import Player from '@/components/Player/Player'
import { routes, routeWithSubRoutes } from './router';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fff',
    },
    error: {
      main: red.A400,
    },
    primary: {
      dark: '#0074c6',
      light: '#74d3ff',
      main: '#2ca2f9',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Header/>
              <HeaderBar/>
              <Switch>
                {
                  routes.map((route, i) => routeWithSubRoutes(route, i))
                }
              </Switch>
              <Player />
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
