import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin'; // delete plugin

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Provider} from 'react-redux';

import {ConnectedRouter} from 'react-router-redux';

import './index.scss';

import Store from './Store';
import Routes from './routes';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={Store.getCreatedStore()}>
    <ConnectedRouter history={Store.getHistory()}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
