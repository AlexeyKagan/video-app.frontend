import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.scss';
// import routes from './routes'; // warning
import configureStore from './store/store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

// ReactDOM.render(
//   <Provider store={store}>
//     <MuiThemeProvider>
//       <Router history={history} routes={routes}/>
//     </MuiThemeProvider>
//   </Provider>,
//   document.getElementById('root')
// );
function Asd() {
  return <div>Hello world</div>;
}
ReactDOM.render(<Asd />,
  document.getElementById('root')
);