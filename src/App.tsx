import * as React from 'react';
import './App.css';

import store from '@/redux/store'
import { red } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '@/components/Header'
import HeaderBar from '@/components/HeaderBar'
import NewSong from '@/page/Tab/NewSong'
import Rank from '@/page/Tab/Rank'
import Singer from '@/page/Tab/Singer'
import SongList from '@/page/Tab/SongList'

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
              <div className="tab-container">
                <Switch>
                  <Route path="/tab/newsong" component={NewSong} />
                  <Route path="/tab/rank" component={Rank} />
                  <Route path="/tab/songlist" component={SongList} />
                  <Route path="/tab/singer" component={Singer} />
                </Switch>
              </div>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
